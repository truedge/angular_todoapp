import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoIntakeComponent } from './todointake.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoIntakeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ 
  ],
  bootstrap: [TodoIntakeComponent]
})
export class TodoIntakeModule { }

