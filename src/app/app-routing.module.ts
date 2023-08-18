import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path:"book",
    component:BookListComponent
  },
  {
    path:"view/id",
    component:BookComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"add-book",
    component:AddBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
