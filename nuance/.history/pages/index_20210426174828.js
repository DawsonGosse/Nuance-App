import React from 'react';
import styled from 'styled-components';
import LogoUI from '../comps/Logo';
import {useRouter} from 'next/router';
import ButtonUI from '../comps/Button';
import BlobBig from '../comps/BlobBig';
import BlobSmall from '../comps/BlobSmall';

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:flex-end;
align-items:center;
flex-direction:column;
overflow: hidden;
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
animation-duration: 3s;
`

export default function LandingPage() {
  return <Container>
    <BlobBig></BlobBig>
    <BlobSmall></BlobSmall>
    <LogoUI></LogoUI>
    <ButtonContainer>
      <ButtonUI text='GET STARTED' routeTo='/survey'></ButtonUI>
      <ButtonUI text='HOW IT WORKS' bgcolor='#fff' color='#3E3D46'></ButtonUI>
    </ButtonContainer>
  </Container>
}
