import React, { Component } from 'react';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';
import { Link } from 'react-router-dom';

import Container1 from '../../Components 1.0.0/Containers';

import { Holder5 } from '../../Components 1.0.0/Holders';

import {
    MainHeading1,
    Heading1,
    HorizontalTestBlock1,
    SubHeading4,
    Navbar1,
    SubNavbar2,
    SubNavbar1,
    SubNavbar3,
    SubNavbar4,
    SubNavbar5,
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    DropDownNav1,
    DropDownNav2,
    DropDownNav3,
    DropDownNav4,
    DropDownNav5
} from '../../Components 1.0.0/Blocks';

import Logo from '../../images/Logo/QuickFirstDraft.svg';

export default class NavBarBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <MainHeading1>
                        Navbars
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/blocks/buttonviews">button</Link>
                    <Link to="/blocks/headingviews">headings</Link>
                    <Link to="/blocks/imageviews">images</Link>
                    <Link to="/blocks/navbarviews">navbars</Link>
                    <Link to="/blocks/paragraphviews">paragraphs</Link>
                    <Link to="/blocks/carouseltickerviews">carsousels</Link>
                    <Link to="/blocks/listviews">Lists</Link>
                    <Link to="/blocks/formviews">Forms</Link>
                    <Link to="/blocks/tableviews">Tables</Link>
                    <Link to="/blocks/binviews">Bins</Link>
                </SubNavbar1>


                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading4>
                            Navbar1
                        </SubHeading4>
                        <Navbar1>
                            <Link to="/blocks/navbarviews">item1</Link>
                            <Link to="/blocks/navbarviews">item2</Link>
                            <Link to="/blocks/navbarviews">item3</Link>
                            <Link to="/blocks/navbarviews">item4</Link>
                            <Link to="/blocks/navbarviews">item5</Link>
                        </Navbar1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading4>
                            Navbar1
                        </SubHeading4>
                        <Navbar1
                            height='100px'
                            padding='0 7%'
                            navbarWidth='20%'
                            align="flex-end">
                            <Link to="twitter.com"></Link>
                            <Link to="facebook.com"></Link>
                            <Link to="linkedin.com"></Link>
                            <Link to="dribbble.com"></Link>
                            <Link to="youtube.com"></Link>
                        </Navbar1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading4>
                            Navbar1
                        </SubHeading4>
                        <Navbar1
                            direction="column"
                            columnAlign='flex-start'
                            padding="0 0 0 7%">
                            <Link to="/blocks/navbarviews">item1</Link>
                            <Link to="/blocks/navbarviews">item2</Link>
                            <Link to="/blocks/navbarviews">item3</Link>
                            <Link to="/blocks/navbarviews">item4</Link>
                            <Link to="/blocks/navbarviews">item5</Link>
                        </Navbar1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Sub Navbars
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Sub Navbar1
                    </SubHeading4>
                    <SubNavbar1
                        padding="0 0 0 5%">
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar1>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Sub Navbar2
                    </SubHeading4>
                    <SubNavbar2>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar2>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Sub Navbar3
                    </SubHeading4>
                    <SubNavbar3>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar3>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Sub Navbar4
                    </SubHeading4>
                    <SubNavbar4>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar4>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Sub Navbar5
                    </SubHeading4>
                    <SubNavbar5>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar5>
                </Holder5>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Brand Stuff
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Brand1
                    </SubHeading4>
                    <Brand1>
                        {Logo}
                        Stylux
                    </Brand1>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Brand2
                    </SubHeading4>
                    <Brand2>
                        {Logo}
                    </Brand2>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Brand3
                    </SubHeading4>
                    <Brand3>
                        {Logo}
                    </Brand3>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Brand4
                    </SubHeading4>
                    <Brand3>
                        {Logo}
                    </Brand3>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Brand5
                    </SubHeading4>
                </Holder5>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        DropDown Navigation
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        DropDown Navigation 1
                    </SubHeading4>
                </Holder5>
                <Container1>
                    <Navbar1>
                        <DropDownNav1>
                            <Link to="/blocks/navbarviews">item1</Link>
                            <Link to="/blocks/navbarviews">item2</Link>
                            <Link to="/blocks/navbarviews">item3</Link>
                            <Link to="/blocks/navbarviews">item4</Link>
                            <Link to="/blocks/navbarviews">item5</Link>
                        </DropDownNav1>
                        <DropDownNav1>
                            <Link to="/blocks/navbarviews">item1</Link>
                            <Link to="/blocks/navbarviews">item2</Link>
                            <Link to="/blocks/navbarviews">item3</Link>
                            <Link to="/blocks/navbarviews">item4</Link>
                            <Link to="/blocks/navbarviews">item5</Link>
                        </DropDownNav1>
                        <DropDownNav1>
                            <Link to="/blocks/navbarviews">item1</Link>
                            <Link to="/blocks/navbarviews">item2</Link>
                            <Link to="/blocks/navbarviews">item3</Link>
                            <Link to="/blocks/navbarviews">item4</Link>
                            <Link to="/blocks/navbarviews">item5</Link>
                        </DropDownNav1>
                        <DropDownNav1>
                            <Link to="/blocks/navbarviews">item1</Link>
                            <Link to="/blocks/navbarviews">item2</Link>
                            <Link to="/blocks/navbarviews">item3</Link>
                            <Link to="/blocks/navbarviews">item4</Link>
                            <DropDownNav1>
                                <Link to="/blocks/navbarviews">item1</Link>
                                <Link to="/blocks/navbarviews">item2</Link>
                                <Link to="/blocks/navbarviews">item3</Link>
                                <Link to="/blocks/navbarviews">item4</Link>
                                <Link to="/blocks/navbarviews">item5</Link>
                            </DropDownNav1>
                            <Link to="/blocks/navbarviews">item5</Link>
                        </DropDownNav1>
                        <DropDownNav1>
                            <Link to="/blocks/navbarviews">item1</Link>
                            <Link to="/blocks/navbarviews">item2</Link>
                            <Link to="/blocks/navbarviews">item3</Link>
                            <Link to="/blocks/navbarviews">item4</Link>
                            <Link to="/blocks/navbarviews">item5</Link>
                        </DropDownNav1>
                    </Navbar1>
                </Container1>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        DropDown Navigation 2
                    </SubHeading4>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        DropDown Navigation 3
                    </SubHeading4>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        DropDown Navigation 4
                    </SubHeading4>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        DropDown Navigation 5
                    </SubHeading4>
                </Holder5>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}