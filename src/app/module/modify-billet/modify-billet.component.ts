import { Component, OnInit } from '@angular/core';
import { Billet } from 'src/app/model/billet';
import { ActivatedRoute } from '@angular/router';
import { BilletService } from 'src/app/service/billet.service';

@Component({
  selector: 'app-modify-billet',
  templateUrl: './modify-billet.component.html',
  styleUrls: ['./modify-billet.component.sass']
})
export class ModifyBilletComponent implements OnInit {

  public id : number;
  public billet : Billet = new Billet(0,"", "",0, "");
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private route: ActivatedRoute, private _billetService : BilletService ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this._billetService.getBilletById(this.id.toString()).subscribe(res=> this.billet = res, err=> this.errMsg = err)
  }

  onSubmit(){
    this.billet.id = this.id; 
    this._billetService.updateBillet(this.token, this.billet).subscribe(res => location.replace('../accueilAdmin/gestionBillets'), err => this.errMsg = err)
  }

}
