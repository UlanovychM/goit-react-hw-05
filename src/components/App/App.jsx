import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from 'react-hot-toast';

import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
	import('../../pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFound = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

import css from './App.module.css';

function App() {
	return (
		<div className={css.container}>
			<Navigation className={css.nav} />
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/movies' element={<MoviesPage />} />
					<Route path='/movies/:movieId' element={<MovieDetailsPage />}>
						<Route path='reviews' element={<MovieReviews />} />
						<Route path='cast' element={<MovieCast />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
			<Toaster />
		</div>
	);
}

export default App;
