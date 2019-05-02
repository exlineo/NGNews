import { AuteursModel } from "./auteurs.modele";

export interface NouvellesModel {
    id?:string;
    titre:string;
    intro:string;
    description:string;
    img?:string;
    droits:number;
    ngauteur?:AuteursModel;
}