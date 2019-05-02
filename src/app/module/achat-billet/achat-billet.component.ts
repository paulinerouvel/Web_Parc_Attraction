import { Component, OnInit } from '@angular/core';
import { BilletService } from 'src/app/service/billet.service';
import { ActivatedRoute } from '@angular/router';
import { Billet } from 'src/app/model/billet';
import { BilletUtilisateurService } from 'src/app/service/billet-utilisateur.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-achat-billet',
  templateUrl: './achat-billet.component.html',
  styleUrls: ['./achat-billet.component.sass']
})
export class AchatBilletComponent implements OnInit {


  public billets : Billet[];
  public errMsg;
  public token : string = localStorage.getItem('token');
  public jour;
  public an;

  constructor(private route: ActivatedRoute, private _billetService : BilletService, private _billetUtilisateurService : BilletUtilisateurService) {


   }

  async ngOnInit() {

    this.billets = await this._billetService.getBillets().toPromise();

    for(let b = 0; b < this.billets.length; b++){

      let unAn = 60*60*24*365;
      let unJour = 60*60*24;
    

      let second = Number(this.billets[b].dureeValidite)
      this.an = second /unAn;
      this.an = Math.trunc(this.an)
      second -= Math.trunc(this.an) * unAn ; 
      this.jour = second /unJour;
      this.jour = Math.trunc(this.jour);

      this.billets[b].dureeValidite = this.an + " an " + this.jour + " jour ";

    }
  }



}
