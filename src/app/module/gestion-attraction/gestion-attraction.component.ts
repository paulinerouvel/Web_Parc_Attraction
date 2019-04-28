import { Component, OnInit } from '@angular/core';
import { AttractionsService } from 'src/app/service/attractions.service';
import { Attraction } from 'src/app/model/attraction';

@Component({
  selector: 'app-gestion-attraction',
  templateUrl: './gestion-attraction.component.html',
  styleUrls: ['./gestion-attraction.component.sass']
})
export class GestionAttractionComponent implements OnInit {

  public attrs : Attraction[];
  public errorMsg;
  public token : string = localStorage.getItem('token');

  constructor(private _attractionService : AttractionsService) { }

  ngOnInit() {
    this._attractionService.getAttractions()
    .subscribe(data =>this.attrs = data,
                error => this.errorMsg = error);
      
  }


  suppress(id){
    this._attractionService.deleteAttractions(this.token, id).subscribe(res=>console.log(res), err=>console.log(err))
    location.reload();
  }


}
