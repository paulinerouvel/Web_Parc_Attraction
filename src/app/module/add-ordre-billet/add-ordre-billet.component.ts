import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { AttractionsService } from 'src/app/service/attractions.service';
import { Attraction } from 'src/app/model/attraction';
import { ignoreElements } from 'rxjs/operators';
import { BilletService } from 'src/app/service/billet.service';

@Component({
  selector: 'app-add-ordre-billet',
  templateUrl: './add-ordre-billet.component.html',
  styleUrls: ['./add-ordre-billet.component.sass']
})
export class AddOrdreBilletComponent implements OnInit {
  public id = this.route.snapshot.params.id;
  public message;
  public attrs : Attraction[];
  public attrsToDisplay : Attraction[] = [];
  public ordre;
  public ordreVal = [];
  public token : string = localStorage.getItem('token');

  constructor(private route : ActivatedRoute, private _attractionService : AttractionsService, private _billetService : BilletService) { }

  async ngOnInit() {


    let attrsSelected = this.route.snapshot.queryParams.attrSelected;
    if (attrsSelected.length == 0){
      this.message = "Aucun élément séléctionné ! "
    }
    this.attrs = await this._attractionService.getAttractions().toPromise();


    for(let i = 0; i< this.attrs.length; i++){
      if(attrsSelected[i] != undefined){

        this.attrsToDisplay.push(this.attrs[i])

      }
    }

    this.ordre = new Array(this.attrsToDisplay.length)


    for (let nb = 0; nb < this.ordre.length; nb++){
      this.ordre[nb] = nb+1;
    }
  }



  async onSubmit(){

    
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    const uniqueValues = this.ordreVal.filter(unique);

    if(this.ordreVal.length != this.ordre.length || uniqueValues.length != this.ordre.length){
      alert("Saisie Incorrecte");
    }
    else{


      let attrToDelete = await this._attractionService.getAttractionByBillet(this.id).toPromise();

      attrToDelete.forEach(element => {
        this._billetService.deleteAttractionToPass(this.token, element.id.toString(), this.id).toPromise();
      });


      let cpt = 0;

      for (let cpt=0; cpt < this.attrsToDisplay.length; cpt++){
        let o : string = this.ordreVal[cpt];
        await this._billetService.addAttractionToPass(this.token, this.attrsToDisplay[cpt].id.toString(), this.id.toString(), o).toPromise();
      }

 
      location.replace('../accueilAdmin/gestionBillets');
    }

  }

  async ignore(){


    let attrToDelete = await this._attractionService.getAttractionByBillet(this.id).toPromise();

    attrToDelete.forEach(element => {
      this._billetService.deleteAttractionToPass(this.token, element.id.toString(), this.id).toPromise();
    });
    

    this.attrsToDisplay.forEach( async a=>{
      await this._billetService.addAttractionToPass(this.token, a.id.toString(), this.id.toString(), "-1").toPromise();
    });

    location.replace('../accueilAdmin/gestionBillets');
  }
}


