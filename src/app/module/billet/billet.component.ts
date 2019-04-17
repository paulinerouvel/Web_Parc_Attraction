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
  ngOnInit() {

    this._billetService.getBillets()
    .subscribe(data =>this.billets = data,
                error => this.errorMsg = error);
  }

}
