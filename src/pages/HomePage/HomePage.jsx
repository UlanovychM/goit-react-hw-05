import { useEffect, useState } from 'react';
import { fetchTrendsMovie } from '../../services/filmApi';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import css from './HomePage.module.css';

const HomePage = () => {
	const [movies, setMovies] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				setLoader(true);
				const data = await fetchTrendsMovie();
				setMovies(data);
			} catch (e) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};
		getData();
	}, []);

	return (
		<div>
			<h1>Trends today</h1>
			{loader && <Loader />}
			<MovieList movies={movies} />
			{error && <ErrorMessage />}
		</div>
	);
};

export default HomePage;
