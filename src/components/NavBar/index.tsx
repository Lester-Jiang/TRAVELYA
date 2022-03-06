import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../Logo";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { deviceSize } from "../responsive";
import { slide as Menu } from "react-burger-menu";
import style from "./Burger-menu";

import {Login} from "../../routers/Login";
import { Link as RouterLink } from "react-router-dom";

const NavBarContainer = styled.div`
    width: 90%;
    ${tw`
        flex
        border-b-gray-300
        border-opacity-50
        border-b-2
        items-center
        self-center
        pl-6
        pt-4
        h-20
        ml-auto
        mr-auto
    `}
`;

const NavBarItems = tw.ul`
    flex
    list-none
    w-full
    h-auto
    items-center
    self-center

    lg:ml-10
    md:ml-10
`;

const NavBarItem = tw.li`
    flex
    items-center
    self-center

    text-white
    cursor-pointer
    font-medium
    lg:pl-7
    md:pl-4
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
`;

export function NavBar (){
    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    const navItems = (
        <NavBarItems>
            <NavBarItem>
                <Link to="Home">Home</Link>
            </NavBarItem>
            <NavBarItem>
                <Link to="Explore">Explore</Link>
            </NavBarItem>
            <NavBarItem>
                <Link to="TravelPlaces">Travel Places</Link>
            </NavBarItem>
            <NavBarItem>
                <RouterLink to="/login">Login</RouterLink>
            </NavBarItem>
        </NavBarItems>
    );
    return(
    <NavBarContainer>
        <Logo/>
        {isMobile && (
        <Menu right styles={style}>
          {navItems}
        </Menu>
      )}
      {!isMobile && navItems}
    </NavBarContainer>
    )
}