import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-directive',
  templateUrl: './use-directive.component.html',
  styleUrls: ['./use-directive.component.css']
})
export class UseDirectiveComponent implements OnInit {

  success = false;
  failure = false;

  constructor() { }

  ngOnInit(): void {
  }

}
