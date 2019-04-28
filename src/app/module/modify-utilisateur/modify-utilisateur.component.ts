import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { ComponentFactoryResolver } from '@angular/core/src/render3';

@Component({
  selector: 'app-modify-utilisateur',
  templateUrl: './modify-utilisateur.component.html',
  styleUrls: ['./modify-utilisateur.component.scss']
})
export class ModifyUtilisateurComponent implements OnInit {

  public id : number;
  public userModel : Utilisateur = new Utilisateur(0, "", "", "", "", "", "", "", "", "", "");
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private route: ActivatedRoute, private _utilisateurService : UtilisateurService) { }

  async ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.userModel = await this._utilisateurService.getUtilisateurById(this.token, this.id.toString()).toPromise();

    let date = new Date(this.userModel.date_de_naissance);
    let dateTab = date.toISOString().toString().split("T");
    this.userModel.date_de_naissance = dateTab[0];

  }

  onSubmit(){
    this.userModel.id = this.id;
    this._utilisateurService.updateUtilisateur(this.token, this.userModel).subscribe(res => location.replace('../accueilAdmin/gestionUtilisateur'), err=>console.log(err));
  }

}
