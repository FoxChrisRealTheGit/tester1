import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

import Container1 from '../../Components 1.0.0/Containers';

import {Holder5} from '../../Components 1.0.0/Holders';
import {
    MainHeading1,
    Heading1,
    HorizontalTestBlock1,
    SubHeading4,
    Navbar1,
    Navbar2,
    Navbar3,
    Navbar4,
    Navbar5,
    SubNavbar1,
    SubNavbar2,
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
} from '../../Components 0.5.0/Blocks';

import Logo from '../../images/Logo/QuickFirstDraft.svg';

export default class NavBarBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/blocks/buttonviews">Button</Link>
                    <Link to="/blocks/headingviews">Headings</Link>
                    <Link to="/blocks/imageviews">Images</Link>
                    <Link to="/blocks/navbarviews">NavBars</Link>
                    <Link to="/blocks/paragraphviews">Paragraphs</Link>
                </SubNavbar1>
                <Container1>
                    <MainHeading1>
                        Navbars
                    </MainHeading1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
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
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Navbar2
                    </SubHeading4>
                    <Navbar2>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar2>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Navbar3
                    </SubHeading4>
                    <Navbar3>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar3>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Navbar4
                    </SubHeading4>
                    <Navbar4>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar4>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Navbar5
                    </SubHeading4>
                    <Navbar5>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar5>
                </Holder5>
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
                    <SubNavbar1>
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
            </section>
        )
    }
}