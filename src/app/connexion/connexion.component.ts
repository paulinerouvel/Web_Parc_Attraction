import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.sass']
})
export class ConnexionComponent implements OnInit {

  errorMsg ='';
  submitted = false;
  userModel = new Utilisateur(0,"","","","","","","","","","");
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.userModel);
  }

}
