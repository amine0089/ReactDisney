import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <Container>
            <CTA>
                    <FirstLogo src = "/images/cta-logo-one.svg" />
                        <SignUp>
                            GET ALL THERE
                        </SignUp>
                    <Description>
                        Disney Plus Premier Access is a purchase option for Disney Plus subscribers, enabling members to pay an extra $30 one-time fee to gain early  streaming access to a movie that's still playing in theaters.
                    </Description>
                    <SecondLogo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: calc(100vh - 70px);
    &::before{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        background-image: url('/images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.8;
    }
`
const CTA = styled.div`
    max-width: 650px;
    width: 90%;    
    display: flex;
    flex-direction: column;
`
const FirstLogo = styled.img`
    
`
const SecondLogo = styled.img`
    margin: 8px auto 0 auto;
    width: 90%;
`
const SignUp = styled.a`
    width: 100%;
    font-weight: bold;
    text-align: center;
    background-color: #0063e5;
    padding: 17px 0px;
    cursor: pointer;
    border-radius: 10px;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.div`
        font-size: 12px;
        letter-spacing: 1.2px;
        text-align: center;
        line-height: 1.5;
`
