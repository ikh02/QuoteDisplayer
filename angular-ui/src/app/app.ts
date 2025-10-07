import { Component } from '@angular/core';
import { QuoteDisplayComponent } from './components/quote-display/quote-display';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    QuoteDisplayComponent 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'kjtech';
}