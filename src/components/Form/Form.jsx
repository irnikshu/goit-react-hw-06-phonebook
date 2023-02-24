import { useState } from 'react';

import styles from '../app.module.scss';
import initialState from './initialState';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setState({ ...initialState });
  };

  const { name, number } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.block}>
      <label>
        <h3 className={styles.blockTitle}>Name</h3>

        <input
          value={name}
          onChange={handleChange}
          className={styles.inp}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <h3 className={styles.blockTitle}>Number</h3>
        <input
          value={number}
          onChange={handleChange}
          className={styles.inp}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={styles.btn}>
        Add Contact
      </button>
    </form>
  );
};
export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
