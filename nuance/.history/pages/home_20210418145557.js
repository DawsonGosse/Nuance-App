import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton';
import ButtonUI from '../comps/Button';
import QuestionCardUI from '../comps/QuestionCard';
import NavigationUI from '../comps/Navigation';

const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
scroll-behavior: smooth;
`
const RowCont = styled.div
`
display:flex;
justify-content:center;
flex-wrap:wrap;
`
const ButtonCont = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin:34px;
`
const HeaderCont = styled.h4`
display:flex;
text-transform: uppercase;
flex-direction:row;
margin-bottom:0px
`
const TextCont = styled.p`
display:flex;

`


export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <QuestionCardUI headertext="Topic of the day" subheadertext="Electric Vehicles debate" src="/CarImage.jpg"></QuestionCardUI>
    <QuestionCardUI></QuestionCardUI>
    <NavigationUI></NavigationUI>
  </Container>
}