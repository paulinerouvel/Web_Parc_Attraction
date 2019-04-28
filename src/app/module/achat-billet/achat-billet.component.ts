import { Component, OnInit } from '@angular/core';
import { BilletService } from 'src/app/service/billet.service';
import { ActivatedRoute } from '@angular/router';
import { Billet } from 'src/app/model/billet';

@Component({
  selector: 'app-achat-billet',
  templateUrl: './achat-billet.component.html',
  styleUrls: ['./achat-billet.component.sass']
})
export class AchatBilletComponent implements OnInit {


  public billets : Billet[];
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private route: ActivatedRoute, private billetService : BilletService) {

    this.billetService.getBillets().subscribe(res=> this.billets = res, err=> this.errMsg = err)
   }

  ngOnInit() {
  }

}
