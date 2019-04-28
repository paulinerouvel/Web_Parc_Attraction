import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.sass']
})
export class GestionUtilisateurComponent implements OnInit {

  public users : Utilisateur[];
  public errorMsg;
  public token : string = localStorage.getItem('token');

  constructor(private _utilisateurService : UtilisateurService) { 

    this._utilisateurService.getAllUtilisateurs(this.token).subscribe(res=> this.users = res, err => this.errorMsg = err)

  }

  ngOnInit() {
  }

  suppress(id){
    this._utilisateurService.deleteUtilisateur(this.token, id).subscribe(res=>location.reload(), err=> this.errorMsg = err);
  }

}
