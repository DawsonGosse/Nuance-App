import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const ButtonCont = styled.div`

`

const RandomButtonUI = ({
    bgcolor='#3E3D46',
}) => 


{
    const router = useRouter()

    return <ButtonCont onClick={Random}>
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="42.3135" y="27.8511" width="25.7616" height="25.7616" rx="3" transform="rotate(39.7189 42.3135 27.8511)" fill={bgcolor}/>
        <circle cx="53.8573" cy="45.1859" r="2.57616" transform="rotate(39.7189 53.8573 45.1859)" fill="white"/>
        <circle cx="34.1425" cy="47.0086" r="2.57616" transform="rotate(39.7189 34.1425 47.0086)" fill="white"/>
        <circle cx="37" cy="37" r="36" stroke={bgcolor} stroke-width="2"/>
        <rect x="18" y="18" width="25.7616" height="25.7616" rx="3" fill="white"/>
        <rect x="16.6194" y="16.6191" width="25.7616" height="25.7616" rx="3" fill={bgcolor}/>
        <circle cx="22.5762" cy="22.5762" r="2.57616" fill="white"/>
        <circle cx="29.5762" cy="29.5762" r="2.57616" fill="white"/>
        <circle cx="36.5762" cy="22.5762" r="2.57616" fill="white"/>
        <circle cx="22.5762" cy="36.5762" r="2.57616" fill="white"/>
        <circle cx="36.5762" cy="36.5762" r="2.57616" fill="white"/>
        </svg>
    </ButtonCont>
}

function Random()
{

    let question = Math.floor(Math.random() * 4);

    if(question === 0) 
    {
        location.href = '/questionprompt/Electric vehicles are a better option'
    }

    if(question === 1) 
    {
        location.href = '/questionprompt/Countries should have open borders'
    }

    if(question === 2) 
    {
        location.href = '/questionprompt/COVID lock-downs are necessary and beneficial'
    }

    if(question === 3) 
    {
        location.href = '/questionprompt/Universal Basic Income could solve poverty'
    }
}

export default RandomButtonUI