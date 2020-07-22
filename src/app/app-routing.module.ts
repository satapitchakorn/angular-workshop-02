import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthGuard } from './helper/auth.guard';
import { AnonymousGuard } from './helper/anonymous.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AnonymousGuard] },
  { path: 'list', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'list/:name', component: ProductListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
