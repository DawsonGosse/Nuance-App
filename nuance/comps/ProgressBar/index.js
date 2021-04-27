import React from 'react'
import styled from 'styled-components'

const ProgressBarCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #FFF;
    padding: 10px;
    position: sticky;
    top: 0px;
`

const ProgressBar = styled.div`
    width: 322px;
    height: 18px;
    background-color: #D0E2D8;    
    border-radius: 20px;
    z-index: 0;
`

const ProgressBarMove = styled.div`
    height: 18px;
    background-color: #8BB09C;    
    border-radius: 20px;
`

const ProgressBarUI = ({}) => 
{
    function ScrollProgress() 
     {
        let progress = document.body.scrollTop || document.documentElement.scrollTop
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let scrolled = (progress / height) * 100
        document.getElementById("bar").style.width = scrolled + "%"
    }

    window.onscroll = function() {ScrollProgress()}
    
    return <ProgressBarCont>
        <ProgressBar>
            <ProgressBarMove id="bar"></ProgressBarMove>
        </ProgressBar>
    </ProgressBarCont>
}

export default ProgressBarUI