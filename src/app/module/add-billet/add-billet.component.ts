import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Billet } from 'src/app/model/billet';
import { BilletService } from 'src/app/service/billet.service';

@Component({
  selector: 'app-add-billet',
  templateUrl: './add-billet.component.html',
  styleUrls: ['./add-billet.component.sass']
})
export class AddBilletComponent implements OnInit {

  public id = this.route.snapshot.params.id;
  public billet : Billet = new Billet(0, "", "", 0);
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private route: ActivatedRoute, private _billetService : BilletService) { }

  ngOnInit() {
  }
  
  onSubmit(){
    this._billetService.addBillet(this.token, this.billet).subscribe(res => location.replace('../accueilAdmin/gestionBillets'), err => this.errMsg = err);
  }
  

}
