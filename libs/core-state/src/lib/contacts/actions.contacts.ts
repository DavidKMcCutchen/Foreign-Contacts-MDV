import { createAction, props } from "@ngrx/store";
import { Contact } from "@foreign-contacts/api-interfaces";

// Select Entity

export const selectContact = createAction(
    '[CONTACT] Select Contact',
    props<{ contactId: string}>()
);

// Load All Entities

export const loadContacts = createAction(
    '[CONTACT] Load Contacts'
);

export const loadContactsSuccess = createAction(
    '[CONTACT] Load Contacts Success',
    props<{ contacts: Contact[]}>()
);

export const loadContactsFailed = createAction(
    '[CONTACT] Load Contacts Failed',
    props<{ error: any}>()
);

// Load Single Entity

export const loadContact = createAction(
'[CONTACT] Load Contact',
    props<{ contactId: string}>()
);

export const loadContactSuccess = createAction(
    '[CONTACT] Load Contact Success',
    props<{ contact: Contact}>()
);

export const loadContactFailed = createAction(
    '[CONTACT] Load Contact Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createContact = createAction(
    '[CONTACT] Create Contact',
    props<{ contact: Contact}>()
);

export const createContactSuccess = createAction(
    '[CONTACT] Create Contact Success',
    props<{ contact: Contact}>()
);

export const createContactFailed = createAction(
    '[CONTACT] Create Contact Failed',
    props<{ error: any }>()
);

// Load Update Entity

export const updateContact = createAction(
    '[CONTACT] Update Contact',
    props<{ contact: Contact}>()
);

export const updateContactSuccess = createAction(
    '[CONTACT] Update Contact Success',
    props<{ contact: Contact}>()
);

export const updateContactFailed = createAction(
    '[CONTACT] Update Contact Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteContact = createAction(
    '[CONTACT] Delete Contact',
    props<{ contact: Contact }>()
);

export const deleteContactSuccess = createAction(
    '[CONTACT] Delete Contact Success',
    props<{ contact: Contact }>()
);

export const deleteContactFailed = createAction(
    '[CONTACT] Delete Contact Failed',
    props<{ error: any }>()
);