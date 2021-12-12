import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth/auth-guard.service';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';

const routes: Routes = [
  {path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  {path: "order-detail/:id", component: OrderDetailComponent, canActivate: [AuthGuard]  },
  {path: "signin", component: SigninComponent },
  {path: "signup", component: SignupComponent },
  {path: "**", redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
