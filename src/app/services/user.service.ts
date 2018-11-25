import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from "firebase";

import { AppUser } from '../modals/app-user';
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  appUser$: Observable<AppUser>;
  isAdmin: boolean;

  constructor(
    private authSerivce: AuthService,
    private db: AngularFireDatabase) {
      this.getAppUser$Data();
    }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): AngularFireObject<AppUser> {
    return this.db.object('/users/' + uid);
  }

  getAppUser$Data() {
    this.authSerivce.user$.subscribe(user => {
      this.appUser$ = this.get(user.uid).valueChanges();

      this.appUser$.subscribe(appUser => {
        this.isAdmin = appUser.isAdmin
      });
    });
  }
}

