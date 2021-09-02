import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './Menu.module.scss';
import { PanelFilter } from './panelFilter/PanelFilter';
import { visible } from '../../../redux/searchSlice';

export const Menu = () => {
  const dispatch = useDispatch();

  const activeCatalog = stateActive => {
    dispatch(visible(stateActive));
  };

  const shopState = useSelector(state => state.shoppingCart.shopItems);
  return (
    <div className={style.menu}>
      <NavLink to="/">
        <div className={style.itemMenu}>Главная</div>
      </NavLink>
      <div
        onMouseEnter={() => activeCatalog(true)}
        onMouseOut={() => activeCatalog(false)}
        className={style.itemMenu}>
        Каталог
      </div>{' '}
      <PanelFilter />
      <NavLink to="/contacts">
        {' '}
        <div className={style.itemMenu}>Контакты</div>
      </NavLink>
      <div className={style.itemMenu}>
        <NavLink to="/shoppingcart">
          <img src="/assets/img/header/cart.svg" alt="shoppingCart" />
          <span>{shopState.length}</span>
        </NavLink>
      </div>
    </div>
  );
};
