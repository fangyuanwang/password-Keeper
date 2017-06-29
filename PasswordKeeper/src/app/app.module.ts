import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdRippleModule,
  MdSnackBarModule,
  MdToolbarModule,
} from '@angular/material';
import { SigninComponent } from './+signin/signin.component';
import { MainComponent } from './+main/main.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { PasswordDisplayCardComponent } from './password-display-card/password-display-card.component';


export const MaterialModules = [
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdRippleModule,
  MdSnackBarModule,
  MdToolbarModule,
];


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    MainComponent,
    PasswordDialogComponent,
    PasswordDisplayCardComponent,
  ],
  entryComponents: [
    PasswordDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModules,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
