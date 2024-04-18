import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
	const location = useLocation();

	return (
		<ul className={css.list}>
			{movies.map(({ id, original_title }) => (
				<li key={id}>
					<Link className={css.link} to={`/movies/${id}`} state={location}>
						{original_title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default MovieList;

MovieList.propTypes = {
	movie: PropTypes.array,
};
