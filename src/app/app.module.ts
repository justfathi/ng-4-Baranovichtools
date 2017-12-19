import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import {
   MatButtonModule, MatMenuModule, 
   MatToolbarModule, MatIconModule, 
   MatInputModule, MatTooltipModule,
   MatDialogModule, MatFormFieldModule,
} from '@angular/material';

// routing
import { routing, appRoutingProviders } from './app.routes';

// providers
import { AuthService } from './main-services/auth.service';
import { SeoService } from './main-services/seo.service';

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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { LoginComponent } from './components/login/login.component';
// admin
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { ImgPickerComponent } from './admin/img-picker/img-picker.component';
import { ConfirmComponent } from './admin/confirm/confirm.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    SubscriptionComponent,
    AdminMenuComponent,
    LoginComponent,
    ImgPickerComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule, 
    MatMenuModule, MatDialogModule,
    MatButtonModule, MatToolbarModule, MatIconModule,
    MatInputModule, MatTooltipModule, 
    MatFormFieldModule,
  ],
  entryComponents: [ 
    MessageComponent, 
    SubscriptionComponent,
    ImgPickerComponent,
    ConfirmComponent 
  ],
  providers: [AuthService, SeoService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
