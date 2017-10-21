import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/login/login.component';

// admin
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '',              redirectTo: '/home',   pathMatch : 'full' },
  { path: 'home',   	     component: HomeComponent },
  { path: 'login', 		     component: LoginComponent },
  { path: 'news',   	     loadChildren: 'app/components/pages/news/news.module#NewsModule' },
  { path: 'membership',    loadChildren: 'app/components/pages/membership/membership.module#MembershipModule' },
  { path: 'friends', 	     loadChildren: 'app/components/pages/friends/friends.module#FriendsModule' },
  { path: 'help',   	     loadChildren: 'app/components/pages/help/help.module#HelpModule' },
  { path: 'history',       loadChildren: 'app/components/pages/history/history.module#HistoryModule' },
  { path: 'meetings',      loadChildren: 'app/components/pages/meetings/meetings.module#MeetingsModule' },
 
  // admin pages
  { path: 'upload-edit',   loadChildren: 'app/admin/pages-edit/upload-edit/upload-edit.module#UploadEditModule', canActivate: [AuthGuard] },   // canActivate: [AuthGuard]
  { path: 'friends-edit',  loadChildren: 'app/admin/pages-edit/friends-edit/friends-edit.module#FriendsEditModule', canActivate: [AuthGuard] },  // canActivate: [AuthGuard]
  { path: 'meetings-edit', loadChildren: 'app/admin/pages-edit/meetings-edit/meetings-edit.module#MeetingsEditModule', canActivate: [AuthGuard] }, // canActivate: [AuthGuard]
  { path: 'news-edit',     loadChildren: 'app/admin/pages-edit/news-edit/news-edit.module#NewsEditModule', canActivate: [AuthGuard] }, // canActivate: [AuthGuard]
  { path: 'instruction',   loadChildren: 'app/admin/pages-edit/instruction/instruction.module#InstructionModule', canActivate: [AuthGuard] }   // canActivate: [AuthGuard]
 ];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
