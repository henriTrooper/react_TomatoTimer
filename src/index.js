import React from 'react'; // propre à react
import ReactDOM from 'react-dom'; // propre à react
import './index.css';
import App from './App'; // composant
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// Appel du Composant global <APP>
ReactDOM.render(<App />, document.getElementById('root')); // permet d'afficher au niveau de id root le component app
serviceWorker.unregister();
