import type ContactPhoneType from './ContactPhoneType';

interface ContactPhone {
  id: string;
  type: ContactPhoneType;
  number: string;
}

export default ContactPhone;
