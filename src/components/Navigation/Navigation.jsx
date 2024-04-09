import PropTypes from 'prop-types';

import css from './Contact.module.css';

const Contact = ({ data: { id, name, number }, onDelete }) => {
	return (
		<>
			<div className={css.container}>
				<p className={css.name}>{name}</p>
				<p className={css.number}>{number}</p>
				<button className={css.btn} onClick={() => onDelete(id)}>
					Delete
				</button>
			</div>
		</>
	);
};

export default Contact;

Contact.propTypes = {
	data: PropTypes.object,
	onDelete: PropTypes.func,
};
