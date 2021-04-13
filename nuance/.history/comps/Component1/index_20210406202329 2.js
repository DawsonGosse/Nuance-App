import React from 'react';
import styled from 'styled-components';

const Component1Cont = styled.div`
    width:340px;
    height:296px;
    background-color:#FAD;
    overflow:hidden;
`;

const Component1Img = styled.img`
    filter:brightness(67%);

    
`;


const Component1UI = ({

}) => 
{
    return <Component1Cont>
        <Component1Img></Component1Img>
        <div>
           <h5>Cereal Or Milk First?</h5> 
           <p></p>
        </div>
    </Component1Cont>
}

export default Component1UI;