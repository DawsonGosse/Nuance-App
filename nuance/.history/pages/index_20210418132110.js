import React from 'react';
import styled from 'styled-components';
import LogoUI from '../comps/Logo';

const Container = styled.div`
width:100vw;
height:100vh;
background-color:#FAD;
display:flex;
justify-content:center;
align-items:center;
`

export default function LandingPage() {
  return <Container>
    <LogoUI></LogoUI>
  </Container>
}
