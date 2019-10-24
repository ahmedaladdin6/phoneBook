
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from 'src/app/shared/alert/snack-bar/snack-bar.component';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {

  constructor(private router: Router, private userService: UsersService, private _snackBar: MatSnackBar) { }

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  url: any = 'assets/default.jpg';
  get name() {
    return this.contactForm.get('name');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  ngOnInit() {


  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
    });
  }
  uniqueValidator(){

  }

  takeNumberOnly(event) {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }
  onSubmit() {
    let name = this.contactForm.value.name;
    let phone = this.contactForm.value.phone
    let payload = { "name": name.charAt(0).toUpperCase() + name.substring(1), "phone": phone };
    this.userService.addUser(payload).subscribe(result => {
    })
    this.router.navigate(['/'])
  }
  onCancel() {
    this.router.navigate(['/'])
  }
}
