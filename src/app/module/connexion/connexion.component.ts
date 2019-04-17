import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../model/utilisateur';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.sass']
})
export class ConnexionComponent implements OnInit {

  errorMsg ='';
  submitted = false;
  userModel = new Utilisateur(0,"","","","","","","","","","");
  constructor(private _auth: AuthentificationService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;


    this._auth.login(this.userModel)
    .subscribe(
      res=> {

        localStorage.setItem('token', res.token)
        let dec = jwt_decode(res.token);



        if(dec.type == "Administrateur"){
          this.router.navigate(['/accueilAdmin']);
        }
        else{
          this.router.navigate(['/accueilVisiteur']);
        }
        
        
        
      },
      err=>console.log(err)
    );
  }
  

}
