import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from './Form/Form';
import ContactsList from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

import styles from './app.module.scss';
import '../shared/Styles/styles.scss';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    return contacts?.length ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('my-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const checkName = newContact.name.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === checkName)
      ? alert(name + ' is already in contacts')
      : setContacts(prevContacts => {
          return [newContact, ...prevContacts];
        });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getVisibleContact = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContact = getVisibleContact();
  const isBooks = Boolean(visibleContact.length);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Phonebook</h2>
      <Form onSubmit={addContact} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      {isBooks && (
        <ContactsList contact={visibleContact} deleteContact={deleteContact} />
      )}
      {!isBooks && <p>No books in list</p>}
    </div>
  );
};
export default App;

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  addContact: PropTypes.func,
  deleteContact: PropTypes.func,
  changeFilter: PropTypes.func,
  getVisibleContact: PropTypes.func,
};
