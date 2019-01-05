import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './todolist.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ 
  ],
  bootstrap: [TodoListComponent]
})
export class TodoListModule { }

