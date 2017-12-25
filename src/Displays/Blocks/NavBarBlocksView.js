import React, { Component } from 'react';
import Navigation from '../Navigation';

import Container1 from '../../Component/Containers';
import {
    HeadingTest1,
    HorizontalTestBlock1,
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
                    <HeadingTest1>
                        Navbars
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Navbar1>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </Navbar1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Navbar2>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </Navbar2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Navbar3>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </Navbar3>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Navbar4>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </Navbar4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Navbar5>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </Navbar5>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        Sub Navbars
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <SubNavbar1>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </SubNavbar1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubNavbar2>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </SubNavbar2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubNavbar3>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </SubNavbar3>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubNavbar4>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </SubNavbar4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubNavbar5>
                        item1,
                        item2,
                        item3,
                        item4,
                        item5
                    </SubNavbar5>
                </Container1>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}