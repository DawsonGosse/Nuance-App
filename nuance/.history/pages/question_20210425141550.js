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
margin:51px 0px 30px 0px;
    
`
const Text = styled.p`
font-size:14px;
margin:51px 0px 30px 0px;
   
export default function CategoriesPage() {
  return <Container>
    <BannerUI></BannerUI>
    <TopicHeaderUI bannertext="Climate Change"></TopicHeaderUI>
    <Text>Pick a Prompt that interests you</Text>
    <QuestionButton text='Electric vehicles are a better option.' routeTo="/questionprompt"></QuestionButton>
    <QuestionButton text='We should use Geoengineering.'></QuestionButton>
    <QuestionButton text='We should use Nuclear Energy.'></QuestionButton>
    <NavigationUI></NavigationUI>
  </Container>
}