import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'John', age: 30, job: 'Engineer', employed: true},
    {name: 'Francine', age: 35, job: 'Designer', employed: false},
    {name: 'Bob', age: 20, job: 'Engineer', employed: true},
  ];

  headers = [
    {key: 'employed', label: 'Has a Job?'},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
