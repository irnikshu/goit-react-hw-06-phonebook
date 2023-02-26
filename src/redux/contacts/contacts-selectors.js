export const getAllContacts = store => store.contacts;

export const getVisibleContact = ({ contacts, filter }) => {
     if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
}