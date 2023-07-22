import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MarketsService {
  url="http://cms.bettorlogic.com/api/BetBuilder/GetMarkets?sports=1";
  constructor(private http:HttpClient) {

   }
   get(){
    return this.http.get(this.url);
   }
}
