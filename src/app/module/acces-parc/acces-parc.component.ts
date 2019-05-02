import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import * as jwt_decode from 'jwt-decode';
import { BilletUtilisateurService } from 'src/app/service/billet-utilisateur.service';
import { Billet_utilisateur } from 'src/app/model/billet_utilisateur';
import { BilletService } from 'src/app/service/billet.service';


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

  constructor(private _billetService : BilletService, private _billetUtilisateur : BilletUtilisateurService) { 
  
    
  }

  async ngOnInit() {
    let dec = jwt_decode(this.token);
    this.BUs = await this._billetUtilisateur.getBUByUser(this.token, dec.id).toPromise();

    for(let i = 0 ; i < this.BUs.length; i++){
       let item = await this._billetService.getBilletById(this.BUs[i].Billet_id).toPromise();
       this.billets.push(item)
    }
    
  }

  select(id){
    console.log(id)

    //faire l'acces parc 
  }
  

}
