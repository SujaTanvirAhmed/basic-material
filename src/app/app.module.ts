import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { SubmittedInfoComponent } from './components/submitted-info/submitted-info.component';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './components/hello/hello';
import { ToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
// import { UserUpdateFormComponent } from './components/user-update-form/user-update-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    JobApplicationComponent,
    ApplicationFormComponent,
    SubmittedInfoComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    ToolbarComponent,
    UsersComponent,
    UserComponent,
    // UserUpdateFormComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
