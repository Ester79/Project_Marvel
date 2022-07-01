import { formatCurrency } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Pipe({
  name: 'series'
})
export class SeriesPipe implements PipeTransform {

  transform(value: any, args: any): any {

    const resultSerie: Character[] = [];

    for(const serie of value){
      if(serie.name.toUpperCase().startsWith(args.toUpperCase()) || args == ""){
        resultSerie.push(serie);
      }
    }


    return resultSerie;
  }

}
