import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const ButtonCont = styled.svg`
width="74" 
height="74" 
viewBox="0 0 74 74" 
fill="none" 
xmlns="http://www.w3.org/2000/svg">
`

const RandomButtonUI = ({
    bgcolor='#3E3D46',
    text='NEXT',
    routeTo='/home',
}) => 
{
    const router = useRouter();
    return <ButtonCont>
        <rect x="42.3135" y="27.8511" width="25.7616" height="25.7616" rx="3" transform="rotate(39.7189 42.3135 27.8511)" fill="#3E3D46"/>
        <circle cx="53.8573" cy="45.1859" r="2.57616" transform="rotate(39.7189 53.8573 45.1859)" fill="white"/>
        <circle cx="34.1425" cy="47.0086" r="2.57616" transform="rotate(39.7189 34.1425 47.0086)" fill="white"/>
        <circle cx="37" cy="37" r="36" stroke="#3E3D46" stroke-width="2"/>
        <rect x="18" y="18" width="25.7616" height="25.7616" rx="3" fill="white"/>
        <rect x="16.6194" y="16.6191" width="25.7616" height="25.7616" rx="3" fill="#3E3D46"/>
        <circle cx="22.5762" cy="22.5762" r="2.57616" fill="white"/>
        <circle cx="29.5762" cy="29.5762" r="2.57616" fill="white"/>
        <circle cx="36.5762" cy="22.5762" r="2.57616" fill="white"/>
        <circle cx="22.5762" cy="36.5762" r="2.57616" fill="white"/>
        <circle cx="36.5762" cy="36.5762" r="2.57616" fill="white"/>
    </ButtonCont>
}

export default RandomButtonUI;