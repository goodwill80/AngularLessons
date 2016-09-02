"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/pages/home.component');
var lesson1_component_1 = require('./components/pages/lesson1.component');
var buildinDirectives_component_1 = require('./components/pages/buildinDirectives.component');
var custombinding_component_1 = require('./components/custombinding/custombinding.component');
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'custom', component: custombinding_component_1.CustombindingComponent },
    { path: 'lesson1', component: lesson1_component_1.Lesson1Component },
    { path: 'buildin', component: buildinDirectives_component_1.BuildinComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map