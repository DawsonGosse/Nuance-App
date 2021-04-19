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
const ImgCont = styled.div
`
width:100%;
object-fit:cover;
overflow:hidden;
    
`
const Img = styled.img
`
width:100vw;
heigth:100vh;
`


export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <ImgCont>
         <Img src="/CarImage1.png"></Img>
    </ImgCont>
    <NavigationUI></NavigationUI>
  </Container>
}