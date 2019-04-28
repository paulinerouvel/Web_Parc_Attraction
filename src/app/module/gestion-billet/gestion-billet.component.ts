import { Component, OnInit } from '@angular/core';
import { Billet } from 'src/app/model/billet';
import { BilletService } from 'src/app/service/billet.service';

@Component({
  selector: 'app-gestion-billet',
  templateUrl: './gestion-billet.component.html',
  styleUrls: ['./gestion-billet.component.sass']
})
export class GestionBilletComponent implements OnInit {

  public bills : Billet[];
  public errorMsg;
  public token : string = localStorage.getItem('token');

  constructor(private _billetService : BilletService) { 
    this._billetService.getBillets().subscribe(res=>this.bills = res)
  }

  ngOnInit() {
  }

  suppress(id){
    this._billetService.deleteBillet(this.token, id).subscribe(res=>location.reload(), err=> this.errorMsg = this.errorMsg)
  }

}
