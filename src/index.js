import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

window.chatOrganization = "ecko";
document.addEventListener('bonfireReady', function() {
  ReactDOM.render(
    React.createElement(
      window.BonfireAI.Chat,
      { organization: 'ecko' }
    ),
    document.getElementById('my-chat')
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
