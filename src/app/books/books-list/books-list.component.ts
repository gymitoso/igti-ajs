import { Component, OnInit, Output, ViewChild, OnDestroy, EventEmitter } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooksService } from '../books.service';

const COLUMNS_DEFAULT = ['title', 'author', 'publisher', 'field', 'actions'];

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe$ = new Subject();

  displayedColumns: string[] = COLUMNS_DEFAULT;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @Output() openEditModal = new EventEmitter<any>();
  @Output() openDeleteModal = new EventEmitter<any>();

  constructor(
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.booksService.bookList$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(bookss => this.initDataSource(bookss));

    this.loadBooks();
  }

  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

  loadBooks() {
    this.booksService
      .loadBooks()
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

  edit(book) {
    this.openEditModal.emit(book);
  }

  delete(book) {
    this.booksService.delete(book).subscribe();
  }
}
