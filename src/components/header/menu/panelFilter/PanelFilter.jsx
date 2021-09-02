import React from 'react';
import style from './PanelFilter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../../../redux/searchSlice';
import { visible } from '../../../../redux/searchSlice';
import { NavLink } from 'react-router-dom';
export const PanelFilter = () => {
  const active = useSelector(state => state.search.visibleCatalog);
  const dispatch = useDispatch();
  const change = cat => {
    dispatch(changeCategory(cat));
  };

  const activeCatalog = stateActive => {
    dispatch(visible(stateActive));
  };
  // console.log(visible);
  return (
    <div
      onMouseMove={() => activeCatalog(true)}
      onMouseOut={() => activeCatalog(false)}
      className={active ? style.panelFilter : style.unPanelFilter}>
      <NavLink to="/">
        <div className={style.item} onClick={() => change(0)}>
          Все кросовки
        </div>
      </NavLink>
      <NavLink to="/">
        <div className={style.item} onClick={() => change(1)}>
          <img src="/assets/img/header/catalog/nike.png" alt="nike" />
        </div>
      </NavLink>
      <NavLink to="/">
        <div className={style.item} onClick={() => change(2)}>
          <img src="/assets/img/header/catalog/puma.png" alt="puma" />
        </div>
      </NavLink>
      <NavLink to="/">
        {' '}
        <div className={style.item} onClick={() => change(3)}>
          <img src="/assets/img/header/catalog/adidas.png" alt="adidas" />
        </div>
      </NavLink>
    </div>
  );
};
