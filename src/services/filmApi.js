import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
	headers: {
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I1NTkxYzY3ZGYxNTc3NWFjZTc4Zjc5YzIxNTczZSIsInN1YiI6IjY2MGU0YTA5MTQ5NTY1MDE2M2JiNjI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uQLZzkFDldnz67NYtPeNzMoVIOav9GDGMiIhgGEw-k0',
		accept: 'application/json',
	},
	params: {
		language: 'en-US',
		include_adult: false,
	},
};

export const fetchTrendsMovie = async () => {
	const url = '/trending/movie/day';
	const newOptions = {
		...options,
		params: {
			...options.params,
		},
	};
	const response = await axios.get(url, newOptions);
	return response.data.results;
};

export const fetchSearchApi = async searchValue => {
	const url = '/search/movie';
	const newOptions = {
		...options,
		params: {
			...options.params,
			query: searchValue,
		},
	};

	const response = await axios.get(url, newOptions);
	return response.data.results;
};

export const fetchGetId = async id => {
	const url = `/movie/${id}`;

	const response = await axios.get(url, options);
	return response.data;
};

export const fetchCast = async id => {
	const url = `/movie/${id}/credits`;
	const response = await axios.get(url, options);
	return response.data.cast;
};

export const fetchReviews = async id => {
	const url = `movie/${id}/reviews`;
	const response = axios.get(url, options);
	return response.data.results;
};
