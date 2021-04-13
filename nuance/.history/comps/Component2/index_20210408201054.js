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
    font-size: 14px;
    line-height: 16px;
    color: #3E3D46;
`;

const Component2slidericon = styled.div`
    
`;

const Component2UI = ({

}) => 
{
    return <Component2Cont>
        <Component2slider>
            <Component2slidertext>You</Component2slidertext>
            <Component2slidericon></Component2slidericon>
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