import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Attraction } from 'src/app/model/attraction';
import { AttractionsService } from 'src/app/service/attractions.service';
import { EventEmitter } from 'events';
import { BilletService } from 'src/app/service/billet.service';

@Component({
  selector: 'app-add-attr-billet',
  templateUrl: './add-attr-billet.component.html',
  styleUrls: ['./add-attr-billet.component.scss']
})
export class AddAttrBilletComponent implements OnInit {
  public id = this.route.snapshot.params.id;
  public attrs : Attraction[];
  public attrsAlreadyAssocied : Attraction[];
  public attractions = [];
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private route: ActivatedRoute, private _attractionService : AttractionsService, private router : Router) { 
    
  }

  async ngOnInit() {

    this.attrs = await this._attractionService.getAttractions().toPromise();
    this.attractions = new Array<number>(this.attrs.length);

    this.attrsAlreadyAssocied = await this._attractionService.getAttractionByBillet(this.id).toPromise();
    console.log(this.attrsAlreadyAssocied)

  }




}
