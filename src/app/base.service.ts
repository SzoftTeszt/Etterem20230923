import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverUrl="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  getAll(url:any){
    return this.http.get(this.serverUrl+url);
  }

  onDelete(url:string, id:any){
    console.log("Delete: ", this.serverUrl+url+'/'+id)
    return this.http.delete(this.serverUrl+url+'/'+id)
  }

  onUpdate(url:string, etel:any){
    return this.http.put(this.serverUrl+url+'/'+etel.id, etel)
  }

  onCreate(url:string, etel:any){
    return this.http.post(this.serverUrl+url, etel)
  }
}
