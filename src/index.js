import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Pages/NavBar.css';
import App from './Pages/Home';
import NavagationComponent from './Pages/NavBar';
import NameHeader from './Pages/Header';
import * as serviceWorker from './serviceWorker';
import Resume from './Pages/Resume';


ReactDOM.render(
    <div>
        <NavagationComponent />
        <NameHeader />
        <App />
        <Resume />
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
