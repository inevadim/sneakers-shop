import { NavLink } from 'react-router-dom';
import style from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={style.wrapLogo}>
      <NavLink to="/">
        <div className={style.logo}>
          <img src="/assets/img/header/logo.png" alt="logo" />
          SNEAKERS-SHOP.BY
        </div>
      </NavLink>
    </div>
  );
};
