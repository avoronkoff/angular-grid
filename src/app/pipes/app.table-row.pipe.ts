import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tableRow'})
export class AppTableRowPipe implements PipeTransform {
  transform(value: number): string {
    return value > 85 ? 'bg-danger' : (value > 70 && value < 84) && 'bg-success';
  }
}
