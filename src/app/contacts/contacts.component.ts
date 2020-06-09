import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

import { ContactsFormComponent } from './contacts-form/contacts-form.component';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  constructor(
    public dialog: MatDialog,
    private titleService: Title,
  ) {
    this.titleService.setTitle('Agenda - IGTI');
  }

  openContactForm(contact): void {
    const dialogRef = this.dialog.open(ContactsFormComponent, {
      width: '500px',
      data: contact
    });
  }
}
