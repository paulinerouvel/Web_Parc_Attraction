import { Component, OnInit } from '@angular/core';
import { Renovation } from 'src/app/model/renovation';
import { RenovationService } from 'src/app/service/renovation.service';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { StatistiquesService } from 'src/app/service/statistiques.service';

@Component({
  selector: 'app-add-renovation',
  templateUrl: './add-renovation.component.html',
  styleUrls: ['./add-renovation.component.sass']
})
export class AddRenovationComponent implements OnInit {

  public id = this.route.snapshot.params.id;
  public renov : Renovation = new Renovation(0,0,"",0,0,"");
  public errMsg;
  public token : string = localStorage.getItem('token');
  public techs : Utilisateur[];

  constructor(private route: ActivatedRoute, private _renovationService : RenovationService, private _utilisateurService : UtilisateurService) { 


  }

  async ngOnInit() {
    this.techs = await this._utilisateurService.getAllUtilisateurs(this.token).toPromise();
    this.techs = this.techs.filter(function(value){

      return value.type == "Administrateur";
  
    });

    


  }

  onSubmit(){

    this.renov.Attraction_id =  this.route.snapshot.params.id;

    this._renovationService.addRenovation(this.token, this.renov).subscribe(res=>location.replace('../accueilAdmin/gestionAttractions/entretienAttraction/' + this.renov.Attraction_id))

  }

}
