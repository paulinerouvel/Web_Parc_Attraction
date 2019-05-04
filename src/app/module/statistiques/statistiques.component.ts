import { Component, OnInit } from '@angular/core';
import { StatistiquesService } from 'src/app/service/statistiques.service';
import { AttractionsService } from 'src/app/service/attractions.service';
import { Attraction } from 'src/app/model/attraction';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {

  public attrs : Attraction[];
  public parc_frequentation : string;
  public parc_frequentationTR : string;
  public attr_frequentation : string[] = [];

  public fromParcTxt : string;
  public toParcTxt : string;
  public parc_frequentationDate : string;

  public fromAttrTxt : string;
  public toAttrTxt : string;
  public attrTxt : string;
  public attr_frequentationDate : string;

  




  constructor(private _stat: StatistiquesService, private _attr: AttractionsService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public donnees = [];
  public barChartData = [
    
  ];

  async ngOnInit() {


    const token : string = localStorage.getItem('token');
    const id : string = "1";

    this._stat.getParcFreq(token, id).subscribe(
      res=> {
        this.parc_frequentation = res["nb"];   
      },
      err=>console.log(err)
    );

    let ParcfreqYearAndMonth = await this._stat.getAParcFreqByYearAndMonth(token, "1").toPromise();

    let datas = [];
    for(let p = 0; p < ParcfreqYearAndMonth.length; p++ ){
      let dateFreq = new Date(ParcfreqYearAndMonth[p].date);
      let mois;
     
      dateFreq.getMonth() < 10 ? mois = "0" + dateFreq.getMonth() : mois = dateFreq.getMonth();
      
      this.barChartLabels.push(dateFreq.getFullYear() + "/" + mois);
      datas.push(ParcfreqYearAndMonth[p].nb);


    }
    this.donnees = datas;
    this.barChartData =[ {data: this.donnees, label: "Nombre d'entrée"}];

    setInterval(() => {
      this._stat.getParcFreqTR(token, id).subscribe(
        res=> {
          this.parc_frequentationTR = res["nbTR"];   
        },
        err=>console.log(err)
      );
    }, 1000);

    



    this.attrs = await this._attr.getAttractions().toPromise();


    this.attrs.forEach(a=>{

      this._stat.getAttrFreq(token, a.id.toString()).subscribe(
        res=> {
          this.attr_frequentation.push(res[0]["nb"]);
        },
        err=>console.log(err)
      );

    });


    

  }


  onSubmitParc(){

    const token : string = localStorage.getItem('token');
    const id : string = "1";
    this._stat.getParcFreqByDate(token, id, this.fromParcTxt, this.toParcTxt).subscribe(
      res => {
        this.parc_frequentationDate = res["nb"];
      },
      err => console.log(err));
    
  }

  onSubmitAttr(){

    const token : string = localStorage.getItem('token');


    this._stat.getAttrFreqByDate(token, this.attrTxt, this.fromAttrTxt, this.toAttrTxt).subscribe(
      res => {
        this.attr_frequentationDate = res[0]["nb"];
      },
      err => console.log(err));
    
  }

  
  
}
