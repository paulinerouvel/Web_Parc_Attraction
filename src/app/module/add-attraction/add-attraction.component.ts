import { Component, OnInit } from '@angular/core';
import { Attraction } from 'src/app/model/attraction';
import { AttractionsService } from 'src/app/service/attractions.service';

@Component({
  selector: 'app-add-attraction',
  templateUrl: './add-attraction.component.html',
  styleUrls: ['./add-attraction.component.scss']
})
export class AddAttractionComponent implements OnInit {
  
  public id : number;
  public attr : Attraction = new Attraction(0, "", "", "", 0, "", "", true, true, true, 1);
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private _attractionService : AttractionsService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._attractionService.addAttraction(this.token, this.attr).subscribe(res=>location.replace('../accueilAdmin/gestionAttractions'), err => this.errMsg = err)

  }
}
