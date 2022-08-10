import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  user = new User();
  birthDate: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogUserComponent>, private firestore: AngularFirestore, public service: FirebaseService) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);
    this.loading = true;
    this.firestore.collection('users').add(this.user.toJSON()).then((result: any) =>{
    this.loading = false;
    console.log('Add user', result);
    this.service.totalUsers.push(result);
    this.dialogRef.close();

      }

     );
    
  }

}
