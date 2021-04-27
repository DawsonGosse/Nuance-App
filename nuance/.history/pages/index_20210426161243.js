import React from 'react';
import styled from 'styled-components';
import LogoUI from '../comps/Logo';
import {useRouter} from 'next/router';
import ButtonUI from '../comps/Button';

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:flex-end;
align-items:center;
flex-direction:column;
`
const ButtonContainer =styled.div`
display:flex;
width:100vw;
height:200px;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
margin-top:200px;
margin-bottom:20px;
animation-name: FadeIn;
animation-iteration-count: 1;
animation-timing-function: ease-in;
animation-duration: 1.5s;
animation-delay:;
`

export default function LandingPage() {
  return <Container>
    <LogoUI></LogoUI>
    <ButtonContainer>
      <ButtonUI text='GET STARTED' routeTo='/survey'></ButtonUI>
      <ButtonUI text='HOW IT WORKS' bgcolor='#fff' color='#3E3D46'></ButtonUI>
    </ButtonContainer>
  </Container>
}
