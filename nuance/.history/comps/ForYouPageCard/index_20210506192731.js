import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const PromptCont = styled.div`
    width:333px;
    height:198px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    position:relative;
    margin:25px;
    transition: all .2s ease-in-out;

    &:hover
    {
        transform: scale(1.02);
    }
    box-shadow: 2px 4px 5px 0px #00000059;

`;

const Component1Header = styled.div`
    background-color:${props=>props.bgcolor};
    width:237px;
    height:44px;
    position:absolute;
    z-index:1;
    top:27px;
    left:-6px;
`;

const Component1HeaderText = styled.h3`
    font-style: italic;
    font-weight: bold;
    font-size: 23px;
    color: #F5F5F5;
    margin-left:10px;
    text-transform:uppercase;

`;

const Component1Img = styled.img`
    filter:brightness(47%);
    object-fit:cover;
    overflow:hidden;
    
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



const PromptCardUI = ({
    bgcolor='#ECCD97',
    headertext='Featured',
    bodytext='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae eros a urna semper feugiat ut sed sem. Sed porta, arcu at elementum tempor.',
    src='/imagesample.png',
    routeTo='/home'
}) => 
{
    const router = useRouter();
    return <PromptCont onClick={()=>router.push(routeTo)}>
        <Component1Header bgcolor={bgcolor}><Component1HeaderText>{headertext}</Component1HeaderText></Component1Header>
        <Component1Img src={src}></Component1Img>
        <Component1TextCont>
           <Component1Text>{bodytext}</Component1Text>
        </Component1TextCont>
    </PromptCont>
}

export default PromptCardUI;