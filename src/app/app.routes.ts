import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsComponent } from './components/pages/news/news.component';
import { MembershipComponent } from './components/pages/membership/membership.component';
import { FriendsComponent } from './components/pages/friends/friends.component';
import { HelpComponent } from './components/pages/help/help.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { LoginComponent } from './components/login/login.component';

//admin
import { AuthGuard } from './guard/auth.guard';
import { FriendsEditComponent } from './components/pages-edit/friends-edit/friends-edit.component';


export const routes: Routes = [
  { path: '',   redirectTo: '/home',   pathMatch : 'full' },
  { path: 'home',   	  component: HomeComponent },
  { path: 'login', 		  component: LoginComponent },
  { path: 'news',   	  component: NewsComponent },
  { path: 'membership',   component: MembershipComponent },
  { path: 'friends', 	  component: FriendsComponent },
  { path: 'help',   	  component: HelpComponent },
  { path: 'history',      component: HistoryComponent },
  // admin pages
  { path: 'friends-edit', component: FriendsEditComponent, canActivate: [AuthGuard]}
 ];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes);