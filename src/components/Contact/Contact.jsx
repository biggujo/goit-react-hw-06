import PropTypes from 'prop-types';
import { Button } from './Contact.styled';

export default function Contact({
  id,
  fullName,
  number,
  onDelete,
}) {
  return (<div>
    <p>{fullName}: {number} <Button type='button'
                                    onClick={() => onDelete(id)}>Delete</Button>
    </p>

  </div>);
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
