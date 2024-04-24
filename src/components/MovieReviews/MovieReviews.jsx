import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { fetchReviews } from '../../services/filmApi';
import { useParams } from 'react-router-dom';

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
				setError(true);
			} finally {
				setLoader(false);
			}
		};

		getData();
	}, [movieId]);

	return (
		<>
			{loader && <Loader />}
			{reviews && (
				<ul>
					{reviews.map(({ id, author, content }) => (
						<li key={id}>
							<p>
								Author: <span>{author}</span>
							</p>
							<p>{content}</p>
						</li>
					))}
				</ul>
			)}
			{error && <ErrorMessage />}
			{!loader && !reviews.length && 'No Reviews'}
		</>
	);
};

export default MovieReviews;
