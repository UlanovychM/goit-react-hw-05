import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { fetchReviews } from '../../services/filmApi';

const MovieReviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!movieId) return;
		const getData = async () => {
			try {
				setLoader(true);
				const data = await fetchReviews(movieId);
				setReviews(data);
			} catch (e) {
				setError(false);
			} finally {
				setLoader(false);
			}
		};

		return getData;
	}, [movieId]);

	return (
		<>
			{loader && <Loader />}
			{reviews && (
				<ul>
					{reviews.map(({ id, author, content }) => {
						<li key={id}>
							<p>
								Author: <span>{author}</span>
							</p>
							<p>{content}</p>
						</li>;
					})}
				</ul>
			)}
			{error && <ErrorMessage />}
			{!loader && !reviews.length && 'No Reviews'}
		</>
	);
};

export default MovieReviews;
