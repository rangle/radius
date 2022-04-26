import * as React from 'react';
import DsTag from '../../../../../src/components/tag/tag';
import { Movie } from '../../../models/Movie';

import style from "./ListItem.module.css";

export interface ListItemProps {
  movie: Movie;
};

const ListItem = ({ movie }: ListItemProps) => {
  return <article className={style.container}>
    <img src={movie.image} className={style.img} />
    <div style={{ width: '100%' }}>
      <div className={style.content}>
        <p>{ movie.title }</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg width="16" height="22" fill="currentColor">
            <path
              d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
          </svg>
          &nbsp;&nbsp;
          <p>{ movie.starRating }</p>
        </div>
      </div>
      <div className={style.contentDetails}>
        <DsTag type='secondary' variant='solid' label={movie.rating}></DsTag>
        <p>{ movie.year }</p>
        <p>{ movie.genre }</p>
        <p>{ movie.runtime }</p>
      </div>
      <p className={style.txtCast}>{ movie.cast }</p>
    </div>
  </article>;
};

export default ListItem;