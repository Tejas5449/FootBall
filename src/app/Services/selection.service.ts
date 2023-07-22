import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  url="http://cms.bettorlogic.com/api/BetBuilder/GetSelections?sports=1";
  constructor(private http:HttpClient) {

   }
   get(){
    return this.http.get(this.url);
   }
}
