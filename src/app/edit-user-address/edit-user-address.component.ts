import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-edit-user-address',
  templateUrl: './edit-user-address.component.html',
  styleUrls: ['./edit-user-address.component.scss']
})
export class EditUserAddressComponent implements OnInit {
  user: User;
  userId: string;
  loading = false;

  constructor(public dialogRef: MatDialogRef<EditUserAddressComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  editUser(){

  }

  saveUser(){
  this.firestore.collection('users')
  .doc(this.userId)
  .update(this.user.toJSON())
  .then(() => {
    this.loading = false;
    this.dialogRef.close();
  });
  }

}
