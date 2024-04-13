import { NavLink } from 'react-router-dom';
import css from './Contact.module.css';
import clsx from 'clsx';

const Navigation = ({ data: { id, name, number }, onDelete }) => {
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
