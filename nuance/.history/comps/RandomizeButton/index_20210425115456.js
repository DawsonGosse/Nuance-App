import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const ButtonCont = styled.svg`

`

const RandomButtonUI = ({
    bgcolor='#3E3D46',
    text='NEXT',
    routeTo='/home',
}) => 
{
    const router = useRouter();
    return <ButtonCont>
        
    </ButtonCont>
}

export default RandomButtonUI;