import { Injectable } from '@angular/core';

import { IContact } from '../models/contact.models';
import { INITIAL_CONTACTS } from '../constants/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactList: IContact[] = INITIAL_CONTACTS.slice();

  public getContacts(): IContact[] {
    return this.contactList
      .slice()
      .sort((contA: IContact, contB: IContact) => {
        if (!contA.isFavorite && contB.isFavorite) {
          return 1;
        }

        if (contA.isFavorite && !contB.isFavorite) {
          return -1;
        }

        return 0;
      });
  }

  public addContact(newContact: IContact): void {
    this.contactList.push(newContact);
  }

  public deleteContact(contactId: number): void {
    this.contactList = this.contactList.filter(({ id }: IContact) => id !== contactId);
  }

  public toggleFavoriteMark(contactId: number): void {
    const contact: IContact = this.getContactById(contactId);

    if (!contact) {
      return;
    }

    contact.isFavorite = !contact.isFavorite;
  }

  private getContactById(contactId: number): IContact {
    return this.contactList.find(({ id }: IContact) => id === contactId);
  }
}
