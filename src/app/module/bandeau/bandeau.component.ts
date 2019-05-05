import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.sass']
})
export class BandeauComponent implements OnInit {

  public token : string = localStorage.getItem('token');
  public connexBtn : boolean;
  constructor() { }


  ngOnInit() {

    setInterval(() => {
      if(location.pathname == "/inscription" || location.pathname == "/billet" || location.pathname == "/contact" || location.pathname == "/attractions"){
        this.connexBtn = true;
      }
      else{
        this.connexBtn = false;
      }
    }, 500);
    
  }

  disconnect(){
    localStorage.removeItem('token');
    location.replace('/');
  }


  btnAccueil(){
    if(location.pathname.includes("/inscription") != true && location.pathname.includes("/billet") != true && location.pathname.includes("/contact") != true && location.pathname.includes("/attractions") != true){
      

      let dec = jwt_decode(this.token);



      if(dec.type == "Administrateur"){
        location.replace('../accueilAdmin');
      }
      else{
        location.replace('../accueilVisiteur');
      }
      
      
      
    }
  }



}
