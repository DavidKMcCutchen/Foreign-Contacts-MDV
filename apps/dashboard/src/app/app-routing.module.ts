import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { ContactsComponent } from './contacts/contacts.component';
import { ForeignContactsService } from "@foreign-contacts/core-data";
import { LoginComponent } from "@foreign-contacts/ui-login";

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'contacts', component: ContactsComponent},  
  {path: 'login', component: LoginComponent},    
  {path: '**', redirectTo: '', pathMatch: 'full'}    
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
