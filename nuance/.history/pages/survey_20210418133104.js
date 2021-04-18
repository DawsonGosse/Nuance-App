import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction
`

export default function SurveyPage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
  </Container>
}