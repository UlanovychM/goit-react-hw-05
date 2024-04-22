import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchSearchApi } from '../../services/filmApi';
import { useSearchParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SearchBar from '../../components/SearchBar/SearchBar';

const MoviesPage = () => {
	const [movies, setMovies] = useState([]);
	const [params, setParams] = useSearchParams();
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);

	const searchValue = params.get('query') ?? '';

	useEffect(() => {
		const getData = async () => {
			try {
				setLoader(true);
				const data = await fetchSearchApi(searchValue);
				setMovies(data);
			} catch (e) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};
		getData();
	}, []);

	const handleSubmit = value => {
		setValue(value);
		params.set('query', value);
		setParams(params);
	};

	return (
		<div>
			{loader && <Loader />}
			<SearchBar onSubmit={handleSubmit} />
			{error && <ErrorMessage />}
			{movies && <MovieList movies={movies} />}
		</div>
	);
};

export default MoviesPage;
