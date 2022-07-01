import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {

    const resultCharacter: Character[] = [];

    for(const heroe of value){
      if(heroe.name.toUpperCase().startsWith(args.toUpperCase()) || args == ""){
        resultCharacter.push(heroe);
      };
    };
    return resultCharacter;
  }
}
