import { Injectable } from "@angular/core";
import { Contact } from "@foreign-contacts/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as ContactActions from './actions.contacts';
import * as ContactSelectors from './selectors.contacts';
import * as fromContacts from './reducer.contacts';

@Injectable({
    providedIn: 'root',
})

export class ContactFacade {
    allContacts$ = this.store.pipe(
        map((state) => ContactSelectors.getAllContacts(state)),
    )
    selectedContacts$ = this.store.pipe(select(ContactSelectors.getSelectedContact));
    loaded$ = this.store.pipe(select(ContactSelectors.getContactsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === ContactActions.createContact({} as any) .type ||
        action.type === ContactActions.createContact({} as any) .type ||
        action.type === ContactActions.createContact({} as any) .type 
        ),
    )

    selectContact(contactId: string) {
        this.dispatch(ContactActions.selectContact({ contactId }))
    };
    
    loadContacts() {
        this.dispatch(ContactActions.loadContacts())
    };

    loadContact(contactId: string) {
        this.dispatch(ContactActions.loadContact({ contactId }))
    };

    saveContact(contact: Contact) {
        contact.id ? this.updateContact(contact) : this.createContact(contact)
    };

    createContact(contact: Contact) {
        this.dispatch(ContactActions.createContact({ contact }))
    };

    updateContact(contact: Contact) {
        this.dispatch(ContactActions.updateContact({ contact }))
    };

    deleteContact(contact: Contact) {
        this.dispatch(ContactActions.deleteContact({ contact }))
    };

    dispatch(action: Action) {
        this.store.dispatch(action)
    };

    constructor(
        private store: Store<fromContacts.ContactPartialState>,
        private actions$: ActionsSubject
    ) {}
}