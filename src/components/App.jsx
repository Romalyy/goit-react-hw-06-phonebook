
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import s from "./ContactList/contactList.module.css";

import { add, remove } from '../redux/contacts/contacts-slice';
import { setFilter } from '../redux/filter/filter-slice';
import { getContacts } from '../redux/contacts/contacts-selector';
import { getFilter } from '../redux/filter/filter-selector';

const App = () => {

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  function addContact(data) {

    const searchName = contacts
      .map((contact) => contact.name)
      .includes(data.name);

     if (searchName) {
      return alert(`${data.name} is already in contacts.`);
     }
    
    if (data.name.length === 0) {
      return alert("Fields must be filled!");
    }
    dispatch(add(data));
  }

  const removeContact = (id) => {
        dispatch(remove(id));
    }

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  const getVisibleContacts = () => {

    if (!filter) {
      return contacts;
    }

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  const visibleContacts = getVisibleContacts();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={s.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onRemoveContact={removeContact} />
    </div>
  );
};

export default App;
