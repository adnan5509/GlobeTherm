import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number | null, inputTemp: 'cel' | 'far', outputTemp?: 'cel' | 'far') {

    if (!value) {
      return value
    }

    if (typeof value === 'string') {
      value = parseFloat(value);
    }
    let output: number;
    let symbol: '°C' | '°F';

    if (inputTemp === 'cel' && outputTemp === 'far') {
      output = (value * 9) / 5 + 32;
    } else if (inputTemp === 'far' && outputTemp === 'cel') {
      output = ((value - 32) * 5) / 9;
    } else {
      output = value;
    }

    if (outputTemp) {
      symbol = outputTemp === 'cel' ? '°C' : '°F';
    } else {
      symbol = inputTemp === 'cel' ? '°C' : '°F';
    }


    return `${output.toFixed(2)} ${symbol}`
  }

}
