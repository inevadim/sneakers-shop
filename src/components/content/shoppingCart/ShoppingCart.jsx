import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CardShop } from './cardShop/CardShop';
import style from './ShoppingCart.module.scss';

export const ShoppingCart = () => {
  const shopState = useSelector(state => state.shoppingCart.shopItems);

  useEffect(() => {
    localStorage.setItem('localShopState', JSON.stringify(shopState));
  }, [shopState]);

  let totalPrice = 0;
  shopState.forEach(e => {
    return (totalPrice = totalPrice + e.count * e.price);
  });
  //   console.log(shopState);

  return (
    <div className={style.shoppingCart}>
      {shopState.length < 1 ? (
        <div>Корзина пуста =(</div>
      ) : (
        <div className={style.wrapperShopItems}>
          {shopState.map(item => {
            return (
              <div key={item.id}>
                <CardShop
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  count={item.count}
                  imgUrl={item.imgUrl}
                />
              </div>
            );
          })}
        </div>
      )}
      <div>
        <div className={totalPrice > 0 ? style.totalPrice : style.unTotalPrice}>
          Итоговая цена: {totalPrice} рублей
        </div>
        <div className={totalPrice > 0 ? style.placeAnOrder : style.unPlaceAnOrder}>
          Оформить заказ
        </div>
      </div>
    </div>
  );
};
