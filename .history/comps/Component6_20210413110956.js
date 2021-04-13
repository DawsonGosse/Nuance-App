import React from 'react';
import styled from 'styled-components';

const Component6Cont = styled.div`
    width: 180px;
    height: 60px;
    background-color: ${props=>props.bgcolor};
    border-radius: 3px;    

    color: #E5E5E5;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.05em;

    display: flex;
    justify-content: center;
    align-items: center;    
`;

const Component6Text = styled.h3`
    font-style: italic;
    font-weight: bold;
    font-size: 30px;
    line-height: 34px;
    color: #F5F5F5;
`;

const Component6UI = ({
    bgcolor='#3E3D46',
    text='NEXT',    
}) => 
{
    return <Component6Cont>bgcolor={bgcolor}
        <Component6Text>{text}</Component6Text>
    </Component6Cont>
}

export default Component6UI;