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
const Path = styled.path`
    &:hover{
        fill:#8bb09c;
    }
`

const HelpButtonCont = styled.div`
    position: absolute;
    right: 23px;
`

const BannerBackUI = ({
        text='Nuance',

}) => {
    const router = useRouter();
    return <BannerCont>
        <BackButton onClick={()=>router.back()}>
        <svg width="21" height="34" viewBox="0 0 21 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M0 17L17.0003 34L21 30.0003L7.98815 16.9887L21 3.97704L17.0003 0L0 17Z" fill="#3D3E46"/>
        </svg>
        </BackButton>
        <Component3Header>{text}</Component3Header>
        <HelpButtonCont>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M15.5015 31C6.94418 30.9906 0.00939761 24.0565 0 15.5V15.19C0.170411 6.67205 7.18433 -0.11164 15.7041 0.00139224C24.2239 0.114424 31.0553 7.08179 30.9997 15.6013C30.944 24.1208 24.0221 30.9983 15.5015 31ZM15.4767 27.9H15.5015C22.3481 27.8932 27.8938 22.3397 27.8904 15.4938C27.887 8.64792 22.3357 3.10003 15.4891 3.10003C8.64255 3.10003 3.09133 8.64792 3.08791 15.4938C3.08449 22.3397 8.63016 27.8932 15.4767 27.9ZM17.0517 24.8H13.9514V21.7H17.0517V24.8ZM17.0517 20.15H13.9514C13.9024 18.1314 14.953 16.2452 16.6952 15.2241C17.7183 14.4398 18.6019 13.764 18.6019 12.4C18.6019 10.6879 17.2138 9.30002 15.5015 9.30002C13.7893 9.30002 12.4012 10.6879 12.4012 12.4H9.30093V12.2605C9.32585 10.0455 10.5307 8.01198 12.4616 6.92604C14.3926 5.8401 16.7563 5.86669 18.6623 6.99579C20.5683 8.12489 21.7271 10.185 21.7022 12.4C21.5912 14.0725 20.694 15.5934 19.2839 16.4998C18.0092 17.2999 17.1831 18.6509 17.0517 20.15Z" fill="#2E3A59"/></svg>
        </HelpButtonCont>
    </BannerCont>
    
}

export default BannerBackUI