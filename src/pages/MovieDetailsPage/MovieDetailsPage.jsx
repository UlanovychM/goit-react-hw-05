import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './ContactList.module.css';
import Contact from '../components/Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
	return (
		<>
			<ul className={css.list}>
				{contacts.map(contact => (
					<li className={css.item} key={contact.id}>
						<Contact data={contact} onDelete={onDelete} />
					</li>
				))}
			</ul>
		</>
	);
};

export default ContactList;

ContactList.propTypes = {
	contacts: PropTypes.array,
	onDelete: PropTypes.func,
};
