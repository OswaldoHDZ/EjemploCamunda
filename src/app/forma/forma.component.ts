import { Component, OnInit } from '@angular/core';
import {DataApiService} from 'src/app/services/data-api.service'
@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css'],
  providers: [DataApiService]
})


export class FormaComponent implements OnInit {

  public exito: string;
  public amount : number;
  public item : string;
  public variables = {
    "variables": {
      "amount": {
        "value":123456789,
        "type":"long"
      },
      "item": {
        "value": "Prueba"
      }
    }
  }

  constructor(private data:DataApiService) {
    this.exito =  "Se mando correctamente"; 
    console.log("Componente cargado")
    console.log(this.exito)
  }
  ngOnInit(): void {
  }

  mandaInformacion (){
    console.log(this.amount)
    console.log(this.item)
    console.log("123456")
    this.variables.variables.amount.value = this.amount;
    this.variables.variables.item.value = this.item; 
    this.data.getAllbooks(this.variables).subscribe(
      data =>{
        console.log(data)
      },
      err =>{
        console.log(err.error.message);
        
            }
    );
    
  }
}