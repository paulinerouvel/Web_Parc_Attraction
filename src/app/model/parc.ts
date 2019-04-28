export class Parc {

    constructor(
      public id: number,
      public nom: string,
      public description: string,
      public adresse: string,
      public cp: string,
      public ville: string,
      public tel: string,
      public mail: string,
      public benefice: number,
      public est_ouvert: boolean,
    ){}
      
    }