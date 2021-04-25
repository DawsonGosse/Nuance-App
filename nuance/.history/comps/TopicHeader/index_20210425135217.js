import React from 'react'; 
import styled from 'styled-components'; 

const Component8Cont = styled.div     
`  
    width: 100%px;
    height: 154px;
    border-radius: 3px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;   
`;

const Component8Img = styled.img                 // put image in public folder
`       
`;


const Component8BannerText = styled.p  
`
    position:absolute;
    bottom:-9px;
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap'); 
    font-family: 'Arimo', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    font-weight: bold;
    font-size: 36px;
    color: #FFFFFF;
    margin:0px;
    padding-left:10px;
`

const Component8Banner = styled.div       
`   
    width: 100%;
    height: 44px;
    background:${props=>props.bgcolor};
    border-radius: 0px 0px 3px 3px;
    position:absolute;
    display: flex;
    align-items: flex-end;   
    display: flex;
`

const TopicHeaderUI = ({     
    bgcolor='#8BB09C',
    src='/ClimateChangeHeaderImg.png',
    bannertext='next',    
}) => 

{
    return <Component8Cont>
        <Component8Img src={src}></Component8Img>
        <Component8Banner bgcolor={bgcolor}>
            <Component8BannerText>{bannertext}</Component8BannerText>
        </Component8Banner>
    </Component8Cont>
}

export default TopicHeaderUI;