import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassPerson from './components/Person/Person'
import { FunctionalPerson } from './components/Person/Person'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import React, { Component } from 'react'

// function App() {
//  return (
//    <div className="Person">
//      <ClassPerson name="Patata" surname ="McPatata" age="12" /><br/>
//      <ClassPerson name="Ajo" surname ="McAjo" age="99" /><br/>
//      <ClassPerson name="Ketchup" surname ="McTomato" age="42" /><br/>
//    </div>
//  )
// }

class App extends Component {
  render() {
        console.log("App se está renderizando");

    return (
      <div className="container">
        <Header />
        <Home />
      </div>
    );
  }
}


export default App
