import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import summernote css
import 'react-summernote/dist/react-summernote.css';

// import bootstrap moduels for jQuery
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
