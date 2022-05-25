import { lazy, ReactElement } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const Root = lazy(() => import('../pages/Root'));

const Contacts = lazy(() => import('../pages/Contacts'));

const ContactsCreate = lazy(() => import('../pages/ContactsCreate'));

const ContactsUpdate = lazy(() => import('../pages/ContactsUpdate'));

function AppRouter(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="contacts" element={<Contacts />}>
            <Route path="create" element={<ContactsCreate />} />
            <Route path=":contactId" element={<ContactsUpdate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
