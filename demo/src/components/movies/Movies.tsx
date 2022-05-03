import * as React from 'react';
import * as style from './Movies.module.css';
import DsButton from '../../../../src/components/button/button';
import { Movie } from '../../models/Movie';
import ListItem from './ListItem/ListItem';

export interface MoviesProps {
  movies: Movie[];
}

const Movies = ({ movies }: MoviesProps) => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <DsButton variant="primary" size="small">
          New Releases
        </DsButton>
        &nbsp;&nbsp;
        <DsButton variant="secondary" size="small">
          Top Rated
        </DsButton>
        &nbsp;&nbsp;
        <DsButton variant="secondary" size="small">
          Editor&apos;s Pick
        </DsButton>
      </div>
      <div>
        {movies.map((m: Movie, index: number) => (
          <ListItem key={index} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
