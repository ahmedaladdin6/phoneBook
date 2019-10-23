
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
  contacts:any={};
  displayedColumns: string[] = ['contact','status'];
  // letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  // dataSource = new MatTableDataSource(this.contacts);
  dataSource;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private router: Router,private userService: UsersService) {


  }

  ngOnInit() {
    window.scrollTo(0, 0);
     this.userService.getUsers().subscribe(result=>{
       this.dataSource=result;
       console.log('cc',this.dataSource)
     })
    
    
   

    // this.dataSource.data.map((res: any) => {
    //   if (res.firstName != null && res.lastName != null) {
    //     res.firstName = res.firstName.toUpperCase();
    //     res.lastName = res.lastName.toUpperCase();
        

    //   }

    // })
    // this.dataSource.data.push(this.myFinalContact);
    // this.dataSource.data = _.orderBy(this.dataSource.data, ['firstName'], ['asc']);


  }
  addContact() {
    this.router.navigate(['/addContact']);
    // console.log('serv',this.contentAddService.data)
  }
  letterClicked(l) {

    if (l === 'A') {
      window.scrollTo(0, 0);

    }
    else if (l === 'B') {
      window.scrollTo(0, 2000);
    }
    else if (l === 'C') {
      Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')
    }
    else if (l === 'D') {
      window.scrollTo(0, 2165);
    }
    else if (l === 'E') {
      window.scrollTo(0, 2350);
    }
    else if (l === 'F') {
      window.scrollTo(0, 2620);
    }
    else if (l === 'G') {
      Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')
    }
    else if (l === 'H') {
      window.scrollTo(0, 2895);
    }
    else if (l === 'I') {
      window.scrollTo(0, 2985);
    }
    else if (l === 'J') {
      Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')

    } else if (l === 'K') {
      Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')

    } else if (l === 'L') {
      Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')

    } else if (l === 'M') {
      window.scrollTo(0, 3165);

    } else if (l === 'N') {
      window.scrollTo(0, 4620);

    } else if (l === 'O') {
      Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')

    } else if (l === 'P') {
      Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')

    } else if (l === 'Q') {
      Swal.fire('"' + l + '" ' + 'Character not found', '', 'warning')

    } else if (l === 'R') {
      window.scrollTo(0, 4980);

    } else if (l === 'S') {
      window.scrollTo(0, 5158);

    } else if (l === 'T') {
      window.scrollTo(0, 5300);

    } else if (l === 'U') {
      // window.scrollTo(0 , 0);

    } else if (l === 'V') {
      // window.scrollTo(0 , 0);

    } else if (l === 'W') {
      // window.scrollTo(0 , 0);

    } else if (l === 'X') {
      // window.scrollTo(0 , 0);

    } else if (l === 'Y') {
      // window.scrollTo(0 , 0);

    } else if (l === 'Z') {
      // window.scrollTo(0 , 0);

    }
  }


}
