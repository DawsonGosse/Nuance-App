import React from 'react';
import styled from 'styled-components';

const Component9Cont = styled.div`
    width: 256px;
    height: 256px;
    background-color: ${props=>props.bgcolor};
    border: solid black 3px;
    text-align: center;    
    display: flex;
    justify-content: center;
    align-items: center;  
    animation: spin 1s ease-in-out 1s infinite;
    
`;

const Component9Text = styled.h3`
    font-weight: bold;
    font-size: 36px;
    line-height: 41.4px;
    color: #000000;
`;

const LogoUI = ({
    bgcolor='#FFFFFF',
    text='NUANCE',    
}) => 
{
    return <Component9Cont bgcolor={bgcolor}>
        <Component9Text>{text}</Component9Text>
    </Component9Cont>
}

export default LogoUI;