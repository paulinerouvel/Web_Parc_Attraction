import { Component, OnInit } from '@angular/core';
import { AttractionsService } from 'src/app/service/attractions.service';
import { RenovationService } from 'src/app/service/renovation.service';
import { Renovation } from 'src/app/model/renovation';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { StatistiquesService } from 'src/app/service/statistiques.service';

@Component({
  selector: 'app-entretien-attraction',
  templateUrl: './entretien-attraction.component.html',
  styleUrls: ['./entretien-attraction.component.sass']
})
export class EntretienAttractionComponent implements OnInit {

  public token : string = localStorage.getItem('token');
  public errMsg : string;
  public renovs : Renovation[] = [];
  public techniciens : Utilisateur[] = [];
  public id : number;
  public freq;
  public bestMonth;
  public visit;

  constructor(private _statService :StatistiquesService, private route: ActivatedRoute, private _renovationService : RenovationService, private _utilisateurService : UtilisateurService) { 

  }

  async ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.renovs = await this._renovationService.getRenovationsById(this.token, this.id.toString()).toPromise();

    this.freq = await this._statService.getAttrFreqByMonthAndYear(this.token, this.id.toString()).toPromise();

    if(this.freq.length != 0){
      this.visit = this.freq[0].nb;
      this.freq.forEach(element => {
        if(element.nb < this.visit){
          this.visit = element.nb;
          this.bestMonth = element.date;
        }
      });
    }
      
    let arrM = [1,2,3,4,5,6,7,8,9,10,11,12];

    if (this.freq.length < 12){
      this.freq.forEach(element => {

        let d = new Date(element.date)
        let i : number = 0;
        arrM.forEach(el => {
          if(el == d.getMonth()+1){
            arrM.splice(i, 1);
          }
          i++;
        });
        
      });


    

      let random = Math.floor(Math.random() * (arrM.length -1)) + 0 

      this.bestMonth = new Date(arrM[random] + "/01"+ "/2019");
  
    }
  


    if(this.renovs){
      this.renovs.forEach(element => {
        this._utilisateurService.getUtilisateurById(this.token, element.Utilisateur_id.toString()).subscribe(
          res=>this.techniciens.push(res)
        );
      });
        
    }

    
    
  }



}
