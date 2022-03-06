import React from "react"
import tw from "twin.macro"
import { Logo } from "../Logo";
import { Link } from "react-scroll";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

const FootContainer = tw.div`
        flex
        flex-col
        w-full
        h-96
        bg-dark-blue-500
        mt-10
        pt-6
        pl-2
        pr-2
        lg:pt-14
        lg:pr-16
        lg:pl-16
        text-white
        items-center
    `;

    const Wrapper = tw.div`
        flex
        flex-col
        w-full
        h-full
        justify-center
    `;

    const TopSection = tw.div`
        flex
        w-full
        justify-center
        lg:justify-start
    `;

    const InnerSection = tw.div`
        flex
        flex-col
        flex-wrap
        justify-between
        lg:justify-start
        lg:flex-row
        pt-16
        h-full
        w-full
    `;

    const LeftSection = tw.div`
        flex
        flex[5]
        w-full
        h-full
        justify-between
        lg:justify-start
    `;

    const Menu = tw.ul`
        list-none
        lg:pl-4
        lg:pr-20
    `;

    const MenuItem = tw.ul`
        flex
        text-white
        text-sm
        lg:text-base
        mt-2
    `;

    const RightSection = tw.div`
        flex
        flex-col
        lg:flex-row
        flex[1]
        w-full
        h-full
        mb-5
        lg:mb-0
        flex-wrap
    `;

    const BottomSection = tw.div`
        flex
        flex-wrap
        w-full
        items-center
        justify-between
        border-t
        border-t-gray-300
        border-opacity-50
        pl-4
        pr-4
    `;

    const Copyright = tw.span`
        text-center
        font-size[x-small]
        lg:flex-row
        w-full
        lg:w-auto
    `;

    const SmallText = tw.span`
        lg:flex-row
        font-size[small]
    `;

    const SocialMedia = tw.div`
        flex
        justify-center
    `;

    const Icon = tw.div`
        flex
        h-6
        mr-4
        cursor-pointer
        transition-colors
        hover:text-gray-300
    `;

export function Footer() {

    return (
        <FootContainer>
            <Wrapper>
                <TopSection>
                    <Logo></Logo>
                </TopSection>
                <InnerSection>
                    <LeftSection>
                        <Menu>
                            <MenuItem>
                                <Link to="Home">Home</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="Explore">Explore</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="TravelPlaces">Travel Places</Link>
                            </MenuItem>
                        </Menu>
                        <Menu>
                            <MenuItem>
                                <Link to="#">About Us</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="# ">Contact Us</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="#">Our Travel Terms</Link>
                            </MenuItem>
                        </Menu>
                        <Menu>
                            <MenuItem>
                                <Link to="#">Company</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="#">Careers</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to="#">Travel Guide</Link>
                            </MenuItem>
                        </Menu>
                    </LeftSection>
                    <RightSection>
                        <SocialMedia>
                            <Icon><SiFacebook size={25}/></Icon>
                            <Icon><SiInstagram size={25}/></Icon>
                            <Icon><SiTwitter size={25}/></Icon>
                        </SocialMedia>
                    </RightSection>
                </InnerSection>
                <BottomSection>
                    <Copyright>
                        © {new Date().getFullYear()} TRAVELYA. All rights reserved.
                    </Copyright>
                    <SmallText>
                        <a href="#">Terms of Service</a>
                    </SmallText>
                    <SmallText>
                        <a href="#">Privacy Policy</a>
                    </SmallText>
                    <SmallText>
                        <a href="#">Security</a>
                    </SmallText>
                    <SmallText>
                        <a href="#">Sitemap</a>
                    </SmallText>
                </BottomSection>
            </Wrapper>
        </FootContainer>
    )
}