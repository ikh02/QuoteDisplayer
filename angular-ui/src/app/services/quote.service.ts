import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Quote {
  id: number;
  text: string;
}

export interface QuoteAnalysis {
  word_count: number;
  character_count: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private http = inject(HttpClient);

  private pythonApiUrl = 'http://localhost:8000/api/quote/random';
  private crystalApiUrl = 'http://localhost:3000/api/analyze';

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.pythonApiUrl);
  }

  analyzeQuote(text: string): Observable<QuoteAnalysis> {
    return this.http.post<QuoteAnalysis>(this.crystalApiUrl, { text: text });
  }
}