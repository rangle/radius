// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '../src/styles/index.css';

import DsBox from '../src/components/box/box';
import DsButton from '../src/components/button/button';
import DsTag from '../src/components/tag/tag';

const App = () => {
  return (
    <div>
      <DsBox>
        <h1>My box</h1>
      </DsBox>
      <DsButton variant='primary' size='medium' label='Primary Medium Button' />
      <DsTag label='Primary Solid' variant='solid' type='primary'></DsTag>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
