import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import * as jwt_decode from 'jwt-decode';
import { BilletUtilisateurService } from 'src/app/service/billet-utilisateur.service';

@Component({
  selector: 'app-acces-parc',
  templateUrl: './acces-parc.component.html',
  styleUrls: ['./acces-parc.component.sass']
})
export class AccesParcComponent implements OnInit {

  public token : string = localStorage.getItem('token');
  public tokenDec = jwt_decode(this.token);
  public idUser = this.tokenDec.id;

  constructor(private _billetUtilisateurService : BilletUtilisateurService) { 
  
    this._billetUtilisateurService.getBUByUser(this.token, this.idUser).subscribe(res=>console.log(res))
  }

  ngOnInit() {
  }

  

}
