import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";
import { FirebaseService } from "../firebase.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  WeatherData:any;
  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  date: Date = new Date(Date.now());
  allUsers:any = [];
  changes: any;
  allTodos: any = [];
  

  constructor(public service: FirebaseService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('users').valueChanges({idField: 'customIdName'}).subscribe((changes: any) => {
      console.log('Recieved',changes);
      this.allUsers = changes;
      });

      this.firestore.collection('todo').valueChanges({idField: 'customIdName'}).subscribe((changes: any) => {
        console.log('Recieved',changes);
        this.allTodos = changes;
        });

     

    console.log( this.service.totalUsers.length);
    
 
     // Using Basic Interval
     this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

