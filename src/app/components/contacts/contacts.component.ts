
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import Swal from 'sweetalert2'
import * as _ from 'lodash';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  imgUrl = 'assets/default.jpg';
  arrOfLetters=[];
  contacts=[];
  displayedColumns: string[] = ['contact','status'];
  dataSource;
  

  constructor(private router: Router,private userService: UsersService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
   this.arrOfLetters = new Array(26).fill(1).map((_,i)=>String.fromCharCode(65+i))
     this.userService.getUsers().subscribe(result=>{
       this.contacts.push(result);
       this.contacts.map(elements=>{
        this.dataSource = new MatTableDataSource(elements);
        this.dataSource.data = _.orderBy(this.dataSource.data, ['name'], ['asc']);
       })
     })

    
     console.log(this.arrOfLetters)
    //  
    // this.dataSource.data.map((res: any) => {
    //   if (res.firstName != null && res.lastName != null) {
    //     res.firstName = res.firstName.toUpperCase();
    //     res.lastName = res.lastName.toUpperCase();
        

    //   }

    // })
  
   


  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addContact() {
    this.router.navigate(['/addContact']);
  }

  letterClicked(l){
    switch (l) {
      case l = 'A':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
      case l = 'B':
        window.scrollTo({
          top: 600,
          behavior: 'smooth',
        });
        break;
      case l = 'C':
        Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')
        break;
      case l = 'D':
          Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')
        break;
      case l = 'E':
        window.scrollTo({
          top: 700,
          behavior: 'smooth',
        });
        break;
      case l = 'F':
        window.scrollTo({
          top: 800,
          behavior: 'smooth',
        });
        break;
      case l = 'G':
        window.scrollTo({
          top: 1110,
          behavior: 'smooth',
        });
        break;
      case l = 'H':
        window.scrollTo({
          top: 1200,
          behavior: 'smooth',
        });
        break;
      case l = 'I':
        window.scrollTo({
          top: 1350,
          behavior: 'smooth',
        });
        break;
      case l = 'J':
          Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')
        break;
      case l = 'K':
        window.scrollTo({
          top: 1450,
          behavior: 'smooth',
        });
        break;
      case l = 'L':
        window.scrollTo({
          top: 1550,
          behavior: 'smooth',
        });
        break;
      case l = 'M':
        window.scrollTo({
          top: 1650,
          behavior: 'smooth',
        });
        break;
      case l = 'N':
          Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')
        break;
      case l = 'O':
          Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')
        break;
      case l = 'P':
          Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')
        break;
      case l = 'Q':
        window.scrollTo({
          top: 2120,
          behavior: 'smooth',
        });
        break;
      case l = 'R':
          Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')
        break;
        case l = 'S':
        window.scrollTo({
          top: 2400,
          behavior: 'smooth',
        });
        break;
        case l = 'W':
        window.scrollTo({
          top: 2600,
          behavior: 'smooth',
        });
        break;
        default:
            Swal.fire('Character not found', '', 'warning')

    }
  }

}
