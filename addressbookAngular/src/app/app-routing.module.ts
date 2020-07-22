import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { AuthComponent } from './components/pages/auth/auth.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ContactlistComponent } from './components/pages/contact/contactlist/contactlist.component';
import { UserComponent } from './components/pages/user/user.component';
import { UserlistComponent } from './components/pages/user/userlist/userlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

      { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'contacts',
        component: ContactComponent,
        children: [{ path: 'list', component: ContactlistComponent }],
      },
      {
        path: 'users',
        component: UserComponent,
        children: [{ path: 'profile', component: UserlistComponent }],
      },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  DashboardComponent,
  AuthComponent,
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  ContactComponent,
  ContactlistComponent,
  UserComponent,
  UserlistComponent,
];
