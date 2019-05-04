export class Billet_utilisateur {

    constructor(
      public id : number,
      public Utilisateur_id: number,
      public Billet_id: number,
      public dateAchat: string,
      public dateDebut: string,
      public dateFin: string,
      public nbEntreeDispo: number,

    ){}
      
    }