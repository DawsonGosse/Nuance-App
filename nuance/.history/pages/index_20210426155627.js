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
justify-content:center;
align-items:center;
flex-direction:column;
margin-top:300px;
margin-bottom:;
`

export default function LandingPage() {
  return <Container>
    <LogoUI></LogoUI>
    <ButtonContainer>
      <ButtonUI></ButtonUI>
      <ButtonUI></ButtonUI>
    </ButtonContainer>
  </Container>
}
