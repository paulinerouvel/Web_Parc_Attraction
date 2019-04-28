import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.scss']
})
export class AddUtilisateurComponent implements OnInit {


  public userModel : Utilisateur = new Utilisateur(0,"","", "", "", "", "", "", "", "Administrateur", "");
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private _utilisateurService : UtilisateurService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._utilisateurService.addUtilisateur(this.token, this.userModel).subscribe(res=>location.replace('../accueilAdmin/gestionUtilisateur'))
  }

}
