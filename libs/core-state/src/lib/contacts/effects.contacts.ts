import { Injectable } from "@angular/core";
import { Contact } from "@foreign-contacts/api-interfaces";
import { createEffect, Actions, ofType  } from "@ngrx/effects";
import { ForeignContactsService } from "@foreign-contacts/core-data";
import * as ContactActions from './actions.contacts';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class ContactEffects {
  loadContact$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ContactActions.loadContact),
    fetch({
      run: (action) =>
       this.contactsService
        .find(action.contactId)
        .pipe(
          map((contact: Contact) => ContactActions.loadContactSuccess({ contact }))
        ),
      onError: (action, error) => ContactActions.loadContactFailed({ error })
    })
  ) )

  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.loadContacts), // filter((action) => action.type === ContactActions.loadContacts.type)
      fetch({
        run: () =>
          this.contactsService
            .all()
            .pipe(
              map((contacts: Contact[]) =>
                ContactActions.loadContactsSuccess({ contacts })
              )
            ),
        onError: (action, error) => ContactActions.loadContactsFailed({ error }),
      })
    )
  );

  updateContact$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ContactActions.updateContact),
    pessimisticUpdate({
      run: (action) =>
      this.contactsService
      .update(action.contact)
      .pipe(
        map((contact: Contact) => ContactActions.updateContactSuccess({ contact })
        )
      ),
    onError: (action, error) => ContactActions.updateContactFailed({ error })  
    })
  ) )

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.deleteContact),
      pessimisticUpdate({
        run: (action) =>
        this.contactsService
        .delete(action.contact)
        .pipe(
          map(() => ContactActions.deleteContactSuccess({ contact: action.contact })
          )
        ),
      onError: (action, error) => ContactActions.deleteContactFailed({ error })  
      })
    )
    )

    createContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.createContact),
      pessimisticUpdate({
        run: (action) =>
        this.contactsService
        .create(action.contact)
        .pipe(
          map((contact: Contact) => ContactActions.createContactSuccess({ contact })
          )
        ),
      onError: (action, error) => ContactActions.createContactFailed({ error })  
      })
    ))
  

constructor(private actions$: Actions, private contactsService: ForeignContactsService) {}
}