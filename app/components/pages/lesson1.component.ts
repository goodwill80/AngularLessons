import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  moduleId: module.id,
  selector: 'lesson1',
  templateUrl: 'lesson1.component.html',
  directives: [ChildComponent]
})

export class Lesson1Component {
  childValue: string;

 //Interpolation
  stringInterpolation = "This is the string interpolation, you need to define it in class of component and add it into {{}} in html";
  numberInterpolation = 10;

  //event binding
  property = "@Input( ) propertyName: string;";
  event = "@Output( ) eventName = new EventEmitter( );"


  // value = '';
  // onkey(value:string){
  //   this.value = value;
  // }
};
