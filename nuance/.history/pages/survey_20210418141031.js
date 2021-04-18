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
const HeaderCont = styled.h4`
display:flex;
text-transform: uppercase;
flex-direction:row;
margin-bottom:0px
`
const TextCont = styled.p`
display:flex;

`


export default function SurveyPage() {
  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <HeaderCont>Pick&nbsp;<em>Three</em>&nbsp;Categories</HeaderCont>
    <TextCont>that you would like to focus on today.</TextCont>
    <RowCont>
        <TopicButtonUI bannertext="Economy"></TopicButtonUI>
        <TopicButtonUI bannertext="HealthCare"></TopicButtonUI>
        <TopicButtonUI bannertext="GENDER"></TopicButtonUI>
        <TopicButtonUI bannertext="COVID-19"></TopicButtonUI>
        <TopicButtonUI bannertext="VIOLENT CRIMES"></TopicButtonUI>
        <TopicButtonUI bannertext="FOREIGN POLICY"></TopicButtonUI>
        <TopicButtonUI bannertext="GUN POLICY"></TopicButtonUI>
        <TopicButtonUI bannertext="ETHNIC & RACE"></TopicButtonUI>
        <TopicButtonUI bannertext="CLIMATE CHANGE"></TopicButtonUI>
        <TopicButtonUI bannertext="IMMIGRATION"></TopicButtonUI>
        <TopicButtonUI bannertext="ABORTION"></TopicButtonUI>
        <TopicButtonUI bannertext="OTHER"></TopicButtonUI>

    </RowCont>
    <ButtonCont>
        <ButtonUI></ButtonUI>
    </ButtonCont>
  </Container>
}