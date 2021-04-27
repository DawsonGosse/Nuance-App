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

const Blob = styled.div`
  position:absolute;
  z-index:0;
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
    <Blob>
    <svg width="408" height="307" viewBox="0 0 408 307" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M423.508 83.3379C470.567 307.935 353.187 354.664 288.616 349.954C354.856 359.077 144.136 350.895 90.2156 353.479C105.354 359.575 117.534 362.718 121.694 363.686C123.834 364.115 123.657 364.143 121.694 363.686C118.644 363.074 110.886 361.645 96.8823 359.636C71.9131 356.054 73.7832 354.267 90.2156 353.479C44.965 335.257 -26.7162 290.643 10.3707 198.814C74.0629 41.1096 172.894 57.0963 274.446 11.1139C355.688 -25.6722 407.672 43.9357 423.508 83.3379Z" fill="#E1E1E1"/>
    </svg>

    </Blob>
    <LogoUI></LogoUI>
    <ButtonContainer>
      <ButtonUI text='GET STARTED' routeTo='/survey'></ButtonUI>
      <ButtonUI text='HOW IT WORKS' bgcolor='#fff' color='#3E3D46'></ButtonUI>
    </ButtonContainer>
  </Container>
}
