import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attraction } from 'src/app/model/attraction';
import { AttractionsService } from 'src/app/service/attractions.service';

@Component({
  selector: 'app-add-attr-billet',
  templateUrl: './add-attr-billet.component.html',
  styleUrls: ['./add-attr-billet.component.scss']
})
export class AddAttrBilletComponent implements OnInit {
  public id = this.route.snapshot.params.id;
  public attrs : Attraction[];
  public attraction;
  public ordre;
  public errMsg;
  public token : string = localStorage.getItem('token');

  constructor(private route: ActivatedRoute, private _attractionService : AttractionsService) { 

    this._attractionService.getAttractions().subscribe(res=>this.attrs = res, err=> console.log(err));
  }

  ngOnInit() {
  }

}
