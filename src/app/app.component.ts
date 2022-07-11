import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';
  firstpath='/first';

constructor(private router:Router){

}
/*
gotosecond():void{
//this.router.navigate(["first",id])
//this.router.navigate(['second/test'])// with route parameters
this.router.navigate(['second'],{queryParams:{name:'somevalue'}})//with queryparams as objects
}*/

}