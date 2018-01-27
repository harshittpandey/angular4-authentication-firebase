import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';

  export const firebaseConfig =  {
    apiKey: "AIzaSyA78dfzZOtBoM_kEsksSnGlWSJ7WgYgFXI",
    authDomain: "angular4-authentication-90370.firebaseapp.com",
    databaseURL: "https://angular4-authentication-90370.firebaseio.com",
    projectId: "angular4-authentication-90370",
    storageBucket: "angular4-authentication-90370.appspot.com",
    messagingSenderId: "409793495772"
  };


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
