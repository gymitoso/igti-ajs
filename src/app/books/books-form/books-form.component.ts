import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss']
})
export class BooksFormComponent implements OnInit {

  book: any = {};

  constructor(
    public dialogRef: MatDialogRef<BooksFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private booksService: BooksService,
  ) {
    this.book = Object.assign({}, data);
  }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  onConfirm() {
    if (this.book.id) {
      this.booksService.update(this.book).subscribe();
    } else {
      this.booksService.create(this.book).subscribe();
    }
    this.dialogRef.close(this.book);
  }
}
