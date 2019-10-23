import { Component } from '@angular/core';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phoneBook';
  constructor( private serv : UsersService){
    this.serv.getUsers().subscribe(res=>{
      console.log(res)
    })
  }
}
