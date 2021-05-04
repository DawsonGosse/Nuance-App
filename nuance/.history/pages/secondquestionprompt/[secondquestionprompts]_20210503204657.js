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
    agreesrc:'',
    disagreesrc:''
}

export default function SecondQuestionPrompts() {

    const router = useRouter();
    const {secondquestionprompts} = router.query;

    if(secondquestionprompts === 'Electric vehicles are a better option')
    {
        secondquestionpromptdata.questiontext ='Electric vehicles are a better option'
        secondquestionpromptdata.questionimg = '/CarImage1.png'
        secondquestionpromptdata.agreesrc = '/disagree/Electric vehicles are a better option'
        secondquestionpromptdata.disagreesrc = '/agree/Electric vehicles are a better option'
    }

    if(secondquestionprompts === 'Countries should have open borders')
    {
        secondquestionpromptdata.questiontext ='Countries should have open borders'
        secondquestionpromptdata.questionimg = '/BorderImage.png'
        secondquestionpromptdata.agreesrc = '/disagree/Countries should have open borders'
        secondquestionpromptdata.disagreesrc = '/agree/Countries should have open borders'
    }

    if(secondquestionprompts === 'COVID lock-downs are necessary and beneficial')
    {
        secondquestionpromptdata.questiontext ='COVID lock-downs are necessary and beneficial'
        secondquestionpromptdata.questionimg = '/CovidImage.png'
        secondquestionpromptdata.agreesrc = '/disagree/COVID lock-downs are necessary and beneficial'
        secondquestionpromptdata.disagreesrc = '/agree/COVID lock-downs are necessary and beneficial'
    }

    if(questionprompts === 'Universal Basic Income could solve poverty')
    {
        questionpromptdata.questiontext ='Universal Basic Income could solve poverty'
        questionpromptdata.questionimg = '/CarImage1.png'
        questionpromptdata.agreesrc = '/disagree/Universal Basic Income could solve poverty'
        questionpromptdata.disagreesrc = '/agree/Universal Basic Income could solve poverty'
    }

  return <Container>
    <BannerBackUI></BannerBackUI>
    <ImgCont>
        <Text>{questionpromptdata.questiontext}</Text>
        <ButtonAUI left="20px" text="AGREE" routeTo={questionpromptdata.disagreesrc}></ButtonAUI>
        <ButtonAUI left="218px" text="DISAGREE" routeTo={questionpromptdata.agreesrc}></ButtonAUI>
        <Img src={questionpromptdata.questionimg}></Img>
    </ImgCont>
    <NavigationUI></NavigationUI>
  </Container>
}