import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>console.log(params))
  }

}
