import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AuthService } from './services/auth/auth-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { PagesService } from './services/router/pages.service';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    OrderItemComponent,
    OrderDetailComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },AuthGuardService, PagesService, AuthService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
