import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton';
import ButtonUI from '../comps/Button';

const Container = styled.div`
width:100vw;
height:100vh;
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
margin-bottom:34px;
`
const ButtonCont = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
scroll-behavior: smooth;
`

export default function SurveyPage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <RowCont>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
        <TopicButtonUI></TopicButtonUI>
    </RowCont>
    <ButtonCont></ButtonCont>
    <ButtonUI></ButtonUI>
  </Container>
}