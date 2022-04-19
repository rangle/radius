import * as React from 'react';

import style from "./Movies.module.css";
import DsButton from '../../../../src/components/button/button';
import { Movie } from '../../models/Movie';
import ListItem from './ListItem/ListItem';

export interface MoviesProps {
  movies: Movie[];
};

const Movies = ({ movies }: MoviesProps) => {
  return <div className={style.container}>
    <div className={style.nav}>
      <DsButton label='New Releases' />
      &nbsp;&nbsp;
      <DsButton variant='secondary' label='Top Rated' />
      &nbsp;&nbsp;
      <DsButton variant='secondary' label="Editor's Pick" />
    </div>
    <div>
      {movies.map((m: Movie, index: number) => <ListItem key={index} movie={m} />)}
    </div>
</div >;
};

export default Movies;

// <div className="divide-y divide-slate-100">
    //   <Nav>
    //     <NavItem href="/new" isActive>New Releases</NavItem>
    //     <NavItem href="/top">Top Rated</NavItem>
    //     <NavItem href="/picks">Vincent’s Picks</NavItem>
    //   </Nav>
    //   <List>
    //     {movies.map((movie) => (
    //       <ListItem key={movie.id} movie={movie} />
    //     ))}
    //   </List>
    // </div>