import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User();
  allUsers:any = [];
  changes: any;
  

  constructor(public dialog: MatDialog, private firestore: AngularFirestore, public service: FirebaseService) { }

  ngOnInit(): void {
  this.firestore.collection('users').valueChanges({idField: 'customIdName'}).subscribe((changes: any) => {
  console.log('Recieved',changes);
  this.allUsers = changes;
  this.service.totalUsers.push(changes);

  });
  }

  openDialog(){
  this.dialog.open(DialogUserComponent);
  
  }

}
