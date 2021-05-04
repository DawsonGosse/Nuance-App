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
var topics = 
{
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

var questiontext = 
{
    question1:'',
    question2:'',
    question3:'',
    question4:'',
}

var header = 
{
    text:'',
    src:''
}

export default function Topics() {

    const router = useRouter();
    const {topics} = router.query;


    if(topics === 'economy')
    {
        questiontext.question1= 'Electric vehicles are a better option.'
        questiontext.question2= 'Countries should have open borders'
        questiontext.question3= 'COVID lock-downs are necessary and beneficial'
        questiontext.question4= 'Universal Basic Income could solve poverty'
        header.text = 'Economy'
        header.src = '/topic1large.png'
    }

    if(topics === 'healthcare')
    {
        questiontext.question1= 'COVID lock-downs are necessary and beneficial'
        questiontext.question2= '0'
        questiontext.question3= ''
        questiontext.question4= ''
        header.text = 'Healthcare'
        header.src = '/topic2.png'
    }
    console.log(questiontext.question2)
    return <Container>
    <BannerBackUI></BannerBackUI>
    <TopicHeaderUI bannertext={header.text} src={header.src}></TopicHeaderUI>
    <Text>Pick a Prompt that interests you</Text>
    <Icon src='/ArrowDown.png'></Icon>
    <QuestionButton text={questiontext.question1} routeTo="/questionprompt"></QuestionButton>
    {questiontext.question2 !== 'null' && <QuestionButton text={questiontext.question2}></QuestionButton>}
    {questiontext.question3 === !'null' && <QuestionButton text={questiontext.question3}></QuestionButton>}
    {questiontext.question4 === !'' && <QuestionButton text={questiontext.question4}></QuestionButton>}
    <Line></Line>
    <Text>Stay Tuned! We are always adding <br></br> new prompts for you to look at!</Text>
    <NavigationUI></NavigationUI>
  </Container>
}