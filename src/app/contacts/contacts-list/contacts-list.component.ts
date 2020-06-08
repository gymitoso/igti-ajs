import { Component, OnInit, Output, ViewChild, OnDestroy, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ContactsService } from '../contacts.service';

const COLUMNS_DEFAULT = ['name', 'email', 'phone', 'address', 'actions'];

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject();

  displayedColumns: string[] = COLUMNS_DEFAULT;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Output() openEditModal = new EventEmitter<any>();
  @Output() openDeleteModal = new EventEmitter<any>();

  constructor(
    private contactsService: ContactsService,
  ) { }

  ngOnInit(): void {
    this.contactsService.contactList$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(contactss => this.initDataSource(contactss));

    this.loadContacts();
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  loadContacts() {
    this.contactsService
      .loadContacts()
      .subscribe();
  }

  initDataSource(data) {
    if (this.dataSource == null) {
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    } else {
      this.dataSource.data = data;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(contact) {
    this.openEditModal.emit(contact);
  }

  delete(contact) {
    this.contactsService.delete(contact).subscribe();
  }
}
