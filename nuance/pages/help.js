import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerBackUI from '../comps/Banner(BackButton)';
import HeaderBannerUI from '../comps/HeaderBanner';
import ButtonUI from '../comps/Button';
import NextButtonUI from '../comps/NextButton';

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

const HelpImages = styled.img`
    display: flex;
    justify-content: center;
`

export default function HelpPage() {

  const router = useRouter();

  return <Container>
      <BannerBackUI></BannerBackUI>
      <HeaderBannerUI text="instructions" bgcolor="#3E3D46"></HeaderBannerUI>
      <HelpImages src='\help_page_images.svg'></HelpImages>
      <NextButtonUI text="BACK" onClick={()=>router.back()}></NextButtonUI>
  </Container>
}