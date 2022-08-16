import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem }  from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Todo } from 'src/models/todo.class';
import { FirebaseService } from '../firebase.service';
import { Done } from 'src/models/done.class';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
 
  
  todo = new Todo();
  doneTodo = this.todo;
  todoTitle: any;
  todoDescription: any;
  doneTitle: any;
  doneDescription: any;
  allTodos: any;
  allDone: any;
  todoId: string;
  
  
  todos: any = [this.todo]
    
  done: any = [this.todo];
  
  
  
  constructor(public dialog: MatDialog,public firestore: AngularFirestore, public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    
   this.firestore.collection('todo').valueChanges({idField: 'customIdName'}).subscribe((changes: any) => {
        console.log('Recieved Todo :',changes);
        this.firebaseService.allTodos = changes;
        this.todos = this.firebaseService.allTodos;
       });
       this.firestore.collection('done').valueChanges({idField: 'customIdName'}).subscribe((changes: any) => {
        console.log('Recieved Done :',changes);
        this.firebaseService.allDone = changes;
        this.done = this.firebaseService.allDone;
       

        });
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

    deleteTodo() {
      console.log('Delete Todo Works');
      this.firebaseService.allTodos.pop();
      
     
    }

    deleteDone(){
      console.log('Delete Done Works');
      this.firebaseService.allDone.pop();
    }
  

}



