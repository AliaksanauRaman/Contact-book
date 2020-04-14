import { IContact } from '../models/contact.models';

export const INITIAL_CONTACTS: IContact[] = [
  {
    id: 1,
    firstName: 'Контакт',
    lastName: 'Первый',
    patronymic: 'В телефоне',
    phoneNumber: '+7(111)111-11-11',
    isFavorite: false,
  },
  {
    id: 2,
    firstName: 'Контакт',
    lastName: 'Второй',
    patronymic: 'В телефоне',
    phoneNumber: '+7(222)222-22-22',
    isFavorite: false,
  },
];
