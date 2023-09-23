import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-etelek',
  templateUrl: './etelek.component.html',
  styleUrls: ['./etelek.component.css']
})
export class EtelekComponent {
  etelek:any;
  oszlopok:any;

  getData(){
    this.base.getAll("etelek").subscribe(
      adatok=>{
        this.etelek=adatok; 
        console.log(this.etelek)
      }
    )
  }

  constructor(
    private base:BaseService, 
    private config:ConfigService
    ){
    this.getData()
    this.oszlopok=this.config.getEtelOszlopok()
    console.log(this.oszlopok)
  }

  onDelete(etel:any){
    let id=etel.id;
    this.base.onDelete("etelek",id).subscribe(
      ()=>this.getData()
    
    )
  }
}
