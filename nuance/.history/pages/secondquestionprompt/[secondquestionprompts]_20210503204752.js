import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import BannerBackUI from '../../comps/Banner(BackButton)';
import ButtonAUI from '../../comps/Button(Absolute)';
import NavigationUI from '../../comps/Navigation';

const Container = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
scroll-behavior: smooth;
overflow: hidden;
position:absolute;
`
const ImgCont = styled.div
`
width:100vw;
height:100vh;
object-fit:cover;
overflow:hidden;
position:relative;
`
const Img = styled.img
`
  width:100%;
  height:100%;
`
const Text = styled.h3
`
padding:20px;
font-size:30px;
font-weight:bold;
color:white;
text-transform:uppercase;
text-align:center;
top:80px;
position:absolute
`

var secondquestionpromptdata = 
{
    questiontext:'',
    questionimg:'',
}

export default function SecondQuestionPrompts() {

    const router = useRouter();
    const {secondquestionprompts} = router.query;

    if(secondquestionprompts === 'Electric vehicles are a better option')
    {
        secondquestionpromptdata.questiontext ='Electric vehicles are a better option'
        secondquestionpromptdata.questionimg = '/CarImage1.png'
    }

    if(secondquestionprompts === 'Countries should have open borders')
    {
        secondquestionpromptdata.questiontext ='Countries should have open borders'
        secondquestionpromptdata.questionimg = '/BorderImage.png'
    }

    if(secondquestionprompts === 'COVID lock-downs are necessary and beneficial')
    {
        secondquestionpromptdata.questiontext ='COVID lock-downs are necessary and beneficial'
        secondquestionpromptdata.questionimg = '/CovidImage.png'
    }

    if(secondquestionprompts === 'Universal Basic Income could solve poverty')
    {
        secondquestionpromptdata.questiontext ='Universal Basic Income could solve poverty'
        secondquestionpromptdata.questionimg = '/CarImage1.png'
    }

  return <Container>
    <BannerBackUI></BannerBackUI>
    <ImgCont>
        <Text>{secondquestionpromptdata.questiontext}</Text>
        <ButtonAUI left="20px" text="AGREE" routeTo=></ButtonAUI>
        <ButtonAUI left="218px" text="DISAGREE" routeTo={secondquestionpromptdata.agreesrc}></ButtonAUI>
        <Img src={secondquestionpromptdata.questionimg}></Img>
    </ImgCont>
    <NavigationUI></NavigationUI>
  </Container>
}