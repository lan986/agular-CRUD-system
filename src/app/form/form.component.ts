import { Component, OnInit } from '@angular/core';
   
import{hero} from '../models/hero.model'
  

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  power:string[]=["smart","eee"]
  model:hero={name:"",power:"",alterego:""}
  submited=false;

  constructor() { }

  ngOnInit(): void {
  }

  onsubmitfunc():void{
    console.log(this.model)
  }
}
