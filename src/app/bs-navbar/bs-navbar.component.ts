import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(state => console.log(state));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
