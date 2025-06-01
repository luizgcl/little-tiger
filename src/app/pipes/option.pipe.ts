import { Pipe, PipeTransform } from '@angular/core';
import { Option, optionsMap } from '../entity/Option';

@Pipe({
  name: 'option'
})
export class OptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): Option {
    return optionsMap[value];
  }

}
