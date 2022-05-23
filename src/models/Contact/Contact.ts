import type ContactEmail from './ContactEmail';
import type ContactPhone from './ContactPhone';

interface Contact {
  id: string;
  name: string;
  emails: ContactEmail[];
  phones: ContactPhone[];
}

export default Contact;
