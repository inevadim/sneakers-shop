import React, { useState, useEffect } from 'react';
import style from './Search.module.scss';
import { searchPost } from './../../../redux/searchSlice';
import { useDispatch } from 'react-redux';

export const Search = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchPost(text));
  }, [text, dispatch]);
  return (
    <div className={style.search}>
      <input
        value={text}
        type="text"
        placeholder="поиск..."
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
};
