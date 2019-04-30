import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParcService } from 'src/app/service/parc.service';
import {  Parc } from 'src/app/model/parc';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-gestion-parc',
  templateUrl: './gestion-parc.component.html',
  styleUrls: ['./gestion-parc.component.sass']
})
export class GestionParcComponent implements OnInit {

  public id : number;
  public parc : Parc = new  Parc(0, "", "", "", "", "", "", "", 0, true);
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private route: ActivatedRoute, private _parcServices : ParcService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this._parcServices.getParcById(this.id).subscribe( res => this.parc = res, err => this.errMsg = err);

  }

  onSubmit(){
    this._parcServices.updateParc(this.token, this.parc).subscribe(res => location.replace('../accueilAdmin/gestionParc'), err => this.errMsg = err)
  }
}

