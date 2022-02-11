import * as React from 'react';
import DsButton from '../../src/components/button/button';

import Editor from './components/movies/Editor/Editor';
import Movies from './components/movies/Movies';
import { Movie } from './models/Movie';

const MOVIES: Movie[] = [{
  image: 'https://tailwindcss.com/_next/static/media/prognosis-negative.a3c55fb717747ce6804f7375a2147a76.jpg',
  title: 'Prognosis Negative',
  starRating: '2.66',
  rating: 'PG-13',
  year: '2021',
  genre: 'Comedy',
  runtime: '1h 46m',
  cast: 'Simon Pegg, Zach Galifianakis'
}, {
  image: 'https://tailwindcss.com/_next/static/media/rochelle-rochelle.3dafce5e8fef150b65e158fc34a74769.jpg',
  title: 'Rochelle, Rochelle',
  starRating: '3.25',
  rating: 'R',
  year: '2021',
  genre: 'Romance',
  runtime: '1h 46m',
  cast: 'Emilia Clarke'
}, {
  image: 'https://tailwindcss.com/_next/static/media/death-blow.8f06f1c002165401a49a4c6ec95e6500.jpg',
  title: 'Death Blow',
  starRating: '4.95',
  rating: '18A',
  year: '2020',
  genre: 'Action',
  runtime: '2h 46m',
  cast: 'Idris Elba, John Cena, Thandiwe Newton'
}];

const THEME_DEFAULT = [{
  variable: '--ds-color--ui-primary',
  value: '#262626'
}, {
  variable: '--ds-color--text-inverse',
  value: '#FFFFFF'
}, {
  variable: '--ds-color--text-primary',
  value: '#262626'
}, {
  variable: '--ds-color--ui-background-1',
  value: '#dee2e6'
}, {
  variable: '--ds-color--ui-background-2',
  value: '#ced4da'
}, {
  variable: '--ds-color-brand-secondary-main',
  value: '#262626'
}, {
  variable: '--ds-border-radius-m',
  value: '8px'
}];

const THEME_1 = [{
  variable: '--ds-color--ui-primary',
  value: '#e63946'
}, {
  variable: '--ds-color--text-inverse',
  value: '#f1faee'
}, {
  variable: '--ds-color--text-primary',
  value: '#457b9d'
}, {
  variable: '--ds-color--ui-background-1',
  value: '#f1faee'
}, {
  variable: '--ds-color--ui-background-2',
  value: '#a8dadc'
}, {
  variable: '--ds-color-brand-secondary-main',
  value: '#0466c8'
}, {
  variable: '--ds-border-radius-m',
  value: '25px'
}];


const THEME_2 = [{
  variable: '--ds-color--ui-primary',
  value: '#a9005b'
}, {
  variable: '--ds-color-brand-primary-main',
  value: '#a9005b'
}, {
  variable: '--ds-color--text-inverse',
  value: '#ffaffb'
}, {
  variable: '--ds-color--text-primary',
  value: '#a9005b'
}, {
  variable: '--ds-color--ui-background-1',
  value: '#acf8cb'
}, {
  variable: '--ds-color--ui-background-2',
  value: '#ffaffb'
}, {
  variable: '--ds-color-brand-secondary-main',
  value: '#acf8cb'
}, {
  variable: '--ds-border-radius-m',
  value: '0px'
}];

const App = () => {
  const onThemeClick = (index: number) => {
    let tokens = THEME_DEFAULT;
    if (index === 1) {
      tokens = THEME_1;
    } else if (index === 2) {
      tokens = THEME_2;
    }
    tokens.forEach((token) => {
      document.documentElement.style
        .setProperty(token.variable, token.value);
    })
  };

  return (
    <>
      <div style={{display: 'flex'}}>
        <DsButton onClick={() => onThemeClick(0)} label='Reset Theme One' />
        &nbsp;&nbsp;
        <DsButton onClick={() => onThemeClick(1)} label='Apply Theme One' />
        &nbsp;&nbsp;
        <DsButton onClick={() => onThemeClick(2)} label='Apply Theme Two' />
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <Movies movies={MOVIES} />
        </div>
        <div>
          <Editor />
        </div>
      </div>
    </>
  );
};

export default App;