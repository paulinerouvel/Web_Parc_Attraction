import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-modify-profil',
  templateUrl: './modify-profil.component.html',
  styleUrls: ['./modify-profil.component.scss']
})
export class ModifyProfilComponent implements OnInit {

  public errMsg;
  public token : string = localStorage.getItem('token');
  public userModel : Utilisateur = new Utilisateur(-1, "", "", "", "", "", "", "", "", "", "");

  constructor(private _utilisateurService : UtilisateurService) { 

    
  }

  async ngOnInit() {
    let dec = jwt_decode(this.token);
    this.userModel = await this._utilisateurService.getUtilisateurById(this.token, dec.id).toPromise();

    let date = new Date(this.userModel.date_de_naissance);
    let dateTab = date.toISOString().toString().split("T");
    this.userModel.date_de_naissance = dateTab[0];

  }

  onSubmit(){
    this._utilisateurService.updateUtilisateur(this.token, this.userModel).subscribe(res=>alert("Profil modifié !"));
  }

}
