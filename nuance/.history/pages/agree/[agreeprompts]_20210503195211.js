import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../../comps/Banner';
import ProgressBarUI from '../../comps/ProgressBar';
import NavigationUI from '../comps/Navigation';
import ButtonUI from '../comps/Button';
import BannerBackUI from '../comps/Banner(BackButton)';

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

const AgreeImg = styled.img`
    width: 100vw;
    padding-bottom: 40px;
`

export default function AgreePage() {
  return <Container>
    <BannerBackUI></BannerBackUI>
    <ProgressBarUI></ProgressBarUI>
    <AgreeImg src='/agree.png'></AgreeImg>
    <ButtonUI text='FINISH!' routeTo='/questionprompt2'></ButtonUI>
    <NavigationUI></NavigationUI>
  </Container>
}