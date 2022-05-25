import useTask from '../hooks/useTask';
import { fetchContactList } from '../services/contact';

function Contacts() {
  const { error, result, loading } = useTask(fetchContactList);

  if (loading) {
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
