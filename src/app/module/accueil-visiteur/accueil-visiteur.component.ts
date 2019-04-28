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


  ngOnInit() {
  }

  accesParc(){
    let tokenDec = jwt_decode(this.token);
    this._utilisateurService.addAccesParc(this.token, "1", tokenDec.id).subscribe(res=>console.log(res))
  }

  sortieParc(){
    console.log("la2")
    window.open(location.pathname,"nom_popup","menubar=no, status=no, scrollbars=no, menubar=no, width=200, height=100");
  }

  accesAttraction(){
    console.log("la3")
  }

}
