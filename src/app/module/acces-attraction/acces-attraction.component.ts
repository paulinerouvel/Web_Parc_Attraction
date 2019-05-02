import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BilletService } from 'src/app/service/billet.service';
import { BilletUtilisateurService } from 'src/app/service/billet-utilisateur.service';

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

  constructor(private _billetService : BilletService, private _billetUtilisateur : BilletUtilisateurService) { }

  async ngOnInit() {
    let dec = jwt_decode(this.token);
    this.BUs = await this._billetUtilisateur.getBUByUser(this.token, dec.id).toPromise();

    for(let i = 0 ; i < this.BUs.length; i++){
       let item = await this._billetService.getBilletById(this.BUs[i].Billet_id).toPromise();
       this.billets.push(item)
    }
    
  }

}
