import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';
import { AuthentificationService } from '../service/authentification.service';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.sass']
})
export class InscriptionComponent implements OnInit {

  errorMsg ='';
  submitted = false;
  userModel = new Utilisateur(0,"","","","","","","","","Visiteur","");
  constructor(private _auth: AuthentificationService, private _router: AppRoutingModule) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.userModel);

    this._auth.register(this.userModel)
    // .subscribe(
    //   res=> {
    //     console.log(res)
    //     localStorage.setItem('token', res.token)
    //     //this?_router.navigate(['/jkjkj'])
    //     this._router.
    //   },
    //   err=>console.log(err)
    // )
  }

}
