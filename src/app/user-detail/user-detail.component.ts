import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { EditUserAddressComponent } from '../edit-user-address/edit-user-address.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId = '';
  user: User = new User();

  constructor(private route: ActivatedRoute,
     private firestore: AngularFirestore,
      public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log('ID : ',this.userId);
      this.getUser();

  });
  }

  getUser(){
    this.firestore
    .collection('users')
    .doc(this.userId)
    .valueChanges()
    .subscribe((user: any) => {
     this.user = new User(user);
     console.log('Retrieved user :', this.user);
     
   });
  }

 

  editMenu(){
  const dialog = this.dialog.open(EditUserAddressComponent);
  dialog.componentInstance.user = new User(this.user.toJSON());
  dialog.componentInstance.userId = this.userId;
  }

  editUserDetail(){
    const dialog = this.dialog.open(EditUserComponent)
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
