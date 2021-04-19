import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonLargeUI from '../comps/TopicButtonLarge';
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
const Divider = styled.div`
    height:  155px;
    width 100%;
    background-color: #FFF;
`
export default function CategoriesPage() {
  return <Container>
    <BannerUI></BannerUI>
    <TopicButtonLargeUI bannertext="Climate Change"></TopicButtonLargeUI>
    <QuestionButton text='Electric vehicles are a better option.' routeTo="/questionprompt"></QuestionButton>
    <QuestionButton text='We should use Geoengineering.'></QuestionButton>
    <QuestionButton text='We use Nuclear Energy.'></QuestionButton>
    <Divider></Divider>
    <NavigationUI></NavigationUI>
  </Container>
}