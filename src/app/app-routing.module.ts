import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AttractionsComponent } from './attractions/attractions.component';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ContactComponent } from './contact/contact.component';

//all the routes possible in the application
const routes : Routes = [
    { path: '', redirectTo: '/inscription', pathMatch: 'full'},
    { path : 'attractions', component : AttractionsComponent},
    { path : 'connexion', component : ConnexionComponent},
    { path : 'inscription' , component : InscriptionComponent},
    { path : 'contact' , component : ContactComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule { }
export const routingComponents = [AttractionsComponent, ConnexionComponent, InscriptionComponent, ContactComponent]