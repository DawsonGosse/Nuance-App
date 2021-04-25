import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicHeaderUI from '../comps/TopicHeader'; 
import QuestionButton from '../comps/QuestionButton';
import NavigationUI from '../comps/Navigation';

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
    
`
const Icon = styled.img`
margin:0px 0px 24px 0px;
    
`
const Line = styled.div`
    width:100%;
    height:1px;
    background:D6D6D6;
`

export default function CategoriesPage() {
  return <Container>
    <BannerUI></BannerUI>
    <TopicHeaderUI bannertext="Climate Change"></TopicHeaderUI>
    <Text>Pick a Prompt that interests you</Text>
    <Icon src='ArrowDown.png'></Icon>
    <QuestionButton text='Electric vehicles are a better option.' routeTo="/questionprompt"></QuestionButton>
    <QuestionButton text='We should use Geoengineering.'></QuestionButton>
    <QuestionButton text='We should use Nuclear Energy.'></QuestionButton>
    <Line></Line>
    <NavigationUI></NavigationUI>
  </Container>
}