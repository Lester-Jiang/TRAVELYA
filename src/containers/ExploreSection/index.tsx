import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BaliTempleImg from "../../images/bali-temple.jpg";
import RiceTerraceImg from "../../images/rice-terrace.jpg";
import ExoticBromoImg from "../../images/exotic-bromo.jpg";
import MaleMaldivesImg from "../../images/male-maldives.jpg";
import IceTeaImg from "../../images/ice-tea.jpg";

import {useState, useRef, useEffect, useCallback} from "react";
// import * as constants from './store/constants';
// import {getOffsetTopAction} from './store/actionCreators';
import { actionCreators } from './store';
import {useDispatch, useMappedState} from 'redux-react-hook';

import {ExploreCarousel} from './ExploreCarousel';

const ExploreContainer = tw(Element)`
    flex
    flex-col
    relative
    items-center
    w-full
    h-screen
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
`;

const Title = tw.h1`
    text-lg
    text-gray-800
    font-bold
    text-center
    mt-0
    xl:text-3xl
    2xl:text-3xl
    lg:text-3xl
`;

const Constent = tw.div`
    mr-auto
    ml-auto
    text-center
    mt-1
    xl:mt-8
    2xl:mt-8
    lg:mt-10
    max-w-xl
    text-base
    pl-4
    pr-4
`;

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    items-center
    mt-6
    2xl:max-w-2xl
    xl:max-w-2xl
    lg:max-w-xl
    md:max-w-xs
    sm:max-w-sm
    overflow-hidden
`;

const Item = styled.div`
    ${tw`
            flex
            flex-col
            
        `}

    img {
        ${tw`
            max-w-full
            max-h-full
        `}
    }
`;

// const Img = tw.img`
//     max-w-full
//     max-h-full
//     sm: max-w-sm
// `;

const Description = tw.p`
    absolute
    bottom-10
    text-gray-300
    text-center
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    bg-black
    transform[translateX(-50%)]
`;


export function ExploreSection({index}:any) {
    // const [offsetTop, setOffsetTop] = useState(0);

    // useEffect(() => {
    //     let exploreId = document.getElementById("div12345");
    //     let offsetTop_value = exploreId?.offsetTop;
    //     setOffsetTop(offsetTop_value?offsetTop_value:0);
    //     const action = {
    //         type: 'scroll_down_value',
    //         value: offsetTop_value
    //     }
    //     store.dispatch(action);
    //     console.log(offsetTop_value)
    // }, [offsetTop]);

    const dispatch = useDispatch();

    const [offsetTopValue, setOffsetTopValue] = useState(actionCreators.getOffsetTopAction("div12345").value);

    const handleResize = () => {
        setOffsetTopValue(actionCreators.getOffsetTopAction("div12345").value);
    };

    // const imgList = [BaliTempleImg, RiceTerraceImg, ExoticBromoImg, MaleMaldivesImg, IceTeaImg];
    
    // let CarouselWrapperInside_id = document.getElementById("CarouselWrapperInside");

    // const [width, setWidth] = useState(CarouselWrapperInside_id?.clientWidth);


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        const action = actionCreators.getOffsetTopAction("div12345");
        dispatch(action);
        // 、、、、、
        let CarouselWrapperInside_id = document.getElementById("CarouselWrapperInside");
        if(CarouselWrapperInside_id !== null){
            // CarouselWrapperInside_id.style.left = "200px";
            // setWidth(CarouselWrapperInside_id.offsetWidth);
        }
        // 、、、、
        return ()=>window.removeEventListener("resize", handleResize);
    })

    return (
        <ExploreContainer name="Explore" id="div12345">
            <Title>Explore Travel Places</Title>
            <Constent>
            View our tour package and find out more about the places we will visit together on this journey to the beautifull of indonesia, exploring so many historical and amazing locations with the group and having so much fun.
            </Constent>
            
            {/* <ExploreSectionWrapper>
                <Carousel dynamicHeight={true}>
                    <Item>
                        <img src={BaliTempleImg} />
                        <Description>Bali Temple</Description>
                    </Item>
                    <Item>
                        <img src={RiceTerraceImg} />
                        <Description>Rice Terrace</Description>
                    </Item>
                    <Item>
                        <img src={ExoticBromoImg} />
                        <Description>Exotic Bromo</Description>
                    </Item>
                    <Item>
                        <img src={MaleMaldivesImg} />
                        <Description>Male Maldives</Description>
                    </Item>
                    <Item>
                        <img src={IceTeaImg} />
                        <Description>Ice Tea</Description>
                    </Item>
                </Carousel>
            </ExploreSectionWrapper> */}

            <ExploreSectionWrapper>
                <ExploreCarousel/>
            </ExploreSectionWrapper>
            
        </ExploreContainer>
    )
}