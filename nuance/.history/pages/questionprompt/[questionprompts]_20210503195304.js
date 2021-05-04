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

var questionpromptdata = 
{
    questiontext:'',
    questionimg:'',
    agreesrc:'',
    disagreesrc:''
}

export default function QuestionPrompts() {

    const router = useRouter();
    const {questionprompts} = router.query;

    if(questionprompts === 'Electric vehicles are a better option')
    {
        questionpromptdata.questiontext ='Electric vehicles are a better option'
        questionpromptdata.questionimg = '/CarImage1.png'
    }

    if(questionprompts === 'Countries should have open borders')
    {
        questionpromptdata.questiontext ='Countries should have open borders'
        questionpromptdata.questionimg = '/BorderImage.png'
    }

    if(questionprompts === 'COVID lock-downs are necessary and beneficial')
    {
        questionpromptdata.questiontext ='COVID lock-downs are necessary and beneficial'
        questionpromptdata.questionimg = '/CovidImage.png'
    }

    if(questionprompts === 'Universal Basic Income could solve poverty')
    {
        questionpromptdata.questiontext ='Universal Basic Income could solve poverty'
        questionpromptdata.questionimg = '/CarImage1.png'
    }

  return <Container>
    <BannerBackUI></BannerBackUI>
    <ImgCont>
        <Text>{questionpromptdata.questiontext}</Text>
        <ButtonAUI left="20px" text="AGREE" routeTo='/disagree' ></ButtonAUI>
        <ButtonAUI left="218px" text="DISAGREE" routeTo='/agree'></ButtonAUI>
        <Img src={questionpromptdata.questionimg}></Img>
    </ImgCont>
    <NavigationUI></NavigationUI>
  </Container>
}