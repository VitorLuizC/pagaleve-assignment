import { act, render, screen } from '@testing-library/react';
import Router from './Router';
import Root from '../pages/Root';
import Contacts from '../pages/Contacts';
import ContactsCreate from '../pages/ContactsCreate';
import ContactsUpdate from '../pages/ContactsUpdate';

jest.mock('../pages/Root');
jest.mock('../pages/Contacts');
jest.mock('../pages/ContactsCreate');
jest.mock('../pages/ContactsUpdate');

describe('Router | component | integration tests', () => {
  beforeEach(() => {
    (Root as jest.Mock).mockReturnValueOnce('Root');
    (Contacts as jest.Mock).mockReturnValueOnce('Contacts');
    (ContactsCreate as jest.Mock).mockReturnValueOnce('ContactsCreate');
    (ContactsUpdate as jest.Mock).mockReturnValueOnce('ContactsUpdate');
  });

  it('renders pages respectively to current URL path', async () => {
    const renderRoute = (route: string): Promise<void> => {
      window.history.pushState({}, 'Test page', route);
    
      render(<Router />);
    
      // Awaiting idle is required because we're rendering pages using 'lazy'.
      return act(() => Promise.resolve(undefined as void));
    }

    await renderRoute('/');

    expect(screen.getByText('Root')).toBeInTheDocument();

    await renderRoute('/contacts');

    expect(screen.getByText('Contacts')).toBeInTheDocument();

    await renderRoute('/contacts/create');

    expect(screen.getByText('ContactsCreate')).toBeInTheDocument();

    await renderRoute('/contacts/1');

    expect(screen.getByText('ContactsUpdate')).toBeInTheDocument();
  });
});
