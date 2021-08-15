import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '@foreign-contacts/api-interfaces';

@Component({
  selector: 'foreign-contacts-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts: Contact[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
