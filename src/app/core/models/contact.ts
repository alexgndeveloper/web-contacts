import { Address } from './address';

export interface Contact {
  _id: string;
  name: string;
  surname: string;
  phone: string;
  cellphone: string;
  email: string;
  address: Address[];
}
