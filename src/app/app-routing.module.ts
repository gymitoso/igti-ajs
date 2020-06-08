import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsFormComponent } from './contacts/contacts-form/contacts-form.component';

const routes: Routes = [
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
