import React from "react";
import styled from 'styled-components';
import tw from "twin.macro";
import { NavBar } from "../../components/NavBar";
import BackgroundImage from "../../images/indonesia-high-res.jpg";
import {BsArrowDownCircleFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import {useDispatch, useMappedState} from 'redux-react-hook';
import {useState, useRef, useEffect} from "react";


const TopSectionContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        h-screen
        inset-0
        relative
    `}
`;

const Background = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        h-screen
    `}
    background-image: url(${BackgroundImage}),
    linear-gradient(to left, #005b9c, #b1d1b148);
    background-size: cover;
    background-position: bottom 10% left;
    background-blend-mode: overlay;
`;

const InfoSection = tw.div`
    absolute
    top[150px]
    left-3
    lg:top[150px]
    lg:right-10
    lg:left-auto
    xl:top[150px]
    xl:right-10
    xl:left-auto
    2xl:top[150px]
    2xl:right-28
    2xl:left-auto
`;

const FloatingText = tw.div`
    font-black
    font-size[40px]
    text-white
    m-0
    line-height[5px]
    md:font-size[100px]
    md:line-height[70px]
    lg:font-size[125px]
    lg:line-height[90px]
    xl:font-size[140px]
    xl:line-height[100px]
    2xl:font-size[160px]
    2xl:line-height[125px]
    font-family["Archivo Narrow"]
    flex
    items-center
`;

const OutlinedTextSvg = styled.svg`
  font: bold 40px Century "Archivo Narrow", Arial;
  ${tw`
        width[100px]
        height[100px]
        lg:width[730px]
        lg:height[130px]
        2xl:width[550px]
        2xl:height[110px]
        flex
    `};
  overflow: overlay;

  text {
    max-height: 100%;
    flex: 1;
    fill: none;
    stroke: white;
    stroke-width: 2px;
    stroke-linejoin: round;
    z-index: 99;
    ${tw`
      2xl:transform[translateY(113px)]
      lg:transform[translateY(120px)]
      md:transform[translateY(90px)]
      transform[translateY(65px)]
    `};
    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);
  }
`;

const DescriptionText = tw.div`
    text-white
    text-opacity-80
    max-w-xs
    text-xl
    mt-10
    lg:max-w-lg
    2xl:max-w-xl
    lg:text-lg
`;

const LoadMore = tw.div`
    absolute
    bottom-10
    text-white
    left-1/2
    -translate-x-1/2
    text-4xl
    transition-colors
    duration-200
    hover:text-green-400
`;

export function TopSection(){
    const mapState = (state:any) =>({
        scrollDown: state.getIn(["explore", "scrollDown"])
    })

    const {scrollDown} = useMappedState(mapState);

    const [clickBoolean, setClickBoolean] = useState(false);
    

    const clickScrollDown = ()=>{
        setClickBoolean(!clickBoolean);
        console.log("sdfsdf");
    }

    let value = document.documentElement.scrollTop || document.body.scrollTop
    useEffect(() => {
        let timer = setInterval(() => {
            if(value===undefined){
                value=0
            }
            value=value+(scrollDown-value)/20;
            window.scrollTo(0,value);
            window.addEventListener("mousewheel", function(e) {
                clearInterval(timer);
            }, false);
            if(Math.round(value)===scrollDown){
                value = scrollDown;
                clearInterval(timer);
            }
          }, 20);
        return () => {
            clearInterval(timer);
        };
    }, [clickBoolean])

    
    
    return(
        <TopSectionContainer id="topSection">
            <Background>
                <NavBar/>
                <InfoSection>
                    <FloatingText>WORLD</FloatingText>
                    <FloatingText>OF 
                        <OutlinedTextSvg><text>PARADISE,</text></OutlinedTextSvg>
                    </FloatingText>
                    <FloatingText>INDONESIA.</FloatingText>
                    <DescriptionText>
                        Let's explore of the third largest countries in the world, namely
                        indonesia. Enjoy 3 vacation packages at competitive prices and
                        strong soul.
                    </DescriptionText>
                </InfoSection>
                <LoadMore onClick={clickScrollDown}>
                    <BsArrowDownCircleFill/>
                </LoadMore>
                {/* <LoadMore>
                    <Link to="Explore" smooth={"easeInOutQuad"} duration={1500}>
                        <BsArrowDownCircleFill/>
                    </Link>
                </LoadMore> */}
            </Background>
        </TopSectionContainer>
    )
}