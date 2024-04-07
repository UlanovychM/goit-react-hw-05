import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'path/to/pages/HomePage';
import NotFound from 'path/to/pages/NotFoundPage';
import MoviesPage from 'path/to/pages/MoviesPage';

import css from './App.module.css';
const buildLinkClass = ({ isActive }) => {
	return clsx(css.link, isActive && css.active);
};

function App() {
	const [movie, setMovie] = useState([]);

	return (
		<>
			<div className={css.container}>
				<nav className={css.nav}>
					<NavLink to='/' className={buildLinkClass}>
						Home
					</NavLink>
					<NavLink to='/products' className={buildLinkClass}>
						Movie
					</NavLink>
				</nav>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<MoviesPage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
