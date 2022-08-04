import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  user = new User();
  birthDate: Date;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);

    this.firestore.collection('users').add(this.user.toJSON()).then((result: any) =>{

      console.log('Add user', result);
      
    }

    );
    
  }

}
