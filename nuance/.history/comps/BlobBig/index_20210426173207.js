import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Blob = styled.div`
    position:absolute;
    z-index:-1;
    top:40px;
    left:40px;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
`


const BlobBig = ({

}) => 
{
    const router = useRouter();
    return <Blob>
   
    </Blob>
}

export default BlobBig;