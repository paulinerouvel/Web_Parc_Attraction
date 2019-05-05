import { Component, OnInit } from '@angular/core';
import { AttractionsService } from 'src/app/service/attractions.service';
import { Attraction } from 'src/app/model/attraction';
import { ActivatedRoute } from '@angular/router';
import { BilletUtilisateurService } from 'src/app/service/billet-utilisateur.service';
import { BilletService } from 'src/app/service/billet.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-select-attraction',
  templateUrl: './select-attraction.component.html',
  styleUrls: ['./select-attraction.component.sass']
})
export class SelectAttractionComponent implements OnInit {

  public attractions : Attraction[];
  public BUId;
  public selectedBU;
  public token : string = localStorage.getItem('token');

  constructor(private _utilisateurService : UtilisateurService,private _billetService : BilletService,private _attractionsService : AttractionsService, private route : ActivatedRoute, private _buService : BilletUtilisateurService) { }

  async ngOnInit() {
    this.BUId = this.route.snapshot.params.id;
    this.attractions = await this._attractionsService.getAttractions().toPromise();

  }

  async select(id){

    let attr = await this._attractionsService.getAttractionById(id).toPromise();

    if(attr.en_maintenance == true){
      alert('Cette attraction est en maintenance');
    }
    else{
      let valid = false;
      this.selectedBU = await this._buService.getBUById(this.token, this.BUId).toPromise();
      let typeBillet = await this._billetService.getBilletById(this.selectedBU[0].Billet_id).toPromise();
      let attractionsAssociees = await this._attractionsService.getAttractionByBillet(typeBillet.id.toString()).toPromise();
  
      for (let i = 0; i <attractionsAssociees.length; i++){
        if(attractionsAssociees[i].id == id){
          valid = true;
        }
      }
      let dec = jwt_decode(this.token);

      let accesAttr : any = await this._utilisateurService.getAccesAttraction(this.token, dec.id, id).toPromise();

      let accEscape = [];

      if(typeBillet.type == "PASS Escape game"){
        for(let accAttr = 0; accAttr < accesAttr.length; accAttr++){
          if(accesAttr[accAttr].idBU == this.selectedBU.id){
            accEscape.push(accesAttr[accAttr]);
          }
        }

        let attractionsAssocie : any = await this._attractionsService.getAttractionByBillet(typeBillet.id.toString()).toPromise();



        if(attractionsAssocie.length == accesAttr.length){
          alert("Vous avez finis le parcours escape game");
          valid = false;
        }
        else {

          for(let w = 0; w < attractionsAssocie.length; w++){

            if (attractionsAssocie[w].order == accesAttr.length +1){
              if(id != attractionsAssocie[w].id){
                alert("Veuillez réaliser le parcours escape game dans l'ordre");
                valid = false;
              }
            }
          }
        
        }
      }



  
      if(valid){
        
        await this._utilisateurService.addAccesAttraction(this.token, id, dec.id, this.selectedBU[0].id).toPromise();
        alert("Entrée enregistrée");
        location.replace("../accueilVisiteur");
      }
      else{
  
        alert("Attraction non comprise dans ce billet");
      }
    }



  }

}
