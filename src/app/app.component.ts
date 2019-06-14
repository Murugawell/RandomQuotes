import { Component } from '@angular/core';
import { RandomquoteService } from './services/randomquote.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SamplePWA';
  quote;

  constructor(private randomquoteService: RandomquoteService, updates: SwUpdate) {
    // updates.available.subscribe((event => {
    //   updates.activateUpdate().then(() => {
    //     window.location.reload();
    //   })
    // }))
    this.getRandomQuote();
  }

  getRandomQuote() {
    this.randomquoteService.getRandomQuotes().subscribe((res: any) => {
      console.log(res);
      let min = 0;
      let max = 20;
      console.log(res[Math.random() * (max - min) + min]);
      this.quote = res[Math.floor(Math.random() * (max - min) + min)];
    });
  }
}
