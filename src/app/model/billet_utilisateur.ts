export class Billet_utilisateur {

    constructor(
      public id: number,
      public nom: string,
      public description: string,
      public type: string,
      public capacite: number,
      public duree: string,
      public horaire_ouverture: string,
      public acces_handicape: boolean,
      public acces_avec_adulte: boolean,
      public en_maintenance: boolean,
      public Parc_id: number,
    ){}
      
    }