import React from 'react'; 
import styled from 'styled-components';


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
`;

const Component7Img = styled.img                 // put image in public folder
`       

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
    src='/topic_image.png',
    bannertext='Topic Title', 
    onClick=()=>{}   
}) => 
{
    return <Component7Cont onClick=onClick={()=>router.push(routeTo)}>
        <Component7Img src={src}></Component7Img>
        <Component7Banner bgcolor={bgcolor}>
            {bannertext}
        </Component7Banner>
    </Component7Cont>
}

export default TopicButtonUI;