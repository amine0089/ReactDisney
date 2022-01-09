import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"

function ImgSlider() {
    let settings = {
        dots : true,
        infinite : true,
        speed : 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Crousel {...settings}>
            <Wrap>
                <img src='/images/slider-badging.jpg' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-badag.jpg' />
            </Wrap>
            
        </Crousel>
    )
}

export default ImgSlider

const Crousel = styled(Slider)`
    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 150, 171);
        }  
    }
    li.slick-active button::before{
        color:white
    }
    .slick-list{
        overflow: visible;
    }
    button{
        z-index:1;
    }
`
const Wrap = styled.div`
    cursor: pointer;
    margin-top:20px;
    img{
        border: 4px solid transparent;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 4px solid rgb(249, 249, 249, 69%);
        }
    }
`