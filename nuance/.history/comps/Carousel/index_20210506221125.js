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

`

const Carousel = ({
    imgdata=default_data
})=> {

    return <Cont>
    Carousel
    <Card src></Card>
</Cont>

}
export default Carousel;