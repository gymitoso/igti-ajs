import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsFormComponent } from './contacts/contacts-form/contacts-form.component';
import { ContactsService } from './contacts/contacts.service';

@NgModule({
  declarations: [AppComponent, ContactsListComponent, ContactsFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatIconModule,
  ],
  entryComponents: [
    ContactsFormComponent,
  ],
  providers: [
    ContactsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
