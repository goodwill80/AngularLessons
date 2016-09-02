import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { Lesson1Component } from './components/pages/lesson1.component';
import { BuildinComponent } from './components/pages/buildinDirectives.component';
import { CustombindingComponent  } from './components/custombinding/custombinding.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'custom', component: CustombindingComponent},
  {path:'lesson1', component: Lesson1Component},
  {path:'buildin', component: BuildinComponent}
];

export const routing = RouterModule.forRoot(routes);
