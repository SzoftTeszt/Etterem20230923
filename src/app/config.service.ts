import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private etelOszlop=[
    {key:"id", text:"#", type:"plain"},
    {key:"nev", text:"Név", type:"text"},
    {key:"kcal", text:"Kalória", type:"number"}
  ]

  constructor() { }

  getEtelOszlopok(){
    return this.etelOszlop
  }
}
