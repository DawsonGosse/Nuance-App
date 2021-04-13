import React from 'react';
import styled from 'styled-components';

const Component1Cont = styled.div`
    width:340px;
    height:296px;
    background-color:#FAD;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`;

const Component1Img = styled.img`
    filter:brightness(67%);

    
`;

const Component1TextCont = styled.div`
    width:340px;
    background-color:#BAD;
    display:flex;
    flex-direction:column;

`;
const Component1Text = styled.p`
    font-size:12px;
    margin:3px 35px 30px 12px;
    color:#FFF;

`;
const Component1Header = styled.h5`
    font-size:14px;
    margin:3px 0px 0px 12px;
    color:#ECCD97;

`;


const Component1UI = ({

}) => 
{
    return <Component1Cont>
        <Component1Img></Component1Img>
        <Component1TextCont>
           <Component1Header>Cereal Or Milk First?</Component1Header> 
           <Component1Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae eros a urna semper feugiat ut sed sem. Sed porta, arcu at elementum tempor.</Component1Text>
        </Component1TextCont>
    </Component1Cont>
}

export default Component1UI;