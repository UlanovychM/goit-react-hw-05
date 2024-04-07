import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
	headers: {
		Authorization:
			'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2I1NTkxYzY3ZGYxNTc3NWFjZTc4Zjc5YzIxNTczZSIsInN1YiI6IjY2MGU0YTA5MTQ5NTY1MDE2M2JiNjI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uQLZzkFDldnz67NYtPeNzMoVIOav9GDGMiIhgGEw-k0',
		accept: 'application/json',
	},
	params: {
		language: 'en-US',
	},
};

export const fetchTrendsMovie = async () => {
	const url = '/trending/movie/day';
	const newOptions = {
		...options,
		params: {
			...options.params,
			include_adult: false,
		},
	};
	const response = await axios.get(url, newOptions);
	return response.data.result;
};

export const fetchSearchApi = async searchValue => {
	const url = '/search/movie';
};
