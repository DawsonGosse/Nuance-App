import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 



const ButtonUI = ({
    bgcolor='#3E3D46',
    text='NEXT',
    routeTo='/home',
}) => 
{
    const router = useRouter();
    return <Component6Cont bgcolor={bgcolor} onClick={()=>router.push(routeTo)}>
        <Component6Text>{text}</Component6Text>
    </Component6Cont>
}

export default ButtonUI;