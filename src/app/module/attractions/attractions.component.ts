import { Component, OnInit } from '@angular/core';
import { Attraction } from '../../model/attraction';
import { AttractionsService } from '../../service/attractions.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.sass']
})
export class AttractionsComponent implements OnInit {

  constructor(private _attractionService : AttractionsService) { }
  
  public attractions = [];
  public errorMsg;
  ngOnInit() {

    this._attractionService.getAttractions()
    .subscribe(data =>this.attractions = data,
                error => this.errorMsg = error);
  }

}
