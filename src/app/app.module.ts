import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {  LOCALE_ID } from '@angular/core';



import { AppComponent } from './app.component';
import { AttractionsService } from './service/attractions.service';
import { BandeauComponent } from './module/bandeau/bandeau.component';
import { ConnexionComponent } from './module/connexion/connexion.component';
import { InscriptionComponent } from './module/inscription/inscription.component';
import { ContactComponent } from './module/contact/contact.component';
import { FooterComponent } from './module/footer/footer.component';
import { BilletComponent } from './module/billet/billet.component';
import { PageNotFoundComponent } from './module/page-not-found/page-not-found.component';
import { GestionAttractionComponent } from './module/gestion-attraction/gestion-attraction.component';
import { AccueilAdminComponent } from './module/accueil-admin/accueil-admin.component';
import { AccueilVisiteurComponent } from './module/accueil-visiteur/accueil-visiteur.component';
import { StatistiquesComponent } from './module/statistiques/statistiques.component';
import { ModifyAttractionComponent } from './module/modify-attraction/modify-attraction.component';
import { AddAttractionComponent } from './module/add-attraction/add-attraction.component';
import { EntretienAttractionComponent } from './module/entretien-attraction/entretien-attraction.component';
import { AddRenovationComponent } from './module/add-renovation/add-renovation.component';
import { GestionBilletComponent } from './module/gestion-billet/gestion-billet.component';
import { ModifyBilletComponent } from './module/modify-billet/modify-billet.component';
import { AddBilletComponent } from './module/add-billet/add-billet.component';
import { AddAttrBilletComponent } from './module/add-attr-billet/add-attr-billet.component';
import { AchatBilletComponent } from './module/achat-billet/achat-billet.component';
import { GestionParcComponent } from './module/gestion-parc/gestion-parc.component';
import { GestionUtilisateurComponent } from './module/gestion-utilisateur/gestion-utilisateur.component';
import { ModifyUtilisateurComponent } from './module/modify-utilisateur/modify-utilisateur.component';
import { AddUtilisateurComponent } from './module/add-utilisateur/add-utilisateur.component';
import { AccesParcComponent } from './module/acces-parc/acces-parc.component';
import { AccesAttractionComponent } from './module/acces-attraction/acces-attraction.component';
import { AddOrdreBilletComponent } from './module/add-ordre-billet/add-ordre-billet.component';
import { ModifyProfilComponent } from './module/modify-profil/modify-profil.component';
import { AchatBilletInfoComponent } from './module/achat-billet-info/achat-billet-info.component';
import { MesBilletsComponent } from './module/mes-billets/mes-billets.component';
import { SelectAttractionComponent } from './module/select-attraction/select-attraction.component';
import { ChartsModule } from 'ng2-charts';


registerLocaleData(localeFr);
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    BandeauComponent,
    routingComponents,
    ConnexionComponent,
    InscriptionComponent,
    ContactComponent,
    FooterComponent,
    BilletComponent,
    PageNotFoundComponent,
    GestionAttractionComponent,
    AccueilAdminComponent,
    AccueilVisiteurComponent,
    StatistiquesComponent,
    ModifyAttractionComponent,
    AddAttractionComponent,
    EntretienAttractionComponent,
    AddRenovationComponent,
    GestionBilletComponent,
    ModifyBilletComponent,
    AddBilletComponent,
    AddAttrBilletComponent,
    AchatBilletComponent,
    GestionParcComponent,
    GestionUtilisateurComponent,
    ModifyUtilisateurComponent,
    AddUtilisateurComponent,
    AccesParcComponent,
    AccesAttractionComponent,
    AddOrdreBilletComponent,
    ModifyProfilComponent,
    AchatBilletInfoComponent,
    MesBilletsComponent,
    SelectAttractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [AttractionsService, {provide: LOCALE_ID, useValue: "fr-CA" } ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
