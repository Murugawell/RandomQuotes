import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomquoteService {
public url='https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20&callback=';
  constructor(private http:HttpClient) { }

  public getRandomQuotes(){
    return this.http.get(this.url);
  }
}
