import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule }  from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule}  from '@angular/material/card';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatMenuModule } from '@angular/material/menu';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserAddressComponent } from './edit-user-address/edit-user-address.component';
import { TodoComponent } from './todo/todo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogUserComponent,
    UserDetailComponent,
    EditUserComponent,
    EditUserAddressComponent,
    TodoComponent,
    TodoDialogComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
