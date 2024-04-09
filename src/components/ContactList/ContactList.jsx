import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice.js';

export default function ContactList() {
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (<ul>
    {getVisibleContacts().map(({
      id,
      name,
      number,
    }) => <li key={id}>
      <ContactItem id={id}
                   fullName={name}
                   number={number}
                   onDelete={() => dispatch(deleteContact(id))} />
    </li>)}
  </ul>);
}
