import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
   MdDialogModule, MdSnackBarModule,
   MdFormFieldModule,
} from '@angular/material';

// routing
import { routing, appRoutingProviders } from './app.routes';

// providers
import { AppService } from './main-services/app.service';
import { AuthService } from './main-services/auth.service';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//guard
import { AuthGuard} from './guard/auth.guard';

// enviroment 
import { environment } from '../environments/environment';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableBasicComponent } from './components/table-basic/table-basic.component';
import { MessageComponent } from './components/message/message.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MeetingsWindowComponent } from './components/meetings-window/meetings-window.component';
import { LoginComponent } from './components/login/login.component';
// admin
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { ImgPickerComponent } from './admin/img-picker/img-picker.component';
import { MapsAllComponent } from './components/maps-all/maps-all.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TableBasicComponent,
    MessageComponent,
    SubscriptionComponent,
    AdminMenuComponent,
    LoginComponent,
    ImgPickerComponent,
    MeetingsWindowComponent,
    MapsAllComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule, 
    MdMenuModule, MdDialogModule,
    MdButtonModule, MdCardModule,  
    MdToolbarModule, MdIconModule,
    MdTableModule, MdInputModule,
    MdTooltipModule, MdSnackBarModule,
    MdFormFieldModule,
  ],
  entryComponents: [ 
    MessageComponent, 
    SubscriptionComponent,
    ImgPickerComponent 
  ],
  providers: [AppService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
