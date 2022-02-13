import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
 resturants$:any;
 postcode:string="ec4m";
 constructor(private data: DataService) { }

  ngOnInit(): void {
   this.getRestaturants();
  }
  
  getRestaturants()
  {
    this.data.getRestaturants(this.postcode).subscribe(
      data=>{this.resturants$=data
      console.log(data)})
  }

  toArray(answers: any) {
    return Object.keys(answers).map(key => answers[key])
  }

}
