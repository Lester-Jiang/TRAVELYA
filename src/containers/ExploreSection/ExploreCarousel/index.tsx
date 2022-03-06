import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {useState, useRef, useEffect, useCallback} from "react";

import BaliTempleImg from "../../../images/bali-temple.jpg";
import RiceTerraceImg from "../../../images/rice-terrace.jpg";
import ExoticBromoImg from "../../../images/exotic-bromo.jpg";
import MaleMaldivesImg from "../../../images/male-maldives.jpg";
import IceTeaImg from "../../../images/ice-tea.jpg";

const CarouselDiv = tw.div`
    w-full
    h-full
    flex
    flex-row
    items-center
    mt-6
    2xl:max-w-2xl
    xl:max-w-2xl
    lg:max-w-xl
    md:max-w-xs
    sm:max-w-sm
    relative
    overflow-hidden
`;

const CarouselWrapper = tw.div`
    // w-full
`;

const CarouselWrapperInside = tw.ul`
    relative
    h-full
    overflow-hidden
`;

const CarouselItem = tw.li`
    float-left
    2xl:max-w-2xl
    xl:max-w-2xl
    lg:max-w-xl
    md:max-w-xs
    sm:max-w-sm
    w-screen
    h-full
`;

const CarouselItemImage = tw.ul`
    w-full
    h-full
    margin-left[0.5%]
    margin-top[0.8%]
`;

const CarouselItemImageLi = tw.li`
    width[2.5%]
    margin-right[0.5%]
    float-left
    cursor-pointer
    border-4
    border-white
    hover:border-black
    padding[0.1em]
`;

const CarouselDotArea = tw.div`
    absolute
    bottom[20%]
    left-1/2
    translate-x-[-50%]
`;

const CarouselDot = tw.div`
    width[0.6em]
    height[0.6em]
    border-radius[50%]
    background-color[white]
    float-left
    margin-right[1em]
`;

// 2xl:max-w-2xl
//     xl:max-w-2xl
//     lg:max-w-xl
//     md:max-w-xs
//     sm:max-w-sm

const CarouselLeft = tw.div`
    width[2em]
    // background-color[green]
    absolute
    left-0
    top[40%]
    text-align[center]
    transition-colors
    duration-200
    hover:background-color[gray]
    opacity-40
    cursor-pointer
    font-size[2em]
    color[white]
`;

const CarouselRight = tw.div`
    width[2em]
    // background-color[green]
    absolute
    right-0
    top[40%]
    text-align[center]
    transition-colors
    duration-200
    hover:background-color[gray]
    opacity-40
    cursor-pointer
    font-size[2em]
    color[white]
`;

