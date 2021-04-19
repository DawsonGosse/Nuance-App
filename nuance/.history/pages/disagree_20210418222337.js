import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import ProgressBarUI from '../comps/ProgressBar';
import NavigationUI from '../comps/Navigation';
import ButtonUI from '../comps/Button';

const Container = styled.div
`
    width:100%;
    height:100%;
    padding-bottom: 90px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    scroll-behavior: smooth;
`

const DisagreeImg = styled.img
`
    padding-bottom: 40px;
`

export default function CategoriesPage() {
  return <Container>
    <BannerUI></BannerUI>
    <ProgressBarUI></ProgressBarUI>
    <DisagreeImg src='/disagree.png'></DisagreeImg>
    <ButtonUI text='FINISH!' routeTo='/questionprompt2'></ButtonUI>
    <NavigationUI></NavigationUI>
  </Container>
}