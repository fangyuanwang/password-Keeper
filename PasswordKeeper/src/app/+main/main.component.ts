import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Subscription } from "rxjs/Subscription";

import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { Password } from "app/models/password.model";
import { MdDialog, MdDialogConfig } from "@angular/material";
import { PasswordDialogComponent } from "app/password-dialog/password-dialog.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  private authStateSubscription: Subscription;
  private firebasePath: string;
  passwrodStream: FirebaseListObservable<Password[]>;

  constructor(private afAuth: AngularFireAuth, 
      private router: Router, 
      private db: AngularFireDatabase,
      private dialog: MdDialog) {
  }

  ngOnInit(): void {
    this.authStateSubscription = this.afAuth.authState.subscribe( (user: firebase.User) => { 
      if (user) {
        // Signin just happen
        console.log("User is signed in as: ", user.uid);

        this.firebasePath = `/users/${user.uid}`;
        this.passwrodStream = this.db.list(this.firebasePath);
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

  showPasswordDialog(): void {
    console.log("dialog");
    const dialogConfig = new MdDialogConfig();
    dialogConfig.data = {firebasePath: this.firebasePath};

    this.dialog.open(PasswordDialogComponent, dialogConfig);
  }
}
