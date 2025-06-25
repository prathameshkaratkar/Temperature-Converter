import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Temperature } from './temperature/temperature';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,Temperature],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'temperature-converter';
  

}