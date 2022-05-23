import type ContactPhone from './ContactPhone';

interface Contact {
  id: string;
  name: string;
  phones: ContactPhone[];
}

export default Contact;
