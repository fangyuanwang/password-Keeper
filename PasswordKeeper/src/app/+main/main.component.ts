import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Subscription } from "rxjs/Subscription";

import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Password } from "app/models/password.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  private authStateSubscription: Subscription;

  passwrodStream: FirebaseListObservable<Password[]>;

  constructor(private afAuth: AngularFireAuth, 
      private router: Router, 
      private db: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe( (user: firebase.User) => { 
      if (user) {
        // Signin just happen
        console.log("User is signed in as: ", user.uid);
        const firebasePath = `/users/${user.uid}`;
        this.passwrodStream = this.db.list(firebasePath);
      } else {
        //Signout just happen
        console.log("User is not signed in");
        this.router.navigate(["/signin"]);
      }
     });
  }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }
  
  signOut(): void {
    this.afAuth.auth.signOut();
  }

}
