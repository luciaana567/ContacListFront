import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonComponent } from './add-person/add-person.component';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    AddPersonComponent,
    EditPersonComponent,
    ContactListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
