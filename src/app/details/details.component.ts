import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { List, UserFull } from '../models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id=0
  userDetails!:UserFull;

  constructor(private route:ActivatedRoute,private service:UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  getUserDetails(id:string){
    this.service.getUsersById(id).subscribe(response=>{this.userDetails=response,console.log("users detailes ",response)} );  
  }
 

  gotosecond():void{
    //this.router.navigate(["first",id])
    //this.router.navigate(['second/test'])// with route parameters
    this.router.navigate(['posts'])//with queryparams as objects
    }
 
}
