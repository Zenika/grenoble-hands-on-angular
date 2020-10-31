import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degree'
})
export class DegreePipe implements PipeTransform {

  transform(value: number, degree: 'C' | 'F' = 'C'): unknown {
    return `${degree === 'F' ? Math.floor(value * (9 / 5) + 32) : value} ${degree}°`;
  }

}
