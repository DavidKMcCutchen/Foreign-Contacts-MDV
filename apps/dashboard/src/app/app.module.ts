import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { CoreDataModule } from '@foreign-contacts/core-data';
import { CoreStateModule } from "@foreign-contacts/core-state";
import { MaterialModule } from "@foreign-contacts/material";


@NgModule({
  declarations: [AppComponent, ContactsComponent, ContactListComponent, ContactDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
