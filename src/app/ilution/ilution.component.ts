import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ilution',
  templateUrl: './ilution.component.html',
  styleUrls: ['./ilution.component.css']
})
export class IlutionComponent implements OnInit {

  private users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];

  constructor() { }

  ngOnInit() {
  }

}
