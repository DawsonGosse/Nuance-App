import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Blob = styled.div`
    position:absolute;
    z-index:-1;
    top:0px;
    left:0px;
    animation: move 13s ease-in-out infinite;
    transform-origin: 50% 50%;
`


const BlobSmall = ({

}) => 
{
    const router = useRouter();
    return <Blob>
    
    </Blob>
}

export default BlobSmall;