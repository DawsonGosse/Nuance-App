import React from 'react';
import styled from 'styled-components';
import QuestionCardUI from '../comps/Component1';

const Container = styled.div`
width:100vw;
height:100vh;
background-color:#FAD;
display:flex;
`

export default function Home() {
  return <Container>
    <QuestionCardUI></QuestionCardUI>
  </Container>
}
