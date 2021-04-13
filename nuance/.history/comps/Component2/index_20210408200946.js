import React from 'react';
import styled from 'styled-components';
import Component1UI from '../Component1';

const Component2Cont = styled.div`
    display:flex;
`;

const Component2slider = styled.div`
    display:flex;
    flex-direction:column;
`;
const Component2slidertext = styled.p`
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #E5E5E5;
`;



const Component2UI = ({

}) => 
{
    return <Component2Cont>
        <Component2slider>
            <Component2slidertext></Component2slidertext>
            <div></div>
        </Component2slider>
        <div>
            <div>
                <p></p>
                <p></p>
            </div>
        </div>
    </Component2Cont>
}

export default Component2UI;