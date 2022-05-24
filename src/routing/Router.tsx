import { ReactElement } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

const Root = () => null;

const Contacts = () => null;

const ContactsCreate = () => null;

const ContactsUpdate = () => null;

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
