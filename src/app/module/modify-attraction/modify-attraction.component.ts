import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttractionsService } from 'src/app/service/attractions.service';
import { Attraction } from 'src/app/model/attraction';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-modify-attraction',
  templateUrl: './modify-attraction.component.html',
  styleUrls: ['./modify-attraction.component.scss']
})
export class ModifyAttractionComponent implements OnInit {

  public id : number;
  public attr : Attraction = new Attraction(0, "", "", "", 0, "", "", true, true, true, 1);
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private route: ActivatedRoute, private _attractionsServices : AttractionsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this._attractionsServices.getAttractionById(this.id).subscribe( res => this.attr = res, err => this.errMsg = err);

  
  }

  onSubmit(){
    this.attr.Parc_id = 1; 
    this._attractionsServices.updateAttraction(this.token, this.attr).subscribe(res => location.replace('../accueilAdmin/gestionAttractions'), err => this.errMsg = err)
  }



}
