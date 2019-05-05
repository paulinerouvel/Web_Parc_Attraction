import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import * as jwt_decode from 'jwt-decode';
import { BilletUtilisateurService } from 'src/app/service/billet-utilisateur.service';
import { Billet_utilisateur } from 'src/app/model/billet_utilisateur';
import { BilletService } from 'src/app/service/billet.service';
import { Alert } from 'selenium-webdriver';
import { ParcService } from 'src/app/service/parc.service';


@Component({
  selector: 'app-acces-parc',
  templateUrl: './acces-parc.component.html',
  styleUrls: ['./acces-parc.component.sass']
})
export class AccesParcComponent implements OnInit {

  public id : number;
  public errMsg;
  public token : string = localStorage.getItem('token');
  public billets = [];
  public BUs = [];

  constructor(private _billetService : BilletService, private _billetUtilisateur : BilletUtilisateurService, private _utilisateurService : UtilisateurService) { 
  
    
  }

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
      if(selectedBU.nbEntreeDispo == 0){

        alert("Billet Invalide !");
        valid = false;
      }
      else{
        selectedBU.nbEntreeDispo -= 1;
        await this._billetUtilisateur.updateBU(this.token, selectedBU).toPromise();
      }


      

      let acces : any = await this._utilisateurService.getAccesParc(this.token, this.id.toString()).toPromise();
      let sorties = await this._utilisateurService.getSortieParc(this.token, this.id.toString()).toPromise();

      let oneDayVerif;
      if(selectedBillet.type == "PASS 1daymonth"){
        for( let j = 0; j < acces.length; j++){
          if(acces[j].idBU == selectedBU.id){
            oneDayVerif = acces[j].date;
          }
        }

        

        let dateVerif = new Date(oneDayVerif ).toISOString();
        let tab = dateVerif.split("T");
        let tab2 = tab[0];
        let tab3 = tab2.split('-');

        let mois;
        let day;
        Number(tab3[1])+1 < 10 ? mois = "0" + (Number(tab3[1])+1) : mois = (Number(tab3[1])+1);

        let d = tab3[0] + "-" + mois + '-' + tab3[2];

        

        if( new Date(d) <= new Date(Date.now())){
          valid = true;
        }
        else{
          valid = false;
        }

      }
      

      if(valid == true){

    
        if(acces.length != 0 && sorties.length != 0){
          let lastAcces : any = acces[acces.length - 1 ];
          let lastSortie : any = sorties[sorties.length - 1 ];

      
          if(new Date(lastAcces.date) < new Date(lastSortie.date)){
            await this._utilisateurService.addAccesParc(this.token, "1", this.id.toString(), selectedBU.id).toPromise();
            alert("Entrée enregistrée !");
            location.replace("../accueilVisiteur/");
          }
          else{
            alert("Vous ne pouvez pas entrer sans être sorti ;)");
          }
        }
        else{
          if(acces.length != 0 && sorties.length == 0){
            alert("Vous ne pouvez pas entrer sans être sorti ;)");
          }
          else{
            this._utilisateurService.addAccesParc(this.token, "1", this.id.toString(), selectedBU.id).toPromise();
            alert("Entrée enregistrée !");
            location.replace("../accueilVisiteur/");
          }

        }


      }


    }
  }
  
}
