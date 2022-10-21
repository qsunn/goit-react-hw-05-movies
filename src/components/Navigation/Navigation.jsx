import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.Navigation}>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="movies"
            className={({ isActive }) => (isActive ? css.active : '')}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
