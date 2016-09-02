import { Component, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'child',
  templateUrl: 'child.component.html',
  inputs: ['parentValue'],
  outputs: ['childChanged']
})

export class ChildComponent {
  parentValue: string;
  childChanged = new EventEmitter<string>();

  onChange(value: string) {
    this.childChanged.emit(value);
  }
};
