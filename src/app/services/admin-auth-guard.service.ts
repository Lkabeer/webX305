import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  isAdmin: boolean ;

  constructor(
    private userService: UserService, 
    private router: Router) { }

  canActivate() {
    return this.userService.isAdmin;
  }

}
