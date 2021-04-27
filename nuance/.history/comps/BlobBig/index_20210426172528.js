import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Component6Cont = styled.div`
    width: 180px;
    height: 60px;
    background-color: ${props=>props.bgcolor};
    border-radius: 3px;    
    border:2px solid #3e3d46;
    display: flex;
    justify-content: center;
    align-items: center;    

    &:hover {
        background-color:#8bb09c;
        border:2px solid #8bb09c;
    }
    `;


const B = ({
    bgcolor='#3E3D46',
    text='NEXT',
    color='#E5E5E5',
    routeTo='/home',
}) => 
{
    const router = useRouter();
    return 
}

export default ButtonUI;