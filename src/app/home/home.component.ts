import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CITIES } from '../array-city';
import { City } from '../city';
// import { UrlApiService } from '../url-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   cities:City[]=CITIES;
   selectedCity?: City[];

   previousVal:any;
   gNameVal:any;
   currentVal:any;
  constructor( private router : Router) { }

  ngOnInit(): void {
    this.getcities();
    
  }
 
  weatherNavigate(){
    // post on url
    this.router.navigate(['/weatherui'], {queryParams: {'city': this.gNameVal}});

  }


  getcities(){
    console.log("cities ",this.cities);
  }

  onSelectType(event:City) {
    if(event) {
        this.previousVal = this.currentVal;
        this.currentVal = event;
        this.gNameVal=this.currentVal.name;
    }
    console.log("currentval =>", this.gNameVal)
  }

 
}
