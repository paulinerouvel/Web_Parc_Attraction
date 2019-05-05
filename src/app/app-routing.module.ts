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
import { StatistiquesComponent } from './module/statistiques/statistiques.component';
import { GestionAttractionComponent } from './module/gestion-attraction/gestion-attraction.component';
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

//all the routes possible in the application
const routes : Routes = [
    { path: '', redirectTo: '/inscription', pathMatch: 'full'},
    { path : 'attractions', component : AttractionsComponent},
    { path : 'connexion', component : ConnexionComponent},
    { path : 'inscription' , component : InscriptionComponent},
    { path : 'contact' , component : ContactComponent},
    { path : 'billet' , component : BilletComponent},



    
    { path : 'accueilVisiteur' , component : AccueilVisiteurComponent},
    { path : 'accueilVisiteur/achatBillet', component : AchatBilletComponent},
    { path : 'accueilVisiteur/achatBillet/achatBilletInfo/:id', component : AchatBilletInfoComponent},
    { path : 'accueilVisiteur/accesParc', component : AccesParcComponent},
    { path : 'accueilVisiteur/accesAttraction', component : AccesAttractionComponent},
    { path : 'accueilVisiteur/accesAttraction/selectAttr/:id', component : SelectAttractionComponent},
    { path : 'accueilVisiteur/modifyProfil', component : ModifyProfilComponent},
    { path : 'accueilVisiteur/mesBillets', component : MesBilletsComponent},

    { path : 'accueilAdmin' , component : AccueilAdminComponent},
    { path : 'accueilAdmin/statistiques' , component : StatistiquesComponent},
    { path : 'accueilAdmin/gestionParc' , component : GestionParcComponent},
    { path : 'accueilAdmin/gestionUtilisateur' , component : GestionUtilisateurComponent},
    { path : 'accueilAdmin/gestionUtilisateur/addUtilisateur' , component : AddUtilisateurComponent},
    { path : 'accueilAdmin/gestionUtilisateur/modifyUtilisateur/:id' , component : ModifyUtilisateurComponent},
    { path : 'accueilAdmin/gestionAttractions', component : GestionAttractionComponent},
    { path : 'accueilAdmin/gestionAttractions/modifyAttraction/:id', component : ModifyAttractionComponent},
    { path : 'accueilAdmin/gestionAttractions/entretienAttraction/:id', component : EntretienAttractionComponent},
    { path : 'accueilAdmin/gestionAttractions/entretienAttraction/:id/addRenovation', component : AddRenovationComponent},
    { path : 'accueilAdmin/gestionAttractions/addAttraction', component : AddAttractionComponent},
    { path : 'accueilAdmin/gestionBillets', component : GestionBilletComponent},
    { path : 'accueilAdmin/gestionBillets/addBillet', component : AddBilletComponent},
    { path : 'accueilAdmin/gestionBillets/addAttrBillet/:id', component : AddAttrBilletComponent},
    { path : 'accueilAdmin/gestionBillets/addAttrBillet/:id/addOrdreBillet/:id', component : AddOrdreBilletComponent, data : {attractions : ''}},
    { path : 'accueilAdmin/gestionBillets/modifyBillet/:id', component : ModifyBilletComponent},
    
    
    
    
    
    { path : '**' , component : PageNotFoundComponent} //ATTENTION : Doit toujours etre la derniere route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }
export const routingComponents = [AttractionsComponent, ConnexionComponent, InscriptionComponent, ContactComponent, BilletComponent, AccueilAdminComponent, AccueilVisiteurComponent, StatistiquesComponent, GestionAttractionComponent, ModifyAttractionComponent, AddAttractionComponent, AddRenovationComponent,EntretienAttractionComponent, GestionBilletComponent, ModifyBilletComponent 
   , AddBilletComponent, SelectAttractionComponent, AddAttrBilletComponent,MesBilletsComponent ,AchatBilletInfoComponent ,ModifyProfilComponent,AchatBilletComponent, GestionParcComponent, GestionUtilisateurComponent, ModifyUtilisateurComponent, AddUtilisateurComponent, AccesParcComponent, AccesAttractionComponent, AddOrdreBilletComponent ,PageNotFoundComponent]