import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton(survey)';
import ButtonUI from '../comps/Button';
import QuestionCardUI from '../comps/QuestionCard';
import NavigationUI from '../comps/Navigation';
import TopicButtonLargeUI from '../comps/TopicButtonLarge';

const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
scroll-behavior: smooth;
`

const TopicContainer = styled.div`
width:100%;
height:500px;
display:flex;
align-items:center;

flex-direction:column;
`

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <TopicContainer>
      <TopicButtonLargeUI></TopicButtonLargeUI>
      <TopicButtonLargeUI></TopicButtonLargeUI>
      <TopicButtonLargeUI></TopicButtonLargeUI>
    </TopicContainer>
    <NavigationUI></NavigationUI>
  </Container>
}