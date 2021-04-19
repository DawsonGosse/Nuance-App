import React from 'react'
import styled from 'styled-components'

const ProgressBarCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 322px;
    height: 18px;
    border-radius: 20px;
    padding-bottom: 40px;
`

const ProgressBar = styled.div`
    width: 100%;
    height: 18px;
    background-color: #D0E2D8;    
    border-radius: 20px;
    z-index: 0;
`

const ProgressBarMove = styled.div`
    width: 10%;
    height: 18px;
    background-color: #8BB09C;    
    border-radius: 20px;
`

const ProgressBarUI = ({}) => 
{
    return <ProgressBarCont>
        <ProgressBar>
            <ProgressBarMove></ProgressBarMove>
        </ProgressBar>
    </ProgressBarCont>
}

export default ProgressBarUI