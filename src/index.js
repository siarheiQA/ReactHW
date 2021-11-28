import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VideoTag from './VideoTag';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <VideoTag text="Regular text" color="black" size={14} textDecoration={false}/>
    <VideoTag text="Huge header" color="black" size={25} textDecoration={false}/>
    <VideoTag text="Danger notificatin" color="red" size={14} textDecoration={false}/>
    <VideoTag text="Underlined text" color="black" size={15} textDecoration={true}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
