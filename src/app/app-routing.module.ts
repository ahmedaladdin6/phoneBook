import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactsComponent } from './components/add-contacts/add-contacts.component';
import { UsersResolverService } from './shared/services/users-resolver.service';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';


const routes: Routes = [
  {
    path:'',
    component:ContactsComponent,
    resolve : { data:UsersResolverService}
  },
  {
    path:'addContact',
    component:AddContactsComponent
  },
  {
    path:'editContact/:id',
    component:EditContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
