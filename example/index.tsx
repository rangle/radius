import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import './index.css';
import App from './App';

const Main = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
