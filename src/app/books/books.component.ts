import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

import { BooksFormComponent } from './books-form/books-form.component';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  constructor(
    public dialog: MatDialog,
    private titleService: Title,
  ) {
    this.titleService.setTitle('Livraria - IGTI');
  }

  openBookForm(book): void {
    const dialogRef = this.dialog.open(BooksFormComponent, {
      width: '500px',
      data: book
    });
  }
}
