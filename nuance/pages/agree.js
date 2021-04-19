import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import ProgressBarUI from '../comps/ProgressBar';
import NavigationUI from '../comps/Navigation';
import ButtonUI from '../comps/Button';

const Container = styled.div`
    width:100%;
    height:100%;
    padding-bottom: 90px;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    scroll-behavior: smooth;
`

const AgreeImg = styled.img`
    padding-bottom: 40px;
`

export default function CategoriesPage() {
  return <Container>
    <BannerUI></BannerUI>
    <ProgressBarUI></ProgressBarUI>
    <AgreeImg src='/agree.png'></AgreeImg>
    <NavigationUI></NavigationUI>
    <ButtonUI text='FINISH!'></ButtonUI>
  </Container>
}