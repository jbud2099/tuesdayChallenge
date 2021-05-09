import React from 'react';
import './App.css';
import Clock from './components/Clock';
import FetchIndex from './TuesdayChallenge/FetchIndex';

let testProp: string = 'Am I getting passed to the Clock component?'
let optionalProp: string = 'You sure are!';

    //1         //2
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter">
        <Clock testProp={testProp} optionalProp={optionalProp} />
        <FetchIndex />
      </div>
    </div>
  );
}

export default App;

/* 1. Our arrow function expression is given the name of 'App'
   2. By including ':' after 'App', we denote that what follows the colon is the type that we are assigning to 'App'.
      Here, we are digging into our named import of 'React', and assigning our 'App' the type of 
     'FunctionComponent' (this is digging into our node modules, and more specifically, the @types packages 
      that are installed). */