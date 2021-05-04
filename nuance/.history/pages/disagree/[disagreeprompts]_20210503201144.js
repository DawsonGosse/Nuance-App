import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../../comps/Banner';
import ProgressBarUI from '../../comps/ProgressBar';
import NavigationUI from '../../comps/Navigation';
import ButtonUI from '../../comps/Button';
import BannerBackUI from '../../comps/Banner(BackButton)';

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

const disagreeImg = styled.img`
    width: 100vw;
    padding-bottom: 40px;
`

var disagreedata =
{
    imgsrc:'',
}

export default function AgreePage() {
  
    const router = useRouter();
    const {disagreeprompts} = router.query;

    if(disagreeprompts === 'Electric vehicles are a better option')
    {
        disagreedata.imgsrc ='/disagree.png'
    }

    if(disagreeprompts === 'Countries should have open borders')
    {
        disagreedata.imgsrc ='/disagree_boarders.png'
    }

    if(disagreeprompts === 'COVID lock-downs are necessary and beneficial')
    {
        disagreedata.imgsrc ='/disagree_lockdown.png'
    }

    if(disagreeprompts === 'Universal Basic Income could solve poverty')
    {
        disagreedata.imgsrc ='/disagree_poverty.png'
    }

  return <Container>
    <BannerBackUI></BannerBackUI>
    <ProgressBarUI id='bar'></ProgressBarUI>
    <DisagreeImg src={agreedata.imgsrc}></DisagreeImg>
    <ButtonUI text='FINISH!' routeTo='/questionprompt2'></ButtonUI>
    <NavigationUI></NavigationUI>
  </Container>
}