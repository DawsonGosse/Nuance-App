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

`;


const Component1UI = ({

}) => 
{
    return <Component1Cont>
        <Component1Img></Component1Img>
        <Component1TextCont>
           <h5>Cereal Or Milk First?</h5> 
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae eros a urna semper feugiat ut sed sem. Sed porta, arcu at elementum tempor.</p>
        </Component1TextCont>
    </Component1Cont>
}

export default Component1UI;