import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  createUserModel,
  List,
  UserFull,
  UserPreview,
} from '../models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  public Update: boolean = false;
  public add: boolean = true;
  public buttonName: any = '';

  public name: any;

  model: createUserModel = { firstName: '', lastName: '', email: '' };

  userFullmodel: UserFull = {
    firstName: '',
    lastName: '',
    email: '',
    id: '',
    title: '',
    gender: '',
    dateOfBirth: '',
    registerDate: '',
    phone: '',
    picture: '',
    location: {},
  };


  userid: string = '';
  userdataid!: UserFull;

  constructor(
    private usersservice: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
    });

    this.userid = this.route.snapshot.params['id'];

    console.log(this.name);

    //console.log(this.userid)
    if (this.name == 'edit'&&this.userid) {
      this.Update = true;
      this.add=false
      this.usersservice.getUsersById(this.userid).subscribe((response) => {
        this.userdataid = response;
        console.log('getting user id ', this.userdataid);
        (this.userFullmodel.id = this.userid),
          (this.userFullmodel.firstName = this.userdataid.firstName),
          (this.userFullmodel.lastName = this.userdataid.lastName),
          (this.userFullmodel.title = this.userdataid.title),
          (this.userFullmodel.email = this.userdataid.email),
          (this.userFullmodel.phone = this.userdataid.phone);
      });
     console.log(this.userFullmodel)
    }
  }

  submit(userform: NgForm) {
 
if(this.name=="edit"){

    this.usersservice
    .updateUsers(this.userid, this.userFullmodel)
    .subscribe((res) =>{console.log('updated successfully');
    setTimeout(() => {
      this.router.navigate(['user']);
    }, 2000);
    
    this.getUsers()});
  

  }
    
     else {
      // create user
      this.model = {
        firstName: userform.value.firstName,
        lastName: userform.value.lastName,
        email: userform.value.email,
      };
      this.add=true
      console.log(this.model.firstName);
      //createUsers(){
      this.usersservice.createUsers(this.model).subscribe((res) => {
        if (res.id) {
          console.log('add succesfully ');
        } else {
          console.log('something wrong');
        }
        setTimeout(() => {
          this.router.navigate(['user']);
        }, 2000);
      });
    }
  }
// updateUsers() {
  
//}



  getUsers(){
    this.usersservice.getUsers().subscribe(response=> console.log("getting users :",response) );
    
    
  }
}
