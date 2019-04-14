export interface IAttraction {
    id: number,
    nom: string,
    description: string,
    type: string,
    capacite: number,
    duree: string,
    horaire_ouverture: string,
    acces_handicape: boolean,
    acces_avec_adulte: boolean,
    en_maintenance: boolean,
    Parc_id: number,
}
