import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';

import { catchError, Observable, throwError } from 'rxjs';
import { List, Post, PostCreate, PostPreview } from './models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseURL='https://dummyapi.io/data/v1';
  options={
    headers:new HttpHeaders().set('app-id','62b9eedf86e73de287d0ce59')
  
  }
  constructor(private http :HttpClient) { }

  

createPost(payload:PostCreate): Observable<Post>{
  console.log(payload)
return this.http.post<Post>(`${this.baseURL}/post/create`,payload,{...this.options})
catchError(this.errorHandler)
}

updatePost(id:string,payload:PostPreview): Observable<PostPreview>{
  return this.http.put<PostPreview>(`${this.baseURL}/post/${id}`,payload,{...this.options})
  catchError(this.errorHandler)
  }

  deletePost(id:string): Observable<any>{
    return this.http.delete<any>(`${this.baseURL}/post/${id}`,this.options)
    }
  

getPosts():Observable<List<PostPreview>>{
return this.http.get<List<PostPreview>>(`${this.baseURL}/post`,{...this.options});
}


errorHandler(error:HttpErrorResponse):Observable<never>{
  console.log(error)
  return throwError("ERROR HAPPENED ")
}
}
