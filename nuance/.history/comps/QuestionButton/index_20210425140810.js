import React, { Component } from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router' 

const Component5Cont = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 53px;
    margin-top: 0px;
    align-items:center;
    border-top:1px solid #D9D9D9;
    justify-content:flex-start;
    
`

const Component5Text = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    font-weight:bold;
    font-size: 14px;
    color: #3E3D46;
    margin:0px 0px 0px 52px;
`

const Component5Arrow = styled.img`
    margin-right:5px;
`

const TextFlexCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
`

const QuestionButtonUI = ({
    text="Question Text",
    routeTo="/home"
}) => {
    const router = useRouter();
    return <Component5Cont onClick={()=>router.push(routeTo)}>
        <   TFlexCont>
            <Component5Text>{text}</Component5Text>   
        </FlexCont>
        <FlexCont>
            <Component5Arrow src='/ArrowRight.png'></Component5Arrow>
        </FlexCont>
    </Component5Cont>
}

export default QuestionButtonUI