import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Blob = styled.div`
    position:absolute;
    z-index:-1;
`


const BlobBig = ({

}) => 
{
    const router = useRouter();
    return <Blob>
    <svg width="408" height="307" viewBox="0 0 408 307" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M423.508 83.3379C470.567 307.935 353.187 354.664 288.616 349.954C354.856 359.077 144.136 350.895 90.2156 353.479C105.354 359.575 117.534 362.718 121.694 363.686C123.834 364.115 123.657 364.143 121.694 363.686C118.644 363.074 110.886 361.645 96.8823 359.636C71.9131 356.054 73.7832 354.267 90.2156 353.479C44.965 335.257 -26.7162 290.643 10.3707 198.814C74.0629 41.1096 172.894 57.0963 274.446 11.1139C355.688 -25.6722 407.672 43.9357 423.508 83.3379Z" fill="#E1E1E1"/>
    </svg>
    </Blob>
}

export default BlobBig;