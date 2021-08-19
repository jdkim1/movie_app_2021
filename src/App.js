import React, { Fragment } from 'react';
import Apple from './Apple';
import CounterCom from './CounterCom';
import Potato from './Potato'

function App() {

  let text="My name is Hong gil dong"
  let style = {
    backgroundColor: 'red'
  }


  return (
    <Fragment>
      <CounterCom />
      <br/><br/>
      <hr></hr>
        <div style={style}>
          <h1>Hello! {text}</h1>
        </div>
        <Potato />
        <br/><br/>
        <hr></hr>
        <Apple />
    </Fragment>
  )
}

export default App;
