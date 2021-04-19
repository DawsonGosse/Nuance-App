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

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <ImgCont>
        <Text>Electric vehicles are a better option.</Text>
        <ButtonAUI left="20px" text="AGREE" routeTo='/rankings' ></ButtonAUI>
        <ButtonAUI left="218px" text="DISAGREE" routeTo='/ranking'></ButtonAUI>
        <ButtonAUI to=left="100px" text="DISAGREE" routeTo='/ranking'></ButtonAUI>
        <Img src="/CarImage1.png"></Img>
    </ImgCont>
    <NavigationUI></NavigationUI>
  </Container>
}