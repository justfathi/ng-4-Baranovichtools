import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import {
   MdButtonModule, MdCardModule, 
   MdMenuModule, MdToolbarModule, 
   MdIconModule, MdTableModule,
   MdInputModule, MdTooltipModule,
   MdDialogModule, MdSnackBarModule
} from '@angular/material';

// routing
import { routing, appRoutingProviders } from './app.routes';

// providers
import { AppService } from './services/app.service';

//firebase
//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';

// enviroment 
import { environment } from '../environments/environment';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FriendsComponent } from './components/pages/friends/friends.component';
import { MembershipComponent } from './components/pages/membership/membership.component';
import { HelpComponent } from './components/pages/help/help.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/pages/news/news.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { TableBasicComponent } from './components/table-basic/table-basic.component';
import { MessageComponent } from './components/message/message.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MeetingsComponent } from './components/meetings/meetings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendsComponent,
    MembershipComponent,
    HistoryComponent,
    HelpComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    TableBasicComponent,
    MessageComponent,
    SubscriptionComponent,
    MeetingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule, 
    MdMenuModule, MdDialogModule,
    MdButtonModule, MdCardModule,  
    MdToolbarModule, MdIconModule,
    MdTableModule, MdInputModule,
    MdTooltipModule, MdSnackBarModule
  ],
  entryComponents: [ 
    MessageComponent, 
    SubscriptionComponent 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
