import { Component, OnInit } from '@angular/core';
import {DataApiService} from 'src/app/services/data-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataApiService]
})
export class AppComponent {
  title = 'my-dream-app';

  constructor(private data:DataApiService){}
    
  ngOnInit():void{
    this.data.getAllbooks(null).subscribe(
      data =>{
        console.log(data)
      },
      err =>{
        console.log(err.error.message);
        
            }
    );
  }
}


