import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodoIntakeComponent  implements OnInit {
  title = 'To Do App';

  restItems: any;

  restItemsUrl = 'http://localhost:3000/api/todos';

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getRestItems();
    setInterval(this.getRestItems2, 5000);
  }


  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log("testing: " + this.restItems);
        }
      )
  }

    // Read all REST Items
    getRestItems2(): void {
      this.restItemsServiceGetRestItems()
        .subscribe(
          restItems => {
            this.restItems = restItems;
            console.log("testing: " + this.restItems);
          }
        )
       
    }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

}

