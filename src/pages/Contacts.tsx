import { useAsyncTask } from 'react-async-task';
import { fetchContactList } from '../services/contact';

function Contacts() {
  const { error, result, pending } = useAsyncTask(fetchContactList);

  if (pending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {result?.map((contact) => (
        <li>{contact.name}</li>
      ))}
    </ul>
  );
}

export default Contacts;
