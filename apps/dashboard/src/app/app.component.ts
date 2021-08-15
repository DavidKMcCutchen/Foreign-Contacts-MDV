import { Component } from '@angular/core';

@Component({
  selector: 'foreign-contacts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Contacts';
  links= [
    {path: '', icon: 'home', title:'Home'},
    {path: 'contacts', icon: 'view_list', title: 'Contacts'}
  ]
}
