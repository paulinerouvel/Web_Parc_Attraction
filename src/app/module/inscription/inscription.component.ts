import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../model/utilisateur';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  errorMsg ='';
  submitted = false;
  userModel = new Utilisateur(0,"","","","","","","","","Visiteur","");
  constructor(private _auth: AuthentificationService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.userModel)

    this._auth.register(this.userModel)
    .subscribe(
      res=> {
        
        localStorage.setItem('token', res.token)
        this.router.navigate(['/billet']); //a rediriger correctement
      },
      err=>console.log(err)
    );
  }

}
