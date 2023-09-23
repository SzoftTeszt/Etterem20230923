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
  ujEtel:any={};

  showError=false;
  errorMessage="";

  getData(){
    this.base.getAll("etelek").subscribe(
      {
        next:(adatok:any)=>
          {
            this.etelek=adatok
            this.showError=false
            this.errorMessage=""
          },
        error:()=>{
          this.showError=true
          this.errorMessage="Az adatok nem állnak rendelkezésre!"
          console.log("")
        }
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

  onUpdate(etel:any){
    this.base.onUpdate("etelek",etel).subscribe(
      ()=>this.getData()
    )
  }

  onCreate(){
    this.base.onCreate("etelek",this.ujEtel).subscribe(
      (a)=>
      { console.log("Új étel:",a);
        this.ujEtel={}
        this.getData()
      }
    )

  }
}
