import { EmailValidator } from '@angular/forms';

export class Utilisateur {

    constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public date_de_naissance: string,
    public tel: string,
    public mail: string,
    public adresse: string,
    public cp: string,
    public ville: string,
    public type: string,
    public mot_de_passe: string
    ) {}
}
