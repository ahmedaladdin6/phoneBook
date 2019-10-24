import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/moduels/angularMaterial.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SnackBarComponent } from './shared/alert/snack-bar/snack-bar.component';
import { DeleteDialogComponent } from './shared/alert/delete-dialog/delete-dialog.component';
import { UniqueValidatorDirective } from './shared/validators/unique-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AddContactsComponent,
    EditContactComponent,
    SnackBarComponent,
    DeleteDialogComponent,
     UniqueValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent,DeleteDialogComponent] 
})
export class AppModule { }
