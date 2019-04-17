import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents} from './app-routing.module';

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
import { AccueilVisiteurComponent } from './module/accueil-visiteur/accueil-visiteur.component'


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
    AccueilVisiteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AttractionsService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
