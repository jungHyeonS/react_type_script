import React, { useState } from 'react';
import styled from "styled-components"
// import Circle from './Circle';




function App() {
  const [value,setValue] = useState("")

  //onChange 함수가 input 엘리멘트에 의해서 실행
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {


      //const value = event.currentTarget.value 와 같다
      //currentTarget안에 value,tagName,width,id 와 같은 여러개의 값을 가지고 오고싶다면
      //const {currentTarget : {value,tagName,width,id}} = event
      const {currentTarget : {value}} = event;
      setValue(value)
  }
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("heelo",value)
  }

  return (
    <div>
      {/* <Circle bgColor={'tomato'} borderColor="black"/>
      <Circle text={'im hrear'} bgColor={'blue'}/> */}

      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} type="text" placeholder='username'/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
