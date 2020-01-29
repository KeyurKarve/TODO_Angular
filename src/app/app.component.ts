import { Component } from "@angular/core";

import { Todo } from "./todo";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Project CC";

  todoValue: string;
  list: Todo[];
  id:number=0;

  ngOnInit() {
    this.list = [];
    this.todoValue = "";
  }

  addItem() {
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id:++this.id,
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }
  check(item:Todo){
    item.isDone=!item.isDone;
    let c:string="Un-cheked";
    if(item.isDone)
    {
      c="cheked"
    }
    console.log(item ,c);
    
  }
}
