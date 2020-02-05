import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { render as reactSnapshotRender } from 'react-snapshot';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

declare global {
  interface Window {
    reactSnapshotRender: any;
  }
}

export const render = (domElement: any) => {
  if (
    navigator.userAgent.match(/Node\.js/i) &&
    window &&
    window.reactSnapshotRender
  ) {
    const sheet = new ServerStyleSheet();
    let html, styleTags;
    try {
      html = ReactDOMServer.renderToString(
        <StyleSheetManager sheet={sheet.instance}>
          <App />
        </StyleSheetManager>,
      );
      styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
    } catch (error) {
      // handle error
      console.error(error);
    } finally {
      sheet.seal();
      // Inject HTML and Styles into index.html
      domElement.innerHTML = html;
      const head = document.querySelector('head') as any;
      head.innerHTML = head.innerHTML + styleTags;
      window.reactSnapshotRender();
    }
  } else {
    ReactDOM.render(<App />, domElement);
  }
};

render(document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
