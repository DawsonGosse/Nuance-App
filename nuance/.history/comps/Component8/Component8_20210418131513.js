import React from 'react'; 
import styled from 'styled-components'; 

const Component8Cont = styled.div     
`    
    width: 374px;
    height: 240px;
    background-color: black;
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
    width: 180px;
    height: 33px;
    background:${props=>props.bgcolor};
    border-radius: 0px 0px 3px 3px;

    position:absolute;
    z-index:1;
 
    display: flex;
    justify-content: center;
    align-items: flex-end;        
`;

const Component8BannerText = styled.h3
`
    font-style: italic;
    font-weight: bold;
    font-size: 36px;
    line-height: 41.4px;
    color: #FFFFFF;
`
const TopicButtonLargeUI = ({     
    bgcolor='#8BB09C',
    src='/world_default.png',
    bannertext='NEXT',    
}) => 
{
    return <Component8Cont>
        <Component8Banner>bgcolor={bgcolor}</Component8Banner>
        <Component8BannerText>{bannertext}</Component8BannerText>
        <Component8Img src={src}></Component8Img>
    </Component8Cont>
}

export default Component8UI;