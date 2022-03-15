import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './ServiceWorker';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';

// code for top of page button
// scroll to top when arrow is clicked 

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 10) {
      $('#myBtn').fadeIn();
  }else {
      $('#myBtn').fadeOut();
  }
});

$(document).ready(function() {
  $('#myBtn').click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0}, "slow")
      return false;
  });
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register();