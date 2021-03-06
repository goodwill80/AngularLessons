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
var router_1 = require('@angular/router');
var event_binding_component_1 = require('./event-binding.component');
var CustombindingComponent = (function () {
    function CustombindingComponent() {
        this.result = 10;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CustombindingComponent.prototype, "result", void 0);
    CustombindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'custom',
            templateUrl: 'custombinding.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, event_binding_component_1.EventBindingComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CustombindingComponent);
    return CustombindingComponent;
}());
exports.CustombindingComponent = CustombindingComponent;
;
//# sourceMappingURL=custombinding.component.js.map