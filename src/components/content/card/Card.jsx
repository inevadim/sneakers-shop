import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Card.module.scss';
import { addShopItems } from './../../../redux/shoppingCartSlice';

export const Card = ({ name, price, id, category, imgUrl }) => {
  const dispatch = useDispatch();

  const addItem = (nameItem, priceItem, idItem, categoryItem, imgUrlITem) => {
    const item = {
      category: categoryItem,
      count: 1,
      id: idItem,
      name: nameItem,
      price: priceItem,
      imgUrl: imgUrlITem,
    };
    dispatch(addShopItems(item));
  };

  return (
    <div className={style.card}>
      <div className={style.wrapImg}>
        <img src={imgUrl} alt="img"></img>
      </div>
      <div className={style.name}>{name}</div>
      <div className={style.price}>{price} рублей</div>
      <div className={style.button} onClick={() => addItem(name, price, id, category, imgUrl)}>
        Добавить
      </div>

      {/* id: {id}
      <br />
      name: {name}
      <br />
      Price: {price}
      <br />
      category: {category}
      <button onClick={() => addItem(name, price, id, category)}>+</button> */}
    </div>
  );
};
