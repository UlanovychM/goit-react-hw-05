import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import css from './Navigation.module.css';

const Navigation = () => {
	return (
		<header>
			<nav>
				<NavLink
					className={({ isActivate }) => {
						return clsx(css.link, isActivate && css.isActivate);
					}}
					to='/'
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActivate }) => {
						return clsx(css.link, isActivate && css.isActivate);
					}}
					to='/movies'
				>
					Movies
				</NavLink>
			</nav>
		</header>
	);
};

export default Navigation;
