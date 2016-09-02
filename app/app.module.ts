import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { Lesson1Component } from './components/pages/lesson1.component';
import { ChildComponent } from './components/child/child.component';
import {  BuildinComponent  } from './components/pages/buildinDirectives.component';
import { CustombindingComponent  } from './components/custombinding/custombinding.component';
import { routing } from './app.routes';



@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent, ChildComponent, BuildinComponent, CustombindingComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
