import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'table-row'})
export class AppTableRowPipe implements PipeTransform {
  transform(value: number): string {
    return 'bg-success';
  }
}
