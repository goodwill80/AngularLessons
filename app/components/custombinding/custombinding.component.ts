import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { EventBindingComponent } from './event-binding.component';


@Component({
  moduleId: module.id,
  selector: 'custom',
  templateUrl: 'custombinding.component.html',
  directives:[ ROUTER_DIRECTIVES, EventBindingComponent ]
})





export class CustombindingComponent {
  @Input () result: number = 10;
};
