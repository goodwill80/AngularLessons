import { Component } from '@angular/core';




@Component({
  moduleId: module.id,
  selector: 'buildin',
  templateUrl: 'buildinDirectives.component.html',
  styleUrls: ['buildinDirectives.component.css']
})





export class BuildinComponent {

  onTest() {
    return true;
  }

  courses: string[]=["jon", "mary", "david"];
  ta_object = [
    {
      name: "Jonathan",
      age: 25
    },
    {
      name: "Ann",
      age: 34
    },
    {
      name: "David",
      age: 40
    }
  ]

};
