import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve <any> {

  constructor( private userService : UsersService) { }
  resolve (route :ActivatedRouteSnapshot,state:RouterStateSnapshot){
    return this.userService.getUsers();
  }
}
