import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AuthService } from './services/auth.service';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService} from './services/token-interceptor.service';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { MessagesComponent } from './components/messages/messages.component';
import { GameComponent } from './components/game/game.component';




const appRoutes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'ranking', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: UserSignupComponent },
  { path: 'delete', component: UserDeleteComponent, canActivate: [AuthGuard]},
  { path: 'message', component: MessagesComponent, canActivate: [AuthGuard]},
  { path: 'game', component: GameComponent, canActivate: [AuthGuard]},
  //{ path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserDeleteComponent,
    MessagesComponent,
    GameComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes)

  ],
  providers: [DataService, AuthService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
