import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Yana"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Valera"},
    {id: 5, name: "Sveta"}
]
let messageData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are your?"},
    {id: 3, message: "YO!!!"}
]
let postData = [
    {id: 1, message: "Hi", likesCount: 15},
    {id: 2, message: "It`s my first post", likesCount: 23},
    {id: 3, message: "Hello World!!!", likesCount: 8}
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={dialogsData} messageData={messageData} postData={postData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
