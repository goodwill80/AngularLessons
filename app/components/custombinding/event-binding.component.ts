import { Component } from '@angular/core';




@Component({
  moduleId: module.id,
  selector: 'fa-event-binding',
  template: `
  <button (click)="onClick()">Click me!</button>
  `
})





export class EventBindingComponent {
  onClick(){
    alert("it works!");
  }
};
