import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatefamilyComponent } from './createfamily/createfamily.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditfamilyComponent } from './editfamily/editfamily.component';
import { FamiliesComponent } from './families/families.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'families',
    component: FamiliesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editfamily',
    component: EditfamilyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'createfamily',
    component: CreatefamilyComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
