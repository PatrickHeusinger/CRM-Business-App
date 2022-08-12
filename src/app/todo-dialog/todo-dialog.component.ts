import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from 'src/models/todo.class';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.scss']
})
export class TodoDialogComponent implements OnInit {

  todo = new Todo();

  constructor(public dialogRef: MatDialogRef<TodoDialogComponent>, private firestore: AngularFirestore,public service: FirebaseService) { }

  ngOnInit(): void {
  }

saveTodo(){
  console.log('Todo works!');
  this.firestore.collection('todo').add(this.todo.toJSON()).then((result: any) =>{
  console.log('Add ToDo :', result);
  this.service.allTodos.push(result);
  this.dialogRef.close();
  console.log(this.todo);
  console.log(this.service.allTodos);
  
  
  });
}
}


