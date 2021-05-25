import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autuplay:true,
    }
    return (
        <Carousel {...settings}>
            <Warp>
                <img src='/images/slider-badging.jpg'/>
            </Warp>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`

`;
const Warp = styled.div`

`;
