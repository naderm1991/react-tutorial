
// Objectives:
// 1. Set up the basic React code from scratch
// 2. Create a functional component called MyInfo that returns the following UI:
// a. An h1 with your name
// b. A paragraph with a little blurb about yourself
// c. An ordered or uno rdered list of the top 3 vacati on spots you'd like to visit
// 3. Render an instance of that functional component to the browser
// Extra challenge: learn on your own (Google!) how you can add some style to your page.
// (We will also cover this in an upcoming lesson).

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

function MyInfo() {
    return (
        <div>
            <h1>This is a paragraph 1</h1>
            <p>This is a paragraph 2</p>
            <ul>
                <li>This is a paragraph</li>
                <li>This is a paragraph</li>
                <li>This is a paragraph</li>

            </ul>
        </div>
    );

}

// old js way

// imperative way
// var myNewP = document.createElement("p");
// myNewP.innerHTML =  "This is a paragraph.";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// ReactDOM.render(WHAT DO I WANT TO RENDER , WHERE DO I WANT TO RENDER IT);
// JSX
// declarative way
ReactDOM.render(<MyInfo />,document.getElementById('root'));

//serviceWorker.unregister();
