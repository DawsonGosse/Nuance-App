import React from 'react'; 
import styled from 'styled-components'; 

const Component7Cont = styled.div     
`    
    width: 180px;
    height: 135px;
    background-color: black;
    border-radius: 3px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;   
`;

const Component7Img = styled.img                 // put image in public folder
`       
    
`;

const Component7Banner = styled.div       
`   
    width: 180px;
    height: 20px;
    background:${props=>props.bgcolor};
    border-radius: 0px 0px 3px 3px;

    position:absolute;
    z-index:1;
 
    display: flex;
    justify-content: center;
    align-items: flex-end;        
`;

const Component7BannerText = styled.h3
`
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    line-height: 20.7px;
    color: #FFFFFF;
`
const Component7UI = ({     
    bgcolor='#3E3D46',
    src='/topic_image.png',
    bannertext='NEXT',    
}) => 
{
    return <Component7Cont>
        <Component7Banner>bgcolor={bgcolor}</Component7Banner>
        <Component7BannerText>{bannertext}</Component7BannerText>
        <Component7Img src={src}></Component7Img>
    </Component7Cont>
}

export default Component7UI;