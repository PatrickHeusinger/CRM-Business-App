import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: User;
  loading = false;
  birthDate: Date;
  userId: string;

  constructor(public dialogRef: MatDialogRef<EditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  editUser(){

  }

  saveUser(){
    this.loading = true;
    this.firestore.collection('users')
    .doc(this.userId)
    .update(this.user.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
  }

}
