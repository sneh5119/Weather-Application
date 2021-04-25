import { AbstractType, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlApiService } from '../url-api.service';

@Component({
  selector: 'app-weatherui',
  templateUrl: './weatherui.component.html',
  styleUrls: ['./weatherui.component.css']
})
export class WeatheruiComponent implements OnInit {

  params : any;
  data : any;
  display:boolean=true;

  constructor(private urlapi : UrlApiService, private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    // we are fetching values from query params from url 
    this.activatedRoute.queryParams.subscribe(geturlparam=>{
      this.params=geturlparam;
      //getting data from url
    })
    console.log("Params value",this.params);

    this.getApi();
  }

  backfunc(){
    
    this.router.navigate(['/home']);

  }

  getApi() {
  
    this.urlapi.getApi(this.params.city).subscribe(response=>{
      
      if (Response) { 
        // this.hideloader(); 
        this.display=false;
    } 

      this.data=response;
      console.log("Data --c : -",this.data);
    })

  }

  //  hideloader() { 
  
    // Setting display of spinner 
    // element to none 
    // document.getElementById('loading').style.display = 'none'; 
// } 

  
}
