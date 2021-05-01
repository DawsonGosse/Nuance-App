import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router' 

const BannerCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
`

const Component3Header = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
    font-family: 'Arimo', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: #3D3E46;
    text-transform: uppercase;
`

const BackButton = styled.div`
    position:absolute;
    left:23px;
`


const BannerBackUI = ({
        text='Nuance'
}) => {
    const router = useRouter();
    return <BannerCont>
        <BackButton src='/BackButton.png' onClick={()=>router.back()}></BackButton>
        <Component3Header>{text}</Component3Header>
    </BannerCont>
    
}

export default BannerBackUI