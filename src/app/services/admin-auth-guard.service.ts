import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  isAdmin: boolean ;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  canActivate() {
    this.authService.user$.subscribe(user => {
      let appUser = this.userService.get(user.uid);

      appUser.valueChanges().subscribe(appUser => {
        this.isAdmin = appUser.isAdmin;
      });
    });
    
    return this.isAdmin;
  }

}
