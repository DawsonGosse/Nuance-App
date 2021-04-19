import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton';
import ButtonUI from '../comps/Button';
import QuestionCardUI from '../comps/QuestionCard';
import NavigationUI from '../comps/Navigation';
import ResultScaleUI from '../comps/ResultScale';

const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
scroll-behavior: smooth;
`
const Text = styled.p`
font-size:20px;
`

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <Text>Where you started...</Text>
    <ResultScaleUI></ResultScaleUI>
    <Text>Where you are now...</Text>
    <ResultScaleUI UnsureVisiblity="flex" slider="180px" AgreePer="46%" DisagreePer="31%"></ResultScaleUI>
    <NavigationUI></NavigationUI>
  </Container>
}