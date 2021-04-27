import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Component6Cont = styled.div`
    width: 180px;
    height: 60px;
    background-color: ${props=>props.bgcolor};
    border-radius: 3px;    
    border:;
    display: flex;
    justify-content: center;
    align-items: center;    
    `;
    
    const Component6Text = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    font-size: 18px;
    line-height: 20.7px;
    color: ${props=>props.color};
    font-style: normal;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.05em;
    `;

const ButtonUI = ({
    bgcolor='#3E3D46',
    text='NEXT',
    color='#E5E5E5',
    routeTo='/home',
}) => 
{
    const router = useRouter();
    return <Component6Cont bgcolor={bgcolor} onClick={()=>router.push(routeTo)}>
        <Component6Text color={color}>{text}</Component6Text>
    </Component6Cont>
}

export default ButtonUI;