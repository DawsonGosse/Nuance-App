import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerBackUI from '../../comps/Banner(BackButton)';
import TopicHeaderUI from '../../comps/TopicHeader'; 
import QuestionButton from '../../comps/QuestionButton';
import NavigationUI from '../../comps/Navigation';
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
var topics = {
    econ:null,
    health:null,
    gender:null,
    covid:null,
    crime:null,
    foreign:null,
    guns:null,
    race:null,
    climate:null,
    immig:null,
    abort:null,
    fun:null,
};

var questiontext = {
    question1:'',
    question2:'',
    question3:'',
}

export default function Topics() {

    const router = useRouter();
    const {topics} = router.query;

    if(topics === 'economy'){
        questiontext.question1= 'Electric vehicles are a better option.'
        questiontext.question2= 'Countries should have open borders'
        questiontext.question3= 'Electric vehicles are a better option.'
    }

  return <Container>
    <BannerBackUI></BannerBackUI>
    <TopicHeaderUI bannertext="Climate Change"></TopicHeaderUI>
    <Text>Pick a Prompt that interests you</Text>
    <Icon src='/ArrowDown.png'></Icon>
    <QuestionButton text='Electric vehicles are a better option.' routeTo="/questionprompt"></QuestionButton>
    <QuestionButton text='We should use Geoengineering.'></QuestionButton>
    <QuestionButton text='We should use Nuclear Energy.'></QuestionButton>
    <Line></Line>
    <Text>Stay Tuned! We are always adding <br></br> new prompts for you to look at!</Text>
    <NavigationUI></NavigationUI>
  </Container>
}