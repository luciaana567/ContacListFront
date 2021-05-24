import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonComponent } from './add-person/add-person.component';

@NgModule({
  declarations: [AppComponent, ListPeopleComponent, AddPersonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
