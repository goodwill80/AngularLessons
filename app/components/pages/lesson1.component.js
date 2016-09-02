"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var child_component_1 = require('../child/child.component');
var Lesson1Component = (function () {
    function Lesson1Component() {
        //Interpolation
        this.stringInterpolation = "This is the string interpolation, you need to define it in class of component and add it into {{}} in html";
        this.numberInterpolation = 10;
        //event binding
        this.property = "@Input( ) propertyName: string;";
        this.event = "@Output( ) eventName = new EventEmitter( );";
    }
    Lesson1Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lesson1',
            templateUrl: 'lesson1.component.html',
            directives: [child_component_1.ChildComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Lesson1Component);
    return Lesson1Component;
}());
exports.Lesson1Component = Lesson1Component;
;
//# sourceMappingURL=lesson1.component.js.map