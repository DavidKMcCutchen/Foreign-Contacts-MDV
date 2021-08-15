import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Contact } from '@foreign-contacts/api-interfaces';

@Component({
  selector: 'foreign-contacts-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  currentContact: Contact;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set contact(value) {
    if (value) this.originalTitle = value.name;
    this.currentContact = { ...value }
  };

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}
