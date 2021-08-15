import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Contact, emptyContact } from '@foreign-contacts/api-interfaces';
import { ContactFacade } from '@foreign-contacts/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'foreign-contacts-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  allContacts$: Observable<Contact[]> = this.contactFacade.allContacts$;
  selectedContact$: Observable<Contact>= this.contactFacade.selectedContacts$;

  form: FormGroup;

  constructor(
    private contactFacade: ContactFacade,
    private formBuilder: FormBuilder) {
      this.contactFacade.mutations$.subscribe((_) => this.resetContact());
    }

  ngOnInit() {
    this.initForm();
    this.contactFacade.loadContacts();
    this.resetContact();
  };

  selectContact(contact: Contact) {
    this.contactFacade.selectContact(contact.id);
    this.form.patchValue(contact);
  };

  saveContact(contact: Contact) {
    this.contactFacade.saveContact(contact)
  };

  deleteContact(contact: Contact) {
    this.contactFacade.deleteContact(contact)
  };

  resetContact() {
    this.form.reset();
    this.selectContact(emptyContact)
  };

  private initForm(){
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      nationality: [''],
      natureOfRelationship: [''],
      threat: [null]
    })
  }
}
