import styled from "styled-components"

interface ContainerProrps {
    bgColor:string
    borderColor:string
}

const Container = styled.div<ContainerProrps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border:1px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor : string;
    borderColor?:string;
    //optional props

    text?:string;
}


//default value 주기
function Circle({bgColor,borderColor,text = "default text"} : CircleProps){

    
    return (
    <Container bgColor={bgColor} 
    borderColor={borderColor ?? bgColor}>
        {text}
    </Container>)
    //borderColor값이 있다면 그 값을 쓰고 없다면 bgColor값을 쓴다 - defaultProps
}

interface PlayerShape{
    name:string;
    age:number
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} old`
sayHello({name:"test",age:12})

export default Circle