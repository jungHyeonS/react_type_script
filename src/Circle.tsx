import styled from "styled-components"

interface ContainerProrps {
    bgColor:string
}

const Container = styled.div<ContainerProrps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
`;

interface CircleProps {
    bgColor : string;
}

function Circle({bgColor} : CircleProps){
    return <Container bgColor={bgColor}/>
}

interface PlayerShape{
    name:string;
    age:number
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} old`
sayHello({name:"test",age:12})

export default Circle