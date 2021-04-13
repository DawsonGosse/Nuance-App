import React from 'react'
import styled from 'styled-components'

const Component4Cont = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-end;
 
`
const Component4Nav = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
    border-top: 1px solid #D9D9D9;
    width: 414px;
    height:70px;
    padding: 16px 58px 16px 58px;
    font-family: 'Arimo', sans-serif;
    color: #3D3E46;
    font-size: 10px;
`
const Component4NavHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const Component4NavForYou = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const Component4NavCategories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const Component4NavIcon =styled.img`
    display: flex;
    padding: 4px;
`

const Component4UI = ({
        

}) => {
    return <Component4Cont>
        <Component4Nav>
            <Component4NavHome>
                <Component4NavIcon src='/home_icon.svg'></Component4NavIcon>
                Home
            </Component4NavHome>
            <Component4NavForYou>
                <Component4NavIcon src='/foryou_icon.svg'></Component4NavIcon>
                For You
            </Component4NavForYou>
            <Component4NavCategories>
                <Component4NavIcon src='/categories_icon.svg'></Component4NavIcon>
                Categories
            </Component4NavCategories>
        </Component4Nav>
    </Component4Cont>
}

export default Component4UI