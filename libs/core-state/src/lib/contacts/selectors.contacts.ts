import { emptyContact } from "@foreign-contacts/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { contactAdapter, ContactState, CONTACT_FEATURE_KEY } from "./reducer.contacts";

export const getContactState = createFeatureSelector<ContactState>(CONTACT_FEATURE_KEY);

const { selectAll, selectEntities } = contactAdapter.getSelectors();

export const getContactsLoaded = createSelector(
    getContactState,
    (state: ContactState) => state.loaded
);

export const getContactError = createSelector(
    getContactState,
    (state: ContactState) => state.error
);

export const getAllContacts = createSelector(
    getContactState,
    (state: ContactState) => selectAll(state)
);

export const getContactEntities = createSelector(
    getContactState,
    (state: ContactState) => selectEntities(state)
);

export const getSelectedContactId = createSelector(
    getContactState,
    (state: ContactState) => state.selectedId
);

export const getSelectedContact = createSelector(
    getContactEntities,
    getSelectedContactId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyContact
);