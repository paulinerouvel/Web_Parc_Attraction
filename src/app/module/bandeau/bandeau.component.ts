import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeau',
  templateUrl: './bandeau.component.html',
  styleUrls: ['./bandeau.component.sass']
})
export class BandeauComponent implements OnInit {

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




}
