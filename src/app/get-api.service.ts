import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private _HttpClient:HttpClient) { }
  getApi(p:string) :Observable<any>
  {
return this._HttpClient.get(p)  }
}
