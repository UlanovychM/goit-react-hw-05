import { useEffect, useState, useRef, Suspense } from 'react';
import { fetchGetId } from '../../services/filmApi';
import {
	useParams,
	NavLink,
	Link,
	Outlet,
	useLocation,
} from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const [movie, setMovies] = useState(null);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);

	const location = useLocation();
	const linkRef = useRef(location.state ?? '/');

	useEffect(() => {
		const getData = async () => {
			try {
				setLoader(true);
				const data = await fetchGetId(movieId);
				setMovies(data);
			} catch (e) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};
		getData();
	}, [movieId]);

	const defaultImg =
		'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftinypng.com%2F&psig=AOvVaw0k5rakUhG8AltV60G9ih5F&ust=1712604686907000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODq_-frsIUDFQAAAAAdAAAAABAJ';

	return (
		<div>
			<Link to={linkRef.current}>
				<p>Go back</p>
			</Link>
			{loader && <Loader />}

			{movie && (
				<div>
					<img
						src={
							movie.poster_path
								? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
								: defaultImg
						}
						width={250}
						alt='poster'
					/>
					<div>
						<h2>{movie.title}</h2>
						<p>User score: {Math.round(movie.vote_average * 10)}%</p>
						<h3>Overview</h3>
						<p>{movie.overview}</p>
						<h3 className={css.title}>Genres</h3>
						<ul className={css.genreList}>
							{movie.genres.map(genre => (
								<li className={css.genre} key={genre.id}>
									{genre.name}
								</li>
							))}
						</ul>
					</div>
					<div className={css.addInfoContainer}>
						<h3 className={css.addInfoTitle}>Additional information</h3>
						<ul className={css.navList}>
							<li>
								<NavLink
									className={({ isActive }) => {
										return clsx(css.link, isActive && css.isActive);
									}}
									to='cast'
								>
									Cast
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) => {
										return clsx(css.link, isActive && css.isActive);
									}}
									to='reviews'
								>
									Reviews
								</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<Suspense fallback={<Loader />}>
							<Outlet />
						</Suspense>
					</div>
				</div>
			)}
			{error && <ErrorMessage />}
		</div>
	);
};

export default MovieDetailsPage;
