import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerBackUI from '../comps/Banner(BackButton)';
import TopicHeaderUI from '../comps/TopicHeader'; 
import QuestionButton from '../comps/QuestionButton';
import NavigationUI from '../comps/Navigation';
import { useEffect, useState } from 'react';

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
const Text = styled.p`
font-size:14px;
margin:51px 0px 6px 0px;
text-align:center;
    
`
const Icon = styled.img`
margin:0px 0px 24px 0px;
    
`
const Line = styled.div`
    width:100%;
    height:1px;
    background:#D6D6D6;
`

if(process.browser){
  var o= sessionStorage.getItem('catSelection');
  //setoptions(JSON.parse(o))
  var obj = JSON.parse(o);

  
}


export default function CategoriesPage() {

  useEffect(()=>{
    if(options[type]){
        if(options[type] === buttontexts.option1){
            setChosen(1)
        }
        if(options[type] === buttontexts.option2){
            setChosen(2)
        }
        if(options[type] === buttontexts.option3){
            setChosen(3)
        }
    } else (
        setChosen(0)
    )
    
}, [router.query])

  return <Container>
    <BannerBackUI></BannerBackUI>
    {obj.catClimatechange === true && <TopicHeaderUI bannertext="Climate Change"></TopicHeaderUI>}
    {obj.catEconomy === true && <TopicHeaderUI bannertext="Economy" src='/Topic1Large.png'></TopicHeaderUI>}
    <Text>Pick a Prompt that interests you</Text>
    <Icon src='ArrowDown.png'></Icon>
    {(obj.catEconomy === true || obj.catClimatechange === true) && <QuestionButton text='Electric vehicles are a better option.' routeTo="/questionprompt"></QuestionButton>}
    {obj.catClimatechange === true && <QuestionButton text='We should use Geoengineering.'></QuestionButton>}
    {obj.catClimatechange === true && <QuestionButton text='We should use Nuclear Energy.'></QuestionButton>}
    <Line></Line>
    <Text>Stay Tuned! We are always adding <br></br> new prompts for you to look at!</Text>
    <NavigationUI></NavigationUI>
  </Container>
}