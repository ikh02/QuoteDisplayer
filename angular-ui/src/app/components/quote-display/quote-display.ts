import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Quote, QuoteAnalysis, QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-quote-display',
  standalone: true,
  imports: [
    CommonModule 
  ],
  templateUrl: './quote-display.html',
  styleUrls: ['./quote-display.css']
})
export class QuoteDisplayComponent {
  private quoteService = inject(QuoteService);

  quote: Quote | null = null;
  analysis: QuoteAnalysis | null = null;
  isLoading = false;

  onNewQuoteClick(): void {
    this.isLoading = true;
    this.quote = null;
    this.analysis = null;

    this.quoteService.getRandomQuote().subscribe(quoteData => {
      this.quote = quoteData;

      this.quoteService.analyzeQuote(this.quote.text).subscribe(analysisData => {
        this.analysis = analysisData;
        this.isLoading = false;
      });
    });
  }
}