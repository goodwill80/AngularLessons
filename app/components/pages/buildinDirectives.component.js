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
var BuildinComponent = (function () {
    function BuildinComponent() {
        this.courses = ["jon", "mary", "david"];
        this.ta_object = [
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
        ];
    }
    BuildinComponent.prototype.onTest = function () {
        return true;
    };
    BuildinComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'buildin',
            templateUrl: 'buildinDirectives.component.html',
            styleUrls: ['buildinDirectives.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BuildinComponent);
    return BuildinComponent;
}());
exports.BuildinComponent = BuildinComponent;
;
//# sourceMappingURL=buildinDirectives.component.js.map