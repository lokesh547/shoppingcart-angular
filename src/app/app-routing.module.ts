import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './admin/books/books.component';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ShopbookComponent } from './shopbook/shopbook.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/books', component: BooksComponent },
  { path: 'shop', component: ShopbookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
