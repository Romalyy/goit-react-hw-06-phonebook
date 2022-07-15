import PropTypes from 'prop-types';
import { useState, memo } from 'react';
import s from './contactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState(
    {
    name: '',
    number: '',
    }
  );

  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ ...state });

    setState({
      name: '',
      number: '',
    });
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          value={name}
          type="text"
          name="name"
          onChange={handleChange}
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          value={number}
          type="tel"
          name="number"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(ContactForm);
