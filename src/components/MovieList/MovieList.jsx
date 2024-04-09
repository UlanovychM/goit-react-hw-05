import { Link, useLocation } from 'react-router-dom';

import css from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
	const location = useLocation();

	return (
		<ul>
			{movies.map(({ id, original_title }) => {
				<li key={id}>
					<Link className={css} to={`/movies/${id}`} state={location}>
						{original_title}
					</Link>
				</li>;
			})}
		</ul>
	);
};

export default MovieList;

Contact.propTypes = {
	movie: PropTypes.array,
};
