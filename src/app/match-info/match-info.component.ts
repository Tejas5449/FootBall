import { Component } from '@angular/core';
import { SelectionService } from '../Services/selection.service';
import { ActivatedRoute } from '@angular/router';
import { FixaturesService } from '../Services/fixatures.service';
import { NgIf } from '@angular/common';
import { MarketComponent } from '../market/market.component';
import { MarketsService } from '../Services/markets.service';
@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.scss']
})
export class MatchInfoComponent {

  options: string[] = [];
  betSlipOptions:string[]=[];
  selectedBetslip:string="";
  selectedOption: string="";
  SelectionData:any;
  MatchId:any;
  MatchInfo:any;
  requiredMatchName:any;
  requiredMatchTime:any;
  match:any;
  marketData:any;
  constructor(private selection:SelectionService,private route:ActivatedRoute,private fixature:FixaturesService,private market:MarketsService){
    this.MatchId=this.route.snapshot.paramMap.get('id');
    
    market.get().subscribe((res)=>{
      this.marketData=res;
      for(let select of this.marketData){
        this.betSlipOptions.push(select['MarketName']);
      }
    });
    fixature.get().subscribe((matchData)=>{
      this.MatchInfo=matchData;
      this.requiredData(this.MatchInfo);
    })
    selection.get().subscribe((res)=>{
      this.SelectionData=res;
      for(let select of this.SelectionData){
        this.options.push(select['selectionId']);
      }
    });
  }
  requiredData(data:any){
    for(let d in data){
     this.match=data[d];
      if(this.match['MatchId']==this.MatchId){
        this.requiredMatchName=this.match['MatchName'];
        this.requiredMatchTime=this.match['MatchTime'];
      }
    }
  }
}
