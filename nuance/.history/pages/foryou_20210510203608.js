import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import BannerUI from '../comps/Banner';
import NavigationUI from '../comps/Navigation';
import PromptCardUI from '../comps/ForYouPageCard';
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
justify-content:;
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

export default function ForYou() {

  if(process.browser){
    var o= sessionStorage.getItem('Selection');
    var obj = JSON.parse(o);
 }
 const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <HeaderContainer>Prompts from your favorite topics</HeaderContainer>
    <TextContainer>Based on your survey answers...</TextContainer>
    <TopicContainer>
      {obj.Covid === true && <PromptCardUI headertext='Covid-19' bodytext='COVID lock-down mandates are necessary and beneficial.' src='/ForYouPromptCOVID.png' onClick={()=>router.push('/questionpromp')}></PromptCardUI>}
      {obj.Healthcare === true && <PromptCardUI headertext='Healthcare' bodytext='COVID lock-down mandates are necessary and beneficial.' src='/ForYouPromptCOVID.png'></PromptCardUI>}
      {obj.Foreignpolicy === true && <PromptCardUI headertext='Foreign Policy' bodytext='Countries should have open borders.' src='/ForYouPromptFOREIGN.png'></PromptCardUI>}
      {obj.Immigration === true && <PromptCardUI headertext='Immigration' bodytext='Countries should have open borders.' src='/ForYouPromptFOREIGN.png'></PromptCardUI>}
      {obj.Economy === true && <PromptCardUI headertext='Economy' bodytext='Universal Basic Income could solve poverty.' src='/ForYouPromptECON.png'></PromptCardUI>}
      {obj.Climatechange === true && <PromptCardUI headertext='Climate Change' bodytext='Electric vehicles are a better option.' src='/ForYouPromptCLIMATE.png'></PromptCardUI>}
    </TopicContainer>
    <NavigationUI Iconcolor2="#8BB09C"></NavigationUI>
  </Container>
}