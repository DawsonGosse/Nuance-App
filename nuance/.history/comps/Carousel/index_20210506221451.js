import {useState, useEffect} from 'react';
import styled from 'styled-components';


const default_data = [
    'https://placekitten.com/50/50',
    'https://placekitten.com/100/100'
]

const Cont = styled.div
`

`
const Card = styled.img
`
    width:100px;
    height:100px;
    object-fit:cover;
`
on
const Carousel = ({
    imgdata=default_data
})=> {

    return <Cont>
    Carousel
    <Card src={imgdata[0]}></Card>
</Cont>

}
export default Carousel;