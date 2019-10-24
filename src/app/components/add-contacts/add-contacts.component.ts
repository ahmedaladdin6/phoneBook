
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {
  obj: any = {};
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });
  url: any = 'assets/default.jpg';
  get name() {
    return this.contactForm.get('name');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
 

  constructor(private router: Router) { }

  ngOnInit() {


  }
  onSubmit() {
    // this.obj = {
       
    //   'name':  this.contactForm.value.firstName.toUpperCase(),
    //   'phone': this.contactForm.value.phone,
    // }
    // localStorage.setItem('myObj', JSON.stringify(this.obj));





    this.router.navigate(['/'])
  }
  onCancel() {
    this.router.navigate(['/'])
  }
}
