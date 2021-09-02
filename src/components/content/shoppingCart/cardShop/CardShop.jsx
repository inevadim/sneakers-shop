import React from 'react';
import style from './CardShop.module.scss';
import { useDispatch } from 'react-redux';
import { decrementShopItems } from '../../../../redux/shoppingCartSlice';
import { incrementShopItems } from '../../../../redux/shoppingCartSlice';
import { removeShopItems } from '../../../../redux/shoppingCartSlice';
export const CardShop = ({ name, price, count, id, imgUrl }) => {
  const dispatch = useDispatch();

  const decrement = id => {
    dispatch(decrementShopItems(id));
  };

  const increment = id => {
    dispatch(incrementShopItems(id));
  };

  const deleteItem = id => {
    dispatch(removeShopItems(id));
  };
  return (
    <div className={style.cardShop}>
      <img src={imgUrl} alt="img" />
      <div className={style.wrapperInfo}>
        <span>{name}</span>
        <div className={style.countInfo}>
          <div>Колличество: {count}</div>{' '}
          <div className={style.buttonCount} onClick={() => increment({ id })}>
            +
          </div>
          <div className={style.buttonCount} onClick={() => decrement({ id })}>
            -
          </div>
        </div>
        Цена:{price * count} рублей
      </div>
      <span onClick={() => deleteItem({ id })}>&times;</span>
    </div>
  );
};
