import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactsFormComponent } from './contacts/contacts-form/contacts-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public dialog: MatDialog,
  ) { }

  openContactForm(contact): void {
    const dialogRef = this.dialog.open(ContactsFormComponent, {
      width: '500px',
      data: contact
    });
  }
}
