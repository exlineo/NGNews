import { AuteursModel } from "./auteurs.modele";

export interface NouvellesModel {
    id:number;
    titre:string;
    description:string;
    img?:string;
    auteur?:AuteursModel;
}