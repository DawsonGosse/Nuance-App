import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton';

const Container = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
flex-wrap:wrap;
`
const RowCont = styled.div
`
display:flex;

flex-wrap:wrap;
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
    </RowCont>
  </Container>
}