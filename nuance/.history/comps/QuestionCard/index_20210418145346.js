import React from 'react';
import styled from 'styled-components';

const Component1Cont = styled.div`
    width:340px;
    height:296px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    position:relative;
    margin:25px;
`;

const Component1Header = styled.div`
    background-color:${props=>props.bgcolor};
    width:265px;
    height:60px;
    position:absolute;
    z-index:1;
    top:34px;
    left:-5px;
`;

const Component1HeaderText = styled.h3`
    font-style: italic;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    color: #F5F5F5;
    margin-left:5px;
    text-transform:uppercase;

`;

const Component1Img = styled.img`
    filter:brightness(47%);

    background-size:contain;
    
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
    text-transform:uppercase;

`;
const Component1Line = styled.div`
position: absolute;
width: 140px;
height: 0px;
border: 1px solid #ECCD97;
left:197px;
top:10px;

`;


const QuestionCardUI = ({
    bgcolor='#333',
    headertext='Featured',
    subheadertext='Cereal Or Milk First?',
    bodytext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae eros a urna semper feugiat ut sed sem. Sed porta, arcu at elementum tempor.',
    src='/imagesample.png'
}) => 
{
    return <Component1Cont>
        <Component1Header bgcolor={bgcolor}><Component1HeaderText>{headertext}</Component1HeaderText></Component1Header>
        <Component1Img src={src}></Component1Img>
        <Component1TextCont>
            <Component1Line></Component1Line>
           <Component1SubHeader>{subheadertext}</Component1SubHeader> 
           <Component1Text>{bodytext}</Component1Text>
        </Component1TextCont>
    </Component1Cont>
}

export default QuestionCardUI;