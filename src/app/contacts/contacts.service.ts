import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable()
export class ContactsService {
  private contactListSource = new BehaviorSubject<any>([]);

  contactList$ = this.contactListSource.asObservable();

  constructor(private http: HttpClient) {}

  loadContacts() {
    return this.http
      .get(`${API_URL}/contacts`)
      .pipe(tap((data) => this.contactListSource.next(data)));
  }

  create(contact) {
    return this.http
      .post(`${API_URL}/contacts`, contact)
      .pipe(
        tap(() =>
          this.loadContacts().subscribe(() => console.log('Contact created'))
        )
      );
  }

  update(contact) {
    return this.http
      .put(`${API_URL}/contacts/${contact.id}`, contact)
      .pipe(
        tap(() =>
          this.loadContacts().subscribe(() => console.log('Contact updated'))
        )
      );
  }

  delete(contact) {
    return this.http
      .delete(`${API_URL}/contacts/${contact.id}`, contact)
      .pipe(
        tap(() =>
          this.loadContacts().subscribe(() => console.log('Contact deleted'))
        )
      );
  }
}
