import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src='https://bingeddata.s3.amazonaws.com/uploads/2020/11/bao-1.jpg' />
            </Background>
            <ImageTitle>
                <img src="https://upload.wikimedia.org/wikipedia/fr/1/1a/Bao_logo.png" />
            </ImageTitle>
            <Control>
                    <PlayButton>
                        <img src='/images/play-icon-black.png' />
                        <span>PLAY</span>
                    </PlayButton>
                    <TrailerButton>
                         <img src='/images/play-icon-white.png' />
                         <span>TRAILER</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src='/images/group-icon.png' />
                    </GroupWatchButton>
            </Control>
            <SubTitel>
                2022 * 7m * Family, Kids, Animation
            </SubTitel>
            <Description>
                Bao is a 2018 American computer-animated short film written and directed by Canadian filmmaker Domee Shi, and produced by Pixar Animation Studios. It was screened at the Tribeca Film Festival before being released with Incredibles 2 on June 15, 2018. 
            </Description>
        </Container>
    )
}

export default Detail
const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    min-width: 200px;
    width: 30vw;
    margin: 30px 0px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Control = styled.div`
    display: flex;
    align-items:center;
    gap:24px;
    margin: 26px 0px;
`
const PlayButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0 24px;
    letter-spacing: 1.8px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 15px;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    &:hover{
        background: rgb(168, 168, 168);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 2px solid rgb(249, 249, 249);
     span{
        font-size: 30px;
        color:white;
     }

`
const GroupWatchButton = styled(AddButton)`
    background: rgba(0, 0, 0, 0.9);
`
const SubTitel = styled.div`
    margin: 22px 0px;
    color: rgb(249, 249, 249);
`
const Description = styled.div`
    color: rgb(249, 249, 249);
    line-height: 1.4;
    font-size: 20px;
    width:800px;
`