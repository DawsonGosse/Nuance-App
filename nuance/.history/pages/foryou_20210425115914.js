import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton(survey)';
import ButtonUI from '../comps/Button';
import QuestionCardUI from '../comps/QuestionCard';
import NavigationUI from '../comps/Navigation';
import TopicButtonLargeUI from '../comps/TopicButtonLarge';
import RandomButtonUI from '../comps/RandomizeButton';

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
height:550px;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:column;
`
const HeaderContainer = styled.h2`
font-size:18px;
font-weight:bold;
margin:0px;
`

const TextContainer = styled.p`
font-size:13px;

`

const Line = styled.div`
width:100%;
height:1px;
background:D9D9D9;
`

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <HeaderContainer>Prompts from your favorite topics</HeaderContainer>
    <TextContainer>Based on your survey answers...</TextContainer>
    <TopicContainer>
      <TopicButtonLargeUI bannertext="Electric Vehicles"></TopicButtonLargeUI>
      <TopicButtonLargeUI bannertext='Death Penalty'></TopicButtonLargeUI>
      <TopicButtonLargeUI bannertext='Bitcoin & Ethereum'></TopicButtonLargeUI>
    </TopicContainer>
    <TextContainer>Can't Decide? Get a Random Prompt!</TextContainer>
    <RandomButtonUI></RandomButtonUI>
    <NavigationUI></NavigationUI>
  </Container>
}