function ExploreCarousel(){
    const imgList = [BaliTempleImg, RiceTerraceImg, ExoticBromoImg, MaleMaldivesImg, IceTeaImg];
    
    const [carouselWidth, setCarouselWidth] = useState(0);

    const [carouselHeight, setCarouselHeight] = useState(0);

    const [timer, setIntTimer] = useState(setInterval(()=>{}));

    const [currentBorder, setCurrentBorder] = useState(0);

    const [boolCheck, setBoolCheck] = useState(true);

    const smallClick = (index:number)=>{
        const CarouselDotAreaId = document.getElementById("CarouselDotAreaId");
        const CarouselDotAreaIdChildrenFirst = CarouselDotAreaId?.getElementsByTagName("div");
        if(CarouselDotAreaIdChildrenFirst!==undefined){
            CarouselDotAreaIdChildrenFirst[currentBorder].style.backgroundColor = "white";
            CarouselDotAreaIdChildrenFirst[index].style.backgroundColor="black";
        }
        
        let Large_id = document.getElementById("CarouselWrapperInside");
        let CarouselItem_class = document.getElementsByClassName("CarouselItem_class")[0];
        clearInterval(timer);
        if(Large_id !== null){
            let start = +Large_id.style.left.slice(1,-2);
            let end = index*(CarouselItem_class.clientWidth);
            setTimer(start, end, Large_id);
        }
        const CarouselItemImageId = document.getElementById("CarouselItemImageId");
        const CarouselItemImageIdChildren = CarouselItemImageId?.getElementsByTagName("li");
        if(CarouselItemImageIdChildren!==undefined){
            CarouselItemImageIdChildren[currentBorder].style.borderColor = "white";
            CarouselItemImageIdChildren[index].style.borderColor="black";
            setCurrentBorder(index);
        }

    }

    const leftClick = ()=>{
        if(currentBorder!==0){
            smallClick(currentBorder-1);
        }
    }

    const rightClick = ()=>{
        if(currentBorder!==imgList.length-1){
            smallClick(currentBorder+1);
        }
    }

    const setTimer=(start:number, end:number, id:any)=>{
        setIntTimer(setInterval(() => {
            start = start+(end-start)/10;
            id.style.left = `-${start}px`;
            if(Math.round(start)===end){
                start = end;
                id.style.left = `-${start}px`;
                clearInterval(timer);
            }
        }, 10));
    }

    useEffect(() => {
        // 、、、、、
        let CarouselDiv_id = document.getElementById("CarouselDiv");
        let CarouselWrapperInside_id = document.getElementById("CarouselWrapperInside");
        let CarouselItem_class = document.getElementsByClassName("CarouselItem_class")[0];
        window.addEventListener("resize",function(){
            if(CarouselDiv_id!==null){
                setCarouselWidth(CarouselDiv_id.clientWidth*imgList.length);
            }
            // if(CarouselWrapperInside_id!==null){
            //     setCarouselHeight(CarouselWrapperInside_id.clientHeight);
            // }
        })
        if(CarouselDiv_id!==null){
            setCarouselWidth(CarouselDiv_id.clientWidth*imgList.length);
            
        }
        // if(CarouselWrapperInside_id!==null){
        //     setCarouselHeight(CarouselWrapperInside_id.clientHeight);
        // }
        
        
        const CarouselDotAreaId = document.getElementById("CarouselDotAreaId");
        const CarouselDotAreaIdChildrenFirst = CarouselDotAreaId?.getElementsByTagName("div")[0];
        const CarouselItemImageId = document.getElementById("CarouselItemImageId");
        const CarouselItemImageIdChildrenFirst = CarouselItemImageId?.getElementsByTagName("li")[0];
        if (CarouselItemImageIdChildrenFirst!==undefined && boolCheck && CarouselDotAreaIdChildrenFirst!== undefined){
            CarouselDotAreaIdChildrenFirst.style.backgroundColor="black";
            CarouselItemImageIdChildrenFirst.style.border = "4px solid black";
            setBoolCheck(false);
        }
    },[carouselWidth, carouselHeight])

    return(
        <CarouselDiv id="CarouselDiv">
            <CarouselWrapper>
                <CarouselWrapperInside id="CarouselWrapperInside" style={{width:carouselWidth}}>
                    {
                        imgList.map((item, index)=>{
                            return(
                                <CarouselItem className="CarouselItem_class" key={index}>
                                    <img src={item}/>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselWrapperInside>
                <CarouselLeft onClick={()=>{leftClick()}}>&#60;</CarouselLeft>
                <CarouselRight onClick={()=>{rightClick()}}>&#62;</CarouselRight>
                    
                

                <CarouselDotArea id="CarouselDotAreaId">
                    {
                        imgList.map((item,index)=>{
                            return(<CarouselDot key={index} onClick={()=>{smallClick(index)}}></CarouselDot>)
                        })
                    }
                </CarouselDotArea>
                <CarouselItemImage id="CarouselItemImageId">
                    {imgList.map((item,index)=>{
                        return(
                            <CarouselItemImageLi key={index} onClick={()=>smallClick(index)}>
                                <img src = {item}/>
                            </CarouselItemImageLi>
                        )
                    })}
                </CarouselItemImage>
                
            </CarouselWrapper>
        </CarouselDiv>
    )
}

export {ExploreCarousel};