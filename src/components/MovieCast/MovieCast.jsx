import { useEffect, useState } from 'react';
import { fetchCast } from '../../services/filmApi';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieCast.module.css';

const MovieCast = () => {
	const [casts, setCasts] = useState([]);
	const { movieId } = useParams();
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);

	const defaultImg =
		'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg';

	useEffect(() => {
		if (!movieId) return;

		const getData = async () => {
			try {
				setLoader(true);
				const data = await fetchCast(movieId);
				setCasts(data);
			} catch (e) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};

		getData();
	}, [movieId]);

	return (
		<div>
			{loader && <Loader />}
			{casts && (
				<ul>
					{casts.map(({ id, character, name, profile_path }) => (
						<li key={id}>
							<div>
								<img
									src={
										profile_path
											? `https://image.tmdb.org/t/p/w500/${profile_path}`
											: defaultImg
									}
									alt='img'
									width={250}
								/>
							</div>
							<div>
								<p>{name}</p>
								<p>
									Character: <span>{character}</span>
								</p>
							</div>
						</li>
					))}
				</ul>
			)}
			{error && <ErrorMessage />}
		</div>
	);
};

export default MovieCast;
