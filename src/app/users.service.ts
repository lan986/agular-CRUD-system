import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

import { catchError, Observable, throwError } from 'rxjs';
import { createUserModel, List, UserFull, UserPreview } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL='https://dummyapi.io/data/v1';
  options={
    headers:new HttpHeaders().set('app-id','62b9eedf86e73de287d0ce59')
  
  }

  constructor(private http :HttpClient) { }

createUsers(payload:createUserModel): Observable<UserFull>{
  //console.log(payload)
return this.http.post<UserFull>(`${this.baseURL}/user/create`,payload,{...this.options})
catchError(this.errorHandler)
}

updateUsers(id:string,payload:UserPreview): Observable<UserPreview>{
  return this.http.put<UserPreview>(`${this.baseURL}/user/${id}`,payload,{...this.options})
  catchError(this.errorHandler)
  }

  deleteUsers(id:string): Observable<any>{
    return this.http.delete<any>(`${this.baseURL}/user/${id}`,this.options)
    }
  

getUsers():Observable<List<UserPreview>>{
return this.http.get<List<UserPreview>>(`${this.baseURL}/user`,{...this.options ,params:{created:1}});
}

getUsersById(id:string):Observable<UserFull>{
  //let id_param= new HttpParams().set("id",id)
     
  return this.http.get<UserFull>(`${this.baseURL}/user/${id}`,{...this.options}) 
  /*.pipe(catchError(this.errorHandler))}
  
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");*/
}

errorHandler(error:HttpErrorResponse):Observable<never>{
  console.log(error)
  return throwError("ERROR HAPPENED ")
}
}
