import { Component, OnInit } from '@angular/core';
import { AttractionsService } from 'src/app/service/attractions.service';
import { ParcService } from 'src/app/service/parc.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-accueil-visiteur',
  templateUrl: './accueil-visiteur.component.html',
  styleUrls: ['./accueil-visiteur.component.scss']
})
export class AccueilVisiteurComponent implements OnInit {

  constructor(private _utilisateurService : UtilisateurService) { }

  public token : string = localStorage.getItem('token');
  public tokenDec = jwt_decode(this.token);
  public idUser = this.tokenDec.id;
  public acces;
  public sorties;


  ngOnInit() {
  }



  async sortieParc(){
    this.acces = await this._utilisateurService.getAccesParc(this.token, this.idUser).toPromise();
    this.sorties = await this._utilisateurService.getSortieParc(this.token, this.idUser).toPromise();

    if(this.acces.length != 0 && this.sorties.length != 0){
      let lastAcces = this.acces[this.acces.length - 1 ];
      let lastSortie = this.sorties[this.sorties.length - 1 ];
  
      if(new Date(lastAcces.date) < new Date(lastSortie.date)){
        await this._utilisateurService.addSortieParc(this.token, "1", this.idUser).toPromise();
        alert("Sortie Enregistrée")
      }
      else{
        alert("Vous ne pouvez pas sortir sans être entré ;)");
      }
    }
    else{
      alert("Vous ne pouvez pas sortir sans être entré ;)");
    }


  }


}
