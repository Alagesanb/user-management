import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { SignupComponent } from '../app/signup/signup.component';
import { LoginComponent} from '../app/login/login.component';
import { DashboardComponent} from '../app/dashboard/dashboard.component'; 
import { SidemenuComponent} from '../app/sidemenu/sidemenu.component';
import { HeaderComponent } from '../app/header/header.component';
import { AddRoleComponent } from '../app/add-role/add-role.component';
import { EditRoleComponent } from '../app/edit-role/edit-role.component';
const routes: Routes = [
  { path:'home' ,component: HomeComponent },
  { path:'sign-up' ,component: SignupComponent },
  { path:'login' ,component: LoginComponent },
  { path:'dashboard' ,component: DashboardComponent },
  { path: 'side-menu' , component: SidemenuComponent },
  { path: 'header' , component: HeaderComponent },
  { path: 'add-role' , component: AddRoleComponent },
  { path: 'edit-role' , component: EditRoleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
