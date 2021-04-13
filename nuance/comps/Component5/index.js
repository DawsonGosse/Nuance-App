import React from 'react'
import styled from 'styled-components'

const Component5Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 374px;
    height: 46px;
`

const Component5Text = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    font-style: italic;
    font-size: 24px;
    color: #3E3D46;
    text-transform: uppercase;
    margin-top: 50px;
    margin-bottom: 12px;
`

const Component5Line = styled.hr`
    width: 374px;
    height: 0;
    border: 1px solid #D9D9D9;
`

const Component5UI = ({
    text="Question Text"
}) => {
    return <Component5Cont>
        <Component5Text>{text}</Component5Text>
        <Component5Line></Component5Line>
    </Component5Cont>
}

export default Component5UI