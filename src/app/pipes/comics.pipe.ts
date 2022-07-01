import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Pipe({
  name: 'comics'
})
export class ComicsPipe implements PipeTransform {

  transform(value: any, args: any): any {

    const resultComic: Character[] = [];

    for(const comic of value){
      if(comic.name.toUpperCase().startsWith(args.toUpperCase()) || args == ""){
        resultComic.push(comic);
      };
    };
    return resultComic;
  }

}
