import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ 
  ],
  bootstrap: [TodoComponent]
})
export class TodoModule { }

