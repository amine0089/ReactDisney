import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

function Header() {
    return (
        <Nav>
            <Link to={'/'}>
                <Logo src='./images/logo.svg' />
            </Link>
            <NavMenu>
                <a>
                    <img src="./images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="./images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="./images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="./images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="./images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="./images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Link to={'/login'}>
                <UserImage src="https://randomuser.me/api/portraits/men/37.jpg" />
            </Link>
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    overflow-x: hidden;
    height: 70px;
    background: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`
const NavMenu = styled.div`
    display: flex;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img{
            width: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1px;
            position: relative;
            &:after{
                content: "";
                height: 2px;
                position: absolute;
                background: white;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
                transform: scaleX(0)
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
    @media (max-width: 800px){
        a{
            display: none;
        }
    }
`
const UserImage = styled.img`
    width: 45px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 250ms;
    &:hover{
        border: 3px solid rgba(249, 249, 249);;
    }
`