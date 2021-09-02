import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Card } from './card/Card';
import style from './Content.module.scss';
import { ShoppingCart } from './shoppingCart/ShoppingCart';
import { Search } from './search/Search';
import { Contacts } from './contacts/Contacts';

export const Content = () => {
  const [mas, setMas] = useState([]);

  const cat = useSelector(state => state.search.category);
  const search = useSelector(state => state.search.value);
  //   console.log(cat);

  const filterPosts = mas.filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  }); //функция "поиска", фильтрует массив "mas"
  //с помощью includes ищет совпадения в исходном массиве search
  //   console.log(filterPosts);
  const filterCategory = filterPosts.filter(item => {
    if (cat !== 0) return item.category === cat;
    else return item;
  }); //Фильтрация массива на соответствие категорий элементов
  //с категорией которая хранится в глобальном стейте
  useEffect(() => {
    axios.get('/bd.json').then(({ data }) => {
      setMas(data.shop_item);
    });
  }, [setMas]);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Route exact path="/">
          <Search />
          {filterCategory.map(item => {
            return (
              <div key={item.id}>
                <Card
                  category={item.category}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imgUrl={item.imgUrl}
                />
              </div>
            );
          })}
        </Route>

        <Route exact path="/shoppingcart">
          <ShoppingCart />
        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </div>
    </div>
  );
};
