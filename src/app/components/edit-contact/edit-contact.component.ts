import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackBarComponent } from 'src/app/shared/alert/snack-bar/snack-bar.component';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  constructor(private router: Router, private userService: UsersService, private _snackBar: MatSnackBar,private route:ActivatedRoute) { }
  ContactId;
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  formControls = this.contactForm.controls;
  url: any = 'assets/default.jpg';
  get name() {
    return this.contactForm.get('name');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  ngOnInit() {
    this.ContactId = this.route.snapshot.paramMap.get('id');
     this.userService.getUser(this.ContactId).subscribe((result:any)=>{
       this.formControls.name.setValue(result.name);
       this.formControls.phone.setValue(result.phone)
     })

  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
    });
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
    this.userService.editUser(payload,this.ContactId).subscribe(result=>{
      
    })
    this.router.navigate(['/'])
  }
  onCancel() {
    this.router.navigate(['/'])
  }

}
