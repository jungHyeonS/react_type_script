import React from 'react';
import styled from "styled-components"
import Circle from './Circle';




function App() {
  return (
    <div>
      <Circle bgColor={'tomato'} borderColor="black"/>
      <Circle text={'im hrear'} bgColor={'blue'}/>
    </div>
  );
}

export default App;
