import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useEffect} from 'next/e'
import BannerUI from '../comps/Banner';
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
const RandomContainer = styled.div`
width:100%;
height:138px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Line = styled.div`
width:100%;
height:1px;
background-color:#D9D9D9;
`

export default function HomePage() {
  const router = useRouter();

  useEffect(()=>{
    if(process.browser){
       var o= sessionStorage.getItem('options');
       //setoptions(JSON.parse(o))
       var obj = JSON.parse(o);
       var key = obj.fruits+obj.coins+obj.colors
       if(results[key]){setText(results.correct)} 
       else(setText(results.wrong))
    }
  }, []);


  return <Container>
    <BannerUI></BannerUI>
    <HeaderContainer>Prompts from your favorite topics</HeaderContainer>
    <TextContainer>Based on your survey answers...</TextContainer>
    <TopicContainer>
      <TopicButtonLargeUI bannertext="Electric Vehicles"></TopicButtonLargeUI>
      <TopicButtonLargeUI bannertext='Death Penalty'></TopicButtonLargeUI>
      <TopicButtonLargeUI bannertext='Bitcoin & Ethereum'></TopicButtonLargeUI>
    </TopicContainer>
    <RandomContainer>
      <Line></Line>
      <TextContainer>Can't Decide? Get a Random Prompt!</TextContainer>
      <RandomButtonUI></RandomButtonUI>
    </RandomContainer>
    <NavigationUI Iconcolor2="#8BB09C"></NavigationUI>
  </Container>
}