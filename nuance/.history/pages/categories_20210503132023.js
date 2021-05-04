import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerUI from '../comps/Banner';
import TopicButtonUI from '../comps/TopicButton';
import NavigationUI from '../comps/Navigation';
import {useState} from 'react';

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
const RowCont = styled.div
`
display:flex;
justify-content:center;
flex-wrap:wrap;
`

let catSelection = {
  catEconomy:false,
  catHealthcare:false,
  catGender:false,
  catCovid:false,
  catViolentcrimes:false,
  catForeignpolicy:false,
  catGunpolicy:false,
  catEthicrace:false,
  catClimatechange:false,
  catImmigration:false,
  catAbortion:false,
  catOther:false,
}

export default function CategoriesPage() {

  const [buttonstate1, setButtonState1] = useState(false);
  const HandleClickEcon= () => {
    catSelection.catEconomy === true;
    sessionStorage.setItem('catSelection', JSON.stringify(catSelection))
    router.push('/question')
  }

  const router = useRouter();
  return <Container>
    <BannerUI></BannerUI>
    <RowCont>
        <TopicButtonUI bannertext="economy" src="/Topic1.png" onClick={HandleClickEcon}></TopicButtonUI>
        <TopicButtonUI bannertext="healthcare" src="/Topic2.png"></TopicButtonUI>
        <TopicButtonUI bannertext="gender" src="/Topic3.png"></TopicButtonUI>
        <TopicButtonUI bannertext="covid-19" src="/Topic4.png"></TopicButtonUI>
        <TopicButtonUI bannertext="violent crimes" src="/Topic5.png"></TopicButtonUI>
        <TopicButtonUI bannertext="foreign policy" src="/Topic6.png"></TopicButtonUI>
        <TopicButtonUI bannertext="gun policy" src="/Topic7.png"></TopicButtonUI>
        <TopicButtonUI bannertext="ethnic & race" src="/Topic8.png"></TopicButtonUI>
        <TopicButtonUI bannertext="climate change" src="/Topic9.png" routeTo="/question"></TopicButtonUI>
        <TopicButtonUI bannertext="immigration" src="/Topic10.png"></TopicButtonUI>
        <TopicButtonUI bannertext="abortion" src="/Topic11.png"></TopicButtonUI>
        <TopicButtonUI bannertext="other"></TopicButtonUI>

    </RowCont>
    <NavigationUI Iconcolor3="#8BB09C"></NavigationUI>
  </Container>
}