import React from 'react';
import styled from 'styled-components';
import Component1UI from '../Component1';

const Component2Cont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    width:344px;
`;

const Component2slider = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    position:absolute;
    left:60px;

`;

const Component2slidertext = styled.p`
    font-family: Arimo;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin: 0px;
    color: #3E3D46;
`;

const Component2slidericon = styled.img`
    width:10px;
    height:10px;
`;

const Component2graph = styled.div`
    width:334px;
    height:50px;
    border-radius:3px;
    background-color:#FAD;
    margin-top:30px;
`;

const Component2agree = styled.div`
    width:200px;
    height:50px;
    background: #8BB09C;
    border-radius: 3px 0px 0px 3px;
`;
const Component2agreeper = styled.p`
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
            <Component2slidertext>You</Component2slidertext>
            <Component2slidericon src="/Comp2SliderIcon.svg"></Component2slidericon>
        </Component2slider>
        <Component2graph>
            <Component2agree>
                <p>67%</p>
                <p>Agree</p>
            </Component2agree>
        </Component2graph>
    </Component2Cont>
}

export default Component2UI;