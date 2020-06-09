import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable()
export class BooksService {
  private bookListSource = new BehaviorSubject<any>([]);

  bookList$ = this.bookListSource.asObservable();

  constructor(private http: HttpClient) {}

  loadBooks() {
    return this.http
      .get(`${API_URL}/books`)
      .pipe(tap((data) => this.bookListSource.next(data)));
  }

  create(book) {
    return this.http
      .post(`${API_URL}/books`, book)
      .pipe(
        tap(() =>
          this.loadBooks().subscribe(() => console.log('Book created'))
        )
      );
  }

  update(book) {
    return this.http
      .put(`${API_URL}/books/${book.id}`, book)
      .pipe(
        tap(() =>
          this.loadBooks().subscribe(() => console.log('Book updated'))
        )
      );
  }

  delete(book) {
    return this.http
      .delete(`${API_URL}/books/${book.id}`, book)
      .pipe(
        tap(() =>
          this.loadBooks().subscribe(() => console.log('Book deleted'))
        )
      );
  }
}
