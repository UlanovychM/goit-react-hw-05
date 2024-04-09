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
	const [error, setError] = useEffect(false);

	const defaultImg =
		'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftinypng.com%2F&psig=AOvVaw0k5rakUhG8AltV60G9ih5F&ust=1712604686907000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODq_-frsIUDFQAAAAAdAAAAABAJ';

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
			{cast && (
				<ul>
					{casts.map(({ id, character, name, profile_path }) => {
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
						</li>;
					})}
				</ul>
			)}
			{error && <ErrorMessage />}
		</div>
	);
};

export default MovieCast;
