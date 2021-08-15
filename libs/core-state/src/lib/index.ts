import { ActionReducerMap } from "@ngrx/store";
import * as fromContacts from './contacts/reducer.contacts';

export interface AppState {
    [fromContacts.CONTACT_FEATURE_KEY]: fromContacts.ContactState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromContacts.CONTACT_FEATURE_KEY]: fromContacts.contactReducer
};