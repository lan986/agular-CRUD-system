import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { List, UserFull, UserPreview } from '../models/user.model';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!:List<UserPreview>;
  usersid!:UserFull;
  counter=0;

  

  constructor(private usersservice:UsersService,  private router:Router) { } // inject userservice inside userlist

  ngOnInit(): void {
   
    //this.createUsers()
   // this.deleteUsers()
 
  // this.updateUsers()
   
   this.getUsers()
  // let id="60d0fe4f5311236168a109cf"
   //this.getUserbyid(id)
  }
    getUsers(){
      this.usersservice.getUsers().subscribe(response=> {this.users=response;console.log("getting users :",this.users)} );
      
      
    }

    getUserbyid(id:string){
      this.usersservice.getUsersById(id).subscribe(response=> {this.usersid=response;console.log("getting user id ",response)});
    }
 

    createUsers(){
      this.router.navigate(["userForm"],{queryParams:{name:'add'}})
      //console.log("created new one ")
      //this.usersservice.createUsers({
       // firstName:`qwissaw${this.counter} `,lastName:`qqswssq${this.counter} `,email:`qshw${this.counter}@gsaamail.com `}).subscribe(response=> console.log(response));
        //this.counter++;
        //this.getUsers()
    }
  /* updateUsers(id:string,user:UserPreview){
   
     /* this.usersservice.updateUsers(id,{
        title: "yssyee", firstName: "female", lastName: "SSS", picture: "ssssssss",
        id: ''
      }).subscribe(response=> {console.log(response);this.getUsers()})
   */
    
    deleteUsers(id:string){
      this.usersservice.deleteUsers(id).subscribe(response=> {console.log(response);
        this.getUsers()})
    }
    

 
  }


