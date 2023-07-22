import { Component } from '@angular/core';
import { MarketsService } from '../Services/markets.service';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  marketData:any;
  constructor(private market:MarketsService){
    market.get().subscribe((res)=>{
        this.marketData=res;
    })
  }

}
