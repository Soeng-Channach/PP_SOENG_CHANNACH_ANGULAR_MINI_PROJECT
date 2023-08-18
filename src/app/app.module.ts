import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    BookComponent,
    BookListComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
