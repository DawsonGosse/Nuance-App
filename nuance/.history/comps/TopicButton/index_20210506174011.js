import React from 'react'; 
import styled from 'styled-components';
import {useRouter} from 'next/router' 


const Component7Cont = styled.div     
`   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;   
    width: 180px;
    height: 135px;
    background-color: black;
    border-radius: 3px;
    margin:9px;

    &:hover
    {
        transform: scale(1.02);
    }
`;

const Component7Img = styled.img                 // put image in public folder
`       
    filter:${props=>props.inactive};
`;

const Component7Banner = styled.div       
`   
    width: 175px;
    height: 20px;
    background:${props=>props.bgcolor};
    border-radius: 0px 0px 3px 3px;
    padding: 5px 0px 0px 5px;
    user-select: none;

    position:relative;
    bottom: 20px;
    z-index: 1;
 
    display: flex;
    align-items: flex-end;  
    
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
`;

const TopicButtonUI = ({     
    bgcolor='#3E3D46',
    bgcolor='#3E3D46',
    src='/topic_image.png',
    bannertext='Topic Title', 
    routeTo='/home',
    inactive='grayscale(0%)',
    onClick=()=>{}
}) => 
{
    const router = useRouter();
    return <Component7Cont onClick={onClick}>
        <Component7Img inactive={inactive} src={src}></Component7Img>
        <Component7Banner bgcolor={bgcolor}>
            {bannertext}
        </Component7Banner>
    </Component7Cont>
}

export default TopicButtonUI;