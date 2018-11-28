import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth, 
    private route: ActivatedRoute,
    private router: Router
    ) { 
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    console.log(`returnUrl: ${returnUrl}`);

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}
