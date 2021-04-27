import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import ButtonAUI from '../comps/Button(Absolute)';
import NavigationUI from '../comps/Navigation';
import BannerBackUI from '../comps/Banner(BackButton)';

const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
scroll-behavior: smooth;
overflow: hidden;
position:absolute;
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
const SubText = styled.p
`
font-size:14px;
position:absolute;
text-align:center;
color:white;
top:185px;
padding:20px;
`

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerBackUI></BannerBackUI>
    <ImgCont>
        <Text>Electric vehicles are a better option.</Text>
        <SubText>After reading the oposing argument do you still feel the same way?</SubText>
        <ButtonAUI top='320px' left="20px" text="AGREE" routeTo='/rankings' ></ButtonAUI>
        <ButtonAUI top='320px' left="218px" text="DISAGREE" routeTo='/rankings'></ButtonAUI>
        <ButtonAUI top='400px' left="120px" text="UNSURE" routeTo='/rankings'></ButtonAUI>
        <Img src="/CarImage2.png"></Img>
    </ImgCont>
    <NavigationUI></NavigationUI>
  </Container>
}