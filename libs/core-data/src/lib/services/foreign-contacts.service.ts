import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Contact } from "@foreign-contacts/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ForeignContactsService {
  model = 'contacts';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Contact[]>(this.getUrl())
  };

  find(contactId: string) {
    return this.httpClient.get<Contact>(this.getUrlById(contactId))
  };

  create(contacts: Contact) {
    return this.httpClient.post<Contact>(this.getUrl(), contacts)
  };

  update(contacts: Contact) {
    return this.httpClient.patch<Contact>(this.getUrlById(contacts.id), contacts)
  };

  delete({ id }: Contact) {
    return this.httpClient.delete<Contact>(this.getUrlById(id))
  };

  getUrl() {
    return `${BASE_URL}${this.model}`
  };

  getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}
