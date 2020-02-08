import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  domain : string;


  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json'
    })
  };
  
  constructor(private http: HttpClient){
    this.domain = '//localhost:8080/';
  }

  getUrl(path : string): string{
    return this.domain + path;
  }

  get(url : string, params? : HttpParams) : Observable<any>{
    if (params == undefined){
      return this.http.get(this.domain + url);  
    }
    return this.http.get(this.domain + url,{params:params});
  }



  post(responseType : Type<any>, url : string, request : any) : Observable<any>{
    return this.http.post<ResponseType>(this.domain + url,request,this.httpOptions);
  }
}
