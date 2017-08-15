import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'script!jquery';
import 'script!what-input';
import 'script!foundation-sites';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
