import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  imports: [FormsModule],
  templateUrl: './temperature.html',
  styleUrl: './temperature.css'
})
export class Temperature {
  celcius:number | null = null;
  fahrenheit: number | null = null;

  convertToFahrenheit() {
    if(this.celcius !== null) {
      this.fahrenheit = (this.celcius * 9/5) + 32;
    }
  }

  convertToCelcius() {
    if(this.fahrenheit !== null) {
      this.celcius = (this.fahrenheit - 32) * 5/9;
    }
  }
  
  reset() {
    this.celcius = null;
    this.fahrenheit = null;
  }
}
