import PropTypes from 'prop-types';

import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		const search = form.elements.search.value;
		if (search.trim() === '') {
			toast.error('Pleas enter search text');
		}
		onSubmit(search);
		form.reset();
	};

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				className={css.input}
				type='text'
				name='search'
				placeholder='Search movies'
			/>
			<button className={css.btn} type='submit'></button>
		</form>
	);
};

export default SearchBar;

SearchBar.propTypes = {
	onSubmit: PropTypes.func,
};
