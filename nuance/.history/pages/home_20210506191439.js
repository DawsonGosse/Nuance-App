import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import BannerUI from '../comps/Banner'
import QuestionCardUI from '../comps/QuestionCard'
import NavigationUI from '../comps/Navigation'
import HelpButtonUI from '../comps/HelpButton'

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
const RowCont = styled.div`
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

export default function HomePage() {
  const router = useRouter();
  return <Container>
    <HelpButtonUI></HelpButtonUI>
    <BannerUI></BannerUI>
    <QuestionCardUI headertext="Daliy Topic" bodytext="General Motors has joined a list of growing companies to mandate that all their vehicles be electric by a certain date. Governments too, motivated 
by..." subheadertext="Electric Vehicle debate" src="/CarImage.jpg" bgcolor="#8BB09C" linecolor='#8BB09C' lineleft='0px' headingalign='right' headercolor='#8BB09C' routeTo="/questionprompt/Electric vehicles are a better option"></QuestionCardUI>
    <QuestionCardUI linewidth='140px' lineleft='197px' routeTo='/questionprompt/Electric vehicles are a better option'></QuestionCardUI>
    <NavigationUI Iconcolor1="#8BB09C"></NavigationUI>
  </Container>
}