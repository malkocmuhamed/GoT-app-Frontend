import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatefamilyComponent } from './createfamily/createfamily.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditfamilyComponent } from './editfamily/editfamily.component';
import { FamiliesComponent } from './families/families.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'families',
    component: FamiliesComponent
  },
  {
    path: 'editfamily/:id',
    component: EditfamilyComponent
  },
  {
    path: 'createfamily',
    component: CreatefamilyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
