import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

const Component4Cont = styled.div`
   display: flex;
   justify-content: center;
   bottom: 0;
   width:100%;
   position:fixed;
   z-index: 1;
`
const Component4Nav = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFF;
    border-top: 1px solid #D9D9D9;
    min-width: 100%;
    height:70px;
    font-family: 'Arimo', sans-serif;
    color: #3D3E46;
    font-size: 10px;

`
const Component4NavHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 107px;
`

const Component4NavForYou = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 107px;
`

const Component4NavCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const Component4NavIcon =styled.div`
    padding: 4px;
`

const NavigationUI = ({
    routeTo1='/home',
    routeTo2='/foryou',
    routeTo3='/categories',

}) => {
    const router = useRouter();
    return <Component4Cont>
        <Component4Nav>
            <Component4NavHome onClick={()=>router.push(routeTo1)}>
                <Component4NavIcon src='/home_icon.svg'></Component4NavIcon>
                Home
            </Component4NavHome>
            <Component4NavForYou onClick={()=>router.push(routeTo2)}>
                <Component4NavIcon src='/foryou_icon.svg'></Component4NavIcon>
                For You
            </Component4NavForYou>
            <Component4NavCategories onClick={()=>router.push(routeTo3)}>
                <Component4NavIcon>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20H13V13H20V20ZM8 20H1V13H8V20ZM20 8H13V1H20V8ZM8 8H1V1H8V8Z" fill="#3E3D46" stroke="#3E3D46" stroke-width="2"/>
                    </svg>
                </Component4NavIcon>
                Categories
            </Component4NavCategories>
        </Component4Nav>
    </Component4Cont>
}

export default NavigationUI