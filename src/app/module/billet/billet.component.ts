import { Component, OnInit } from '@angular/core';
import { BilletService } from 'src/app/service/billet.service';

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.sass']
})
export class BilletComponent implements OnInit {

  constructor(private _billetService : BilletService) { }

  public billets = [];
  public errorMsg;
  public jour;
  public an;
  async ngOnInit() {

    this.billets = await this._billetService.getBillets()
    .toPromise();

    for(let b = 0; b < this.billets.length; b++){

      let unAn = 60*60*24*365;
      let unJour = 60*60*24;
    

      let second = Number(this.billets[b].dureeValidite)
      this.an = second /unAn;
      this.an = Math.trunc(this.an)
      second -= Math.trunc(this.an) * unAn ; 
      this.jour = second /unJour;
      this.jour = Math.trunc(this.jour);

      this.billets[b].dureeValidite = this.an + " an " + this.jour + " jour ";

    }
  }

}
