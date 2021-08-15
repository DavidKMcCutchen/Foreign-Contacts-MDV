import { Contact } from "@foreign-contacts/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as ContactActions from './actions.contacts';

export const CONTACT_FEATURE_KEY = 'contacts';

export interface ContactState extends EntityState<Contact> {
    selectedId?: string | number;
    loaded: boolean;
    error?: any | null;
};

export interface ContactPartialState {
    readonly [CONTACT_FEATURE_KEY]: ContactState
};

export const contactAdapter: EntityAdapter<Contact> = createEntityAdapter<Contact>();

export const initialContactState: ContactState = contactAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailure = (state, { error }): ContactState => ({ ...state, error });

const onDispatch = (state, action): ContactState => ({
    ...state,
    loaded: false,
    error: null
});

const _contactReducer = createReducer(
    initialContactState,
    on(
        ContactActions.loadContactFailed,
        ContactActions.loadContactsFailed,
        ContactActions.createContactFailed,
        ContactActions.updateContactFailed,
        ContactActions.deleteContactFailed,
    onFailure
    ),
    on(
    ContactActions.loadContact,
    ContactActions.loadContact,
    ContactActions.loadContact,
    ContactActions.loadContact,
    ContactActions.loadContact,
    onDispatch
    ),
    on(
        ContactActions.loadContactSuccess, (state, {contact}) =>
        contactAdapter.upsertOne(contact, {...state, loaded: true})
    ),
    on(
        ContactActions.selectContact, (state, {contactId}) =>({
        ...state, 
        selectedId: contactId
    })
    ),
    on(
        ContactActions.loadContactsSuccess, (state, { contacts }) => 
        contactAdapter.setAll(contacts, {...state, loaded: true})
    ),
    on(
        ContactActions.deleteContactSuccess, (state, { contact }) =>
        contactAdapter.removeOne(contact.id, {...state, loaded: true })
    ),
    on(
        ContactActions.updateContactSuccess, (state, { contact }) =>
        contactAdapter.updateOne(
            {id: contact.id, changes: contact},
            {...state, loaded: true }
        )
    ),
    on(
        ContactActions.createContactSuccess, (state, { contact }) =>
        contactAdapter.addOne(contact, {...state, loaded: true })
    ),

)

export function contactReducer(
    state: ContactState | undefined,
    action: Action
) {
    return _contactReducer(state, action)
}