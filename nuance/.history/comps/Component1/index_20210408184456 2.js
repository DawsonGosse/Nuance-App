import React from 'react';
import styled from 'styled-components';

const Component1Cont = styled.div`
    width:340px;
    height:296px;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`;

const Component1Header = styled.div`
    background-color:#333;
    width:265px;
    height:60px;
    position:absolute;
    z-
`;

const Component1Img = styled.img`
    filter:brightness(47%);

    
`;

const Component1TextCont = styled.div`
    width:340px;
    display:flex;
    flex-direction:column;
    position:absolute;

`;
const Component1Text = styled.p`
    font-size:12px;
    margin:3px 35px 20px 12px;
    color:#FFF;

`;
const Component1SubHeader = styled.h5`
    font-size:14px;
    margin:3px 0px 0px 12px;
    color:#ECCD97;

`;


const Component1UI = ({

}) => 
{
    return <Component1Cont>
        <Component1Header></Component1Header>
        <Component1Img src="/imagesample.png"></Component1Img>
        <Component1TextCont>
           <Component1SubHeader>Cereal Or Milk First?</Component1SubHeader> 
           <Component1Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae eros a urna semper feugiat ut sed sem. Sed porta, arcu at elementum tempor.</Component1Text>
        </Component1TextCont>
    </Component1Cont>
}

export default Component1UI;