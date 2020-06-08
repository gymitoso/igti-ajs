import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {

  contact: any = {};

  constructor(
    public dialogRef: MatDialogRef<ContactsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private contactsService: ContactsService,
  ) {
    this.contact = Object.assign({}, data);
  }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onConfirm() {
    if (this.contact.id) {
      this.contactsService.update(this.contact).subscribe();
    } else {
      this.contactsService.create(this.contact).subscribe();
    }
    this.dialogRef.close(this.contact);
  }
}
