import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';
import { Billet } from 'src/app/model/billet';
import { BilletService } from 'src/app/service/billet.service';
import { BilletUtilisateurService } from 'src/app/service/billet-utilisateur.service';
import { Billet_utilisateur } from 'src/app/model/billet_utilisateur';

@Component({
  selector: 'app-achat-billet-info',
  templateUrl: './achat-billet-info.component.html',
  styleUrls: ['./achat-billet-info.component.sass']
})
export class AchatBilletInfoComponent implements OnInit {

  public token : string = localStorage.getItem('token');
  public dateDebut;
  public id; 


  constructor(private route : ActivatedRoute, private _billetService : BilletService, private _billetUtilisateurService : BilletUtilisateurService) { 
    this.id= this.route.snapshot.params.id;
  }

  ngOnInit() {
  }
  


  async onSubmit(){

    let billet : Billet = await this._billetService.getBilletById(this.id).toPromise();

    let date = new Date(Date.now());
    let dateStr = date.toISOString().toString().split("T");


    let dec = jwt_decode(this.token);
    let UtilisateurId = dec.id;
    let  BilletId = this.id;
    let dateAchat = dateStr[0];
    let dateDebut = this.dateDebut;


    let dateDebutFormat = new Date(dateDebut);
    let dureeSomme = dateDebutFormat.getTime() + Number(billet.dureeValidite)*1000;
    let dureeToDate = new Date(dureeSomme);
    let dateFinTab = dureeToDate.toISOString().toString().split("T");
    let  dateFin = dateFinTab[0];

    let nbEntreeDispo = -1;

    if(billet.type == "1dayMonth"){
      nbEntreeDispo = 12;
    }
 
    let newBU = new Billet_utilisateur(UtilisateurId, BilletId, dateAchat, dateDebut, dateFin, nbEntreeDispo);
    this._billetUtilisateurService.addBU(this.token, newBU).subscribe(res=>location.replace('../accueilVisiteur/mesBillets'));
  }

}
