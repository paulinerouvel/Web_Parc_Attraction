import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AttractionsComponent } from './module/attractions/attractions.component';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './module/connexion/connexion.component';
import { InscriptionComponent } from './module/inscription/inscription.component';
import { ContactComponent } from './module/contact/contact.component';
import { BilletComponent } from './module/billet/billet.component';
import { PageNotFoundComponent } from './module/page-not-found/page-not-found.component';
import { AccueilAdminComponent } from './module/accueil-admin/accueil-admin.component';
import { AccueilVisiteurComponent } from './module/accueil-visiteur/accueil-visiteur.component';

//all the routes possible in the application
const routes : Routes = [
    { path: '', redirectTo: '/inscription', pathMatch: 'full'},
    { path : 'attractions', component : AttractionsComponent},
    { path : 'connexion', component : ConnexionComponent},
    { path : 'inscription' , component : InscriptionComponent},
    { path : 'contact' , component : ContactComponent},
    { path : 'billet' , component : BilletComponent},
    { path : 'accueilAdmin' , component : AccueilAdminComponent},
    { path : 'accueilVisiteur' , component : AccueilVisiteurComponent},
    { path : '**' , component : PageNotFoundComponent} //ATTENTION : Doit toujours etre la derniere route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }
export const routingComponents = [AttractionsComponent, ConnexionComponent, InscriptionComponent, ContactComponent, BilletComponent, AccueilAdminComponent, AccueilVisiteurComponent ,PageNotFoundComponent]