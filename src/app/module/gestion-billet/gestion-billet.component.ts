import { Component, OnInit } from '@angular/core';
import { Billet } from 'src/app/model/billet';
import { BilletService } from 'src/app/service/billet.service';

@Component({
  selector: 'app-gestion-billet',
  templateUrl: './gestion-billet.component.html',
  styleUrls: ['./gestion-billet.component.sass']
})
export class GestionBilletComponent implements OnInit {
  public jour;
  public an;

  public bills : Billet[];
  public errorMsg;
  public token : string = localStorage.getItem('token');

  constructor(private _billetService : BilletService) { 
    


  }

  async ngOnInit() {
    this.bills = await this._billetService.getBillets().toPromise();

    for(let b = 0; b < this.bills.length; b++){

      let unAn = 60*60*24*365;
      let unJour = 60*60*24;
    

      let second = Number(this.bills[b].dureeValidite)
      this.an = second /unAn;
      this.an = Math.trunc(this.an)
      second -= Math.trunc(this.an) * unAn ; 
      this.jour = second /unJour;
      this.jour = Math.trunc(this.jour);

      this.bills[b].dureeValidite = this.an + " an " + this.jour + " jour ";

    }
  }

  suppress(id){
    this._billetService.deleteBillet(this.token, id).subscribe(res=>location.reload(), err=> this.errorMsg = this.errorMsg)
  }

}
