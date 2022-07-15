import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import s from './contactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  const elements = contacts.map(({ id, name, number }) => (
    <ContactItem
      key={id}
      id={id}
      name={name}
      number={number}
      onClick={() => onRemoveContact(id)}
    />
  ));
  return (
    <div>
      <ul className={s.list}>{elements}</ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;