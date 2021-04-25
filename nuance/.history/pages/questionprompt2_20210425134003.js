import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton(survey)';
import ButtonAUI from '../comps/Button(Absolute)';
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
const ImgCont = styled.div
`
width:100%;
object-fit:cover;
overflow:hidden;
position:relative;
    
`
const Img = styled.img
`
width:100vw;
heigth:100vh;
filter
`
const Text = styled.h3
`
padding:20px;
font-size:30px;
font-weight:bold;
color:white;
text-transform:uppercase;
text-align:center;
top:80px;
position:absolute
`
const SubText = styled.p`
font-size:14px;
position:absolute;
text-align:center;
color:white;
top:180px;
padding:20px;
`

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <ImgCont>
        <Text>Electric vehicles are a better option.</Text>
        <SubText>After reading the oposing argument do you still feel the same way?</SubText>
        <ButtonAUI left="20px" text="AGREE" routeTo='/rankings' ></ButtonAUI>
        <ButtonAUI left="218px" text="DISAGREE" routeTo='/rankings'></ButtonAUI>
        <ButtonAUI top='360px' left="120px" text="UNSURE" routeTo='/rankings'></ButtonAUI>
        <Img src="/CarImage1.png"></Img>
    </ImgCont>
    <NavigationUI></NavigationUI>
  </Container>
}