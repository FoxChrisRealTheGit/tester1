import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';

import Container1, { Container3 } from '../../Component/Containers';
import {
    Heading1,
    HorizontalTestBlock1,
    SubHeading2,
    Navbar1,
    Navbar2,
    Navbar3,
    Navbar4,
    Navbar5,
    SubNavbar1,
    SubNavbar2,
    SubNavbar3,
    SubNavbar4,
    SubNavbar5
} from '../../Component/Blocks';

export default class NavBarBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Navbars
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Navbar1
                    </SubHeading2>
                    <Navbar1>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Navbar2
                    </SubHeading2>
                    <Navbar2>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar2>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Navbar3
                    </SubHeading2>
                    <Navbar3>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar3>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Navbar4
                    </SubHeading2>
                    <Navbar4>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar4>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Navbar5
                    </SubHeading2>
                    <Navbar5>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </Navbar5>
                </Container3>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Sub Navbars
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Sub Navbar1
                    </SubHeading2>
                    <SubNavbar1>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Sub Navbar2
                    </SubHeading2>
                    <SubNavbar2>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar2>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Sub Navbar3
                    </SubHeading2>
                    <SubNavbar3>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar3>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Sub Navbar4
                    </SubHeading2>
                    <SubNavbar4>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar4>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Sub Navbar5
                    </SubHeading2>
                    <SubNavbar5>
                        <Link to="/blocks/navbarviews">item1</Link>
                        <Link to="/blocks/navbarviews">item2</Link>
                        <Link to="/blocks/navbarviews">item3</Link>
                        <Link to="/blocks/navbarviews">item4</Link>
                        <Link to="/blocks/navbarviews">item5</Link>
                    </SubNavbar5>
                </Container3>
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Brand Stuff
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Brand1
                    </SubHeading2>

                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Brand2
                    </SubHeading2>

                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Brand3
                    </SubHeading2>

                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Brand4
                    </SubHeading2>

                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Brand5
                    </SubHeading2>

                </Container3>
            </section>
        )
    }
}