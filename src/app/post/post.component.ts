import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
  
import { Observable, throwError } from 'rxjs';
import { List, UserFull, UserPreview } from '../models/user.model';
import { PostsService } from '../posts.service';
import { PostPreview } from '../models/posts.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  
 // userDetails!:List<UserFull>;
  counter=0;
 
  posts!:List<PostPreview>;
  
    constructor(private postsservice:PostsService,private route:ActivatedRoute) { } // 
    ngOnInit(): void {
     
      //this.createUsers()
     // this.deleteUsers()
   
    // this.updateUsers()
     
     this.getPosts()
    // let id="60d0fe4f5311236168a109cf"
     //this.getUserbyid(id)
    }
      getPosts(){
        this.postsservice.getPosts().subscribe(response=> {this.posts=response;console.log(this.posts)} );
        
        
      }
  
  
      createPosts(){
        console.log("created new one ")
        this.postsservice.createPost({
          text:`qwidssaw${this.counter} `,image:`qqdswssq${this.counter} `,likes:5,
          owner: "ddddddddd",tags:[]
         }).subscribe(response=> console.log(response));
          this.counter++;
          this.getPosts()
      }
     updatePosts(id:string,post:PostPreview){
     
        this.postsservice.updatePost(id,{
          text: `qwidssaw${this.counter} `, image: `qqdswssq${this.counter} `, likes: 5,
          owner: {}, tags: [],
          id: '',
          publishDate: ''
        }).subscribe(response=> {console.log(response);this.getPosts()})
     
      }
      deletePosts(id:string){
        this.postsservice.deletePost(id).subscribe(response=> {console.log(response);this.getPosts()})
      }
      
  
   
    }
  
  
