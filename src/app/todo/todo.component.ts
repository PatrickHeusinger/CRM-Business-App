import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem }  from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Todo } from 'src/models/todo.class';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo = new Todo();
  todoTitle: any;
  todoDescription: any;
  
 

  todos: any = [this.todo]
    
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  
  
  
  

  constructor(public dialog: MatDialog,private firestore: AngularFirestore) { }

  ngOnInit(): void {
  
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openDialog(){
    this.dialog.open(TodoDialogComponent);
    
    }
  

}


