import React from 'react'; 
import styled from 'styled-components'; 

const Component8Cont = styled.div     
`  
    width: 374px;
    height: 240px;
    border-radius: 3px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;   
`;

const Component8Img = styled.img                 // put image in public folder
`       
`;

const Component8Banner = styled.div       
`   
    width: 364px;
    height: 44px;
    background:${props=>props.bgcolor};
    border-radius: 0px 0px 3px 3px;
    position:absolute;
    display: flex;
    align-items: flex-end;  
    padding-bottom:0px; 
    display: flex;
    padding-left: 10px;

`

const Component8BannerText = styled.p  
`
@import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
`


const TopicButtonLargeUI = ({     
    bgcolor='#ECCD97',
    src='/world_default.png',
    bannertext='next',    
}) => 

{
    return <Component8Cont>
        <Component8Img src={src}></Component8Img>
        <Component8Banner bgcolor={bgcolor}>{bannertext}</Component8Banner>
    </Component8Cont>
}

export default TopicButtonLargeUI;