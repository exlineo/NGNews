import { Pipe, PipeTransform } from '@angular/core';

// Pipe de traitement des listes
@Pipe({ name: 'newsPipe' })
export class NewsPipe implements PipeTransform {
  public transform(values: any[], filtre: string): any[] {
    // console.log(values[0], filtre);
    if (!values || !values.length) return [];
    if (!filtre) return values;

    // return values.filter(v => String(v).toLowerCase().indexOf(filtre.toLowerCase()) >= 0);
    return values.filter(v => {
      // Filtre sur le titre
      if(v.titre){
        return v.titre.indexOf(filtre) >=0 ;
      }
      // Filtre sur la description
      if(v.description){
        return v.description.indexOf(filtre) >=0 ;
      }
    });
  }
}

// Pipe de traitement des listes
@Pipe({ name: 'filtreListes' })
export class FiltrerPipe implements PipeTransform {
  public transform(values: any[], filter: string): any[] {
    if (!values || !values.length) return [];
    if (!filter) return values;
    
    return values.filter(v => v.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
  }
}