import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent implements OnInit {
  displayName: string;

  ngOnInit(): void {
  }

  constructor(public afAuth: AngularFireAuth) {
  }

  public login() {
    console.log('before login');
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
    console.log('after login');
    this.displayName = this.afAuth.auth.currentUser.displayName;
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

}
