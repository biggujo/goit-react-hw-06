import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';

export default function ContactItem({
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

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
