import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BilletService } from 'src/app/service/billet.service';
import { BilletUtilisateurService } from 'src/app/service/billet-utilisateur.service';
import { Billet_utilisateur } from 'src/app/model/billet_utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-acces-attraction',
  templateUrl: './acces-attraction.component.html',
  styleUrls: ['./acces-attraction.component.sass']
})
export class AccesAttractionComponent implements OnInit {

  public id : number;
  public errMsg;
  public token : string = localStorage.getItem('token');
  public billets = [];
  public BUs = [];

  constructor(private _utilisateurService : UtilisateurService,private _billetService : BilletService, private _billetUtilisateur : BilletUtilisateurService) { }

  async ngOnInit() {
    let dec = jwt_decode(this.token);
    this.id = dec.id;
    this.BUs = await this._billetUtilisateur.getBUByUser(this.token, dec.id).toPromise();

    for(let i = 0 ; i < this.BUs.length; i++){
       let item = await this._billetService.getBilletById(this.BUs[i].Billet_id).toPromise();
       this.billets.push(item)
    }
    
  }

  async select(id){

    let valid = true;

    let selectedBU : Billet_utilisateur = await this._billetUtilisateur.getBUById(this.token, id).toPromise();
    selectedBU = selectedBU[0];

    let selectedBillet = await this._billetService.getBilletById(selectedBU.Billet_id.toString()).toPromise();


    let dF = new Date(selectedBU.dateFin);
    let dD = new Date(selectedBU.dateDebut);
    let now = Date.now();
    let dN = new Date(now);


    if(dF < dN || dD > dN){
      alert("Date Invalide, Billet non valide !");
      valid = false;
    }
    else{
      if(selectedBillet.type == "PASS 1daymonth"){
        if(selectedBU.nbEntreeDispo == 0){

          alert("Billet Invalide !");
          valid = false;
        }
        else{
          selectedBU.nbEntreeDispo -= 1;
          await this._billetUtilisateur.updateBU(this.token, selectedBU).toPromise();
        }
      }

      if(valid == true){




        let acces = await this._utilisateurService.getAccesParc(this.token, this.id.toString()).toPromise();
        let sorties = await this._utilisateurService.getSortieParc(this.token, this.id.toString()).toPromise();
    
        if(acces.length != 0 && sorties.length != 0){
          let lastAcces : any = acces[acces.length - 1 ];
          let lastSortie : any = sorties[sorties.length - 1 ];

      
          if(new Date(lastAcces.date) > new Date(lastSortie.date)){
            location.replace('../accueilVisiteur/accesAttraction/selectAttr/' + id);
          }
          else{
            alert("Vous devez être entré dans le parc pour acceder à une attraction");
          }
        }
        else{
          if(acces.length != 0 && sorties.length == 0){
            location.replace('../accueilVisiteur/accesAttraction/selectAttr/' + id);
          }
          else{
            alert("Vous devez être entré dans le parc pour acceder à une attraction");
          }

        }


      }


    }
  }



}
