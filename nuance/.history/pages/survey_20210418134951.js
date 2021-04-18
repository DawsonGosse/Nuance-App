import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton';
import ButtonUI from '../comps/Button';

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
const TextCont = styled.h4`
display:flex;
align-items:center;
flex-direction:column;

`

export default function SurveyPage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <TextCont></TextCont>
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
    <ButtonCont>
        <ButtonUI></ButtonUI>
    </ButtonCont>
  </Container>
}