import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stories'
})
export class StoriesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
