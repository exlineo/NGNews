import { AuteursModel } from "./auteurs.modele";

export interface NouvellesModel {
    _id?:string;
    titre:string;
    intro:string;
    description:string;
    img?:string;
    droits:number;
    auteur?:AuteursModel;
}