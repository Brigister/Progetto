import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AuthService } from './services/auth.service';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard} from './guards/can-deactivate.guard'
import { TokenInterceptorService} from './services/token-interceptor.service';
import { AdministrationComponent } from './components/administration/administration.component';
import { ChatComponent } from './components/chat/chat.component';
import { GameComponent } from './components/game/game.component';
import { SearchComponent } from './components/search/search.component';




const appRoutes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'leaderboard', component: LeaderboardComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: UserSignupComponent },
  { path: 'administration', component: AdministrationComponent, canActivate: [AuthGuard]},
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
  { path: 'game', component: GameComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard]},
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]},
  //{ path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    UserLoginComponent,
    UserSignupComponent,
    AdministrationComponent,
    ChatComponent,
    GameComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes)

  ],
  providers: [DataService, AuthService, AuthGuard, CanDeactivateGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
