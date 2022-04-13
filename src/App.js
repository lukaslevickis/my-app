import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [result, setResult] = React.useState("Yes");
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setResult("no")
  }

  function handleClick2() {
    setCount(oldVal => oldVal + 1)
  }

  return (
    <div>
      {/* condition = true && jei true grazina */}
      <Navbar />
      <div onClick={handleClick}>click to set state</div>
      <div onClick={handleClick2}>click to set count state</div>
      <Hero 
          id="title" 
          text={result}
          numberForTitle={4}
      />
      <Hero 
          id="title2" 
          text={count}
          numberForTitle={6}
      />
    </div>
  );
}

export default App;
