import { Component } from '@angular/core';
import { FixaturesService } from '../Services/fixatures.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent {
  dataSource:any;
  filteredData:any[]=[];
  dateId:any;
  dateFormat:any;
  id:any;
  country:any;
  constructor(private fixature:FixaturesService,private route:ActivatedRoute, private router:Router){
    this.dateId=this.route.snapshot.paramMap.get('id');
    fixature.get().subscribe((res)=>{
      this.dataSource=res;
      //this.filteredData = [...this.dataSource]; // Initialize filteredData with all data
      this.date();
      
    });
  }
  
   date(){
    for(let data in this.dataSource){
      this.dateFormat=this.dataSource[data];
      this.id=this.dateFormat['KickOffUtc'].toString().substr(2, 2);
      if(this.dateId==this.id){
        this.filteredData.push({'Country': this.dateFormat['Country'],'LeagueName': this.dateFormat['LeagueName'],'MatchName': this.dateFormat['MatchName'],'KickOffUtc': this.dateFormat['KickOffUtc']});
        console.warn(this.filteredData)
      }
    }
    
   }
   
   clicked(res:any){
    this.router.navigate(['/matchInfo', res]);

   }
  
 
}
