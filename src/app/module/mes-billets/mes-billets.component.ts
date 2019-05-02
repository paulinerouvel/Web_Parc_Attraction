import { Component, OnInit } from '@angular/core';
import { BilletService } from 'src/app/service/billet.service';
import { BilletUtilisateurService } from 'src/app/service/billet-utilisateur.service';
import { Billet_utilisateur } from 'src/app/model/billet_utilisateur';
import { Billet } from 'src/app/model/billet';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-mes-billets',
  templateUrl: './mes-billets.component.html',
  styleUrls: ['./mes-billets.component.sass']
})
export class MesBilletsComponent implements OnInit {

  public id : number;
  public errMsg;
  public token : string = localStorage.getItem('token');
  public billets = [];
  public BUs = [];


  constructor(private _billetService : BilletService, private _billetUtilisateur : BilletUtilisateurService) { }

  async ngOnInit() {
    let dec = jwt_decode(this.token);
    this.BUs = await this._billetUtilisateur.getBUByUser(this.token, dec.id).toPromise();
    console.log(this.BUs)

    for(let i = 0 ; i < this.BUs.length; i++){
       let item = await this._billetService.getBilletById(this.BUs[i].Billet_id).toPromise();
       this.billets.push(item)
    }
    
  }

}
