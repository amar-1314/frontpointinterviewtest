import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
