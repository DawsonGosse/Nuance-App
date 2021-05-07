import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import BannerUI from '../comps/Banner';
import NavigationUI from '../comps/Navigation';
import PromptCardUI from '../comps/ForYouPageCard';
import RandomButtonUI from '../comps/RandomizeButton';
import HelpButtonUI from '../comps/HelpButton';

const Container = styled.div`
width:100%;
height:100%;
padding-bottom: 90px;
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
const RandomContainer = styled.div`
width:100%;
height:138px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`


export default function ForYou() {

  return <Container>
    <HelpButtonUI></HelpButtonUI>
    <BannerUI></BannerUI>
    <HeaderContainer>Prompts from your favorite topics</HeaderContainer>
    <TextContainer>Based on your survey answers...</TextContainer>
    <TopicContainer>
      <PromptCardUI headertext='Covid-19' bodytext='COVID lock-down mandates are necessary and beneficial.' src='/ForYouPromptCOVID.png'></PromptCardUI>
 <PromptCardUI headertext='Covid-19' bodytext='COVID lock-down mandates are necessary and beneficial.' src='/ForYouPromptCOVID.png'></PromptCardUI>
 <PromptCardUI headertext='Covid-19' bodytext='COVID lock-down mandates are necessary and beneficial.' src='/ForYouPromptCOVID.png'></PromptCardUI>
    </TopicContainer>
    <NavigationUI Iconcolor2="#8BB09C"></NavigationUI>
  </Container>
}