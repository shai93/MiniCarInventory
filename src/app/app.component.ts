import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Car Inventory';
  addModel = function(){
    alert('Hello World');
  }

  viewInventory = function(){
    alert('Hello World');
  }
}
