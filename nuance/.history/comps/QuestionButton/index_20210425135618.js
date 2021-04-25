import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router' 

const Component5Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 46px;
    margin-top: 50px;
    align-items:flex-start;
`

const Component5Text = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    font-weight:bold;
    font-size: 14px;
    color: #3E3D46;
    margin-left: 52px;
`

const Component5Line = styled.div`
    width: 100%;
    height: 1px;
    background:#D9D9D9;
`

const QuestionButtonUI = ({
    text="Question Text",
    routeTo="/home"
}) => {
    const router = useRouter();
    return <Component5Cont onClick={()=>router.push(routeTo)}>
<Component5Line></Component5Line>       
        <Component5Text>{text}</Component5Text>
        <Component5Line></Component5Line>
    </Component5Cont>
}

export default QuestionButtonUI