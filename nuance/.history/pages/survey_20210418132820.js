import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`

export default function SurveyPage() {
  const router = useRouter();
  return <Container>
    
  </Container>
}