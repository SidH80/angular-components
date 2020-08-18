import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Engineer', employeed: true },
    { name: 'Jill', age: 26, job: 'Developer', employeed: false },
    { name: 'Elyse', age: 25, job: 'Designer', employeed: true },
  ];
  headers = [
    { key: 'employeed', label: 'Has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
