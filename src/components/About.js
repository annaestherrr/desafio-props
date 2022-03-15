import styled from "styled-components";

const Container = styled.div`
background-color: pink;
padding: 2rem;
font-size: 2rem;
border: solid black 2px;
text-align: center;
`


const About = ({nome, idade, estudando}) => {
    return(
        <Container>
            <p>Oi, {nome}! Sua idade é {idade} anos e você está estudando {estudando}!</p>
        </Container>
    )
};

export default About;