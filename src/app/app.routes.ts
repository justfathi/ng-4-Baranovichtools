import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsComponent } from './components/pages/news/news.component';
import { MembershipComponent } from './components/pages/membership/membership.component';
import { FriendsComponent } from './components/pages/friends/friends.component';
import { HelpComponent } from './components/pages/help/help.component';
import { HistoryComponent } from './components/pages/history/history.component';



export const routes: Routes = [
  { path: '',   redirectTo: '/home',   pathMatch : 'full' },
  { path: 'home',   component: HomeComponent },
  { path: 'news',   component: NewsComponent },
  { path: 'membership',   component: MembershipComponent },
  { path: 'friends',   component: FriendsComponent },
  { path: 'help',   component: HelpComponent },
  { path: 'history',   component: HistoryComponent },
 ];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes);