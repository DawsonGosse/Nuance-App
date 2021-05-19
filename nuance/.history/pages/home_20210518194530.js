import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import BannerUI from '../comps/Banner'
import QuestionCardUI from '../comps/QuestionCard'
import NavigationUI from '../comps/Navigation'
import HelpButtonUI from '../comps/HelpButton'
import RandomButtonUI from '../comps/RandomizeButton'
import { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
const RowCont = styled.div`
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

const RandomContainer = styled.div`
width:100%;
height:138px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const Line = styled.div`
width:100%;
height:1px;
background-color:#D9D9D9;
`

const TextContainer = styled.p`
font-size:13px;
`

const CarouselCont = styled.div`
display:flex;
flex-direction:center;
`

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <QuestionCardUI headertext="Daliy Topic" bodytext="General Motors has joined a list of growing companies to mandate that all their vehicles be electric by a certain date. Governments too, motivated 
by..." subheadertext="Electric Vehicle debate" src="/CarImage.jpg" bgcolor="#8BB09C" linecolor='#8BB09C' lineleft='0px' headingalign='right' headercolor='#8BB09C' routeTo="/questionprompt/Electric vehicles are a better option"></QuestionCardUI>
    <Carousel width='390px' showStatus="false">
      <CarouselCont>
        <QuestionCardUI linewidth='140px' lineleft='197px' routeTo='/questionprompt/Electric vehicles are a better option'></QuestionCardUI>
      </CarouselCont>
      <CarouselCont>
        <QuestionCardUI linewidth='140px' lineleft='197px' routeTo='/questionprompt/Electric vehicles are a better option'></QuestionCardUI>
      </CarouselCont>
      <CarouselCont>
        <QuestionCardUI linewidth='140px' lineleft='197px' routeTo='/questionprompt/Electric vehicles are a better option'></QuestionCardUI>
      </CarouselCont>
    </Carousel>
    <RandomContainer>
      <Line></Line>
      <TextContainer>Can't Decide? Get a Random Prompt!</TextContainer>
      <RandomButtonUI></RandomButtonUI>
    </RandomContainer>
    <NavigationUI Iconcolor1="#8BB09C"></NavigationUI>
  </Container>
}