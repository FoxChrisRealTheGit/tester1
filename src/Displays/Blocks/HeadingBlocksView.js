import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

import { Holder5, Holder7 } from '../../Components 1.0.0/Holders';
import Container1, { Container3 } from '../../Components 1.0.0/Containers';
import { 
    HorizontalTestBlock1,
    MainHeading1,
    MainHeading2,
    MainHeading3,
    MainHeading4,
    MainHeading5,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    SubHeading1,
    SubHeading2,
    SubHeading3,
    SubHeading4,
    SubHeading5,
    SecondarySubHeading1,
    SecondarySubHeading2,
    SecondarySubHeading3,
    SecondarySubHeading4,
    SecondarySubHeading5, } from '../../Components 1.0.0/Blocks';

import {
    SubNavbar1,
} from '../../Component/Blocks';

export default class HeadingBlocksView extends Component {
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
                        Headings
                    </MainHeading1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Default: Sans-serif
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        main headings
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder7>
                        <MainHeading1>
                            MainHeading1
                        </MainHeading1>
                        <MainHeading2>
                            MainHeading2
                        </MainHeading2>
                        <MainHeading3>
                            MainHeading3
                        </MainHeading3>
                        <MainHeading4>
                            MainHeading4
                        </MainHeading4>
                        <MainHeading5>
                            MainHeading5
                        </MainHeading5>
                    </Holder7>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        heading
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder7>
                        <Heading1>
                            Heading1
                        </Heading1>
                        <Heading2>
                            Heading2
                        </Heading2>
                        <Heading3>
                            Heading3
                        </Heading3>
                        <Heading4>
                            Heading4
                        </Heading4>
                        <Heading5>
                            Heading5
                        </Heading5>
                    </Holder7>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        subheadings
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder7>
                        <SubHeading1>
                            SubHeading1
                        </SubHeading1>
                        <SubHeading2>
                            SubHeading2
                        </SubHeading2>
                        <SubHeading3>
                            SubHeading3
                        </SubHeading3>
                        <SubHeading4>
                            SubHeading4
                        </SubHeading4>
                        <SubHeading5>
                            SubHeading5
                        </SubHeading5>
                    </Holder7>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        secondary subheadings
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder7>
                        <SecondarySubHeading1>
                            SecondarySubHeading1
                        </SecondarySubHeading1>
                        <SecondarySubHeading2>
                            SecondarySubHeading2
                        </SecondarySubHeading2>
                        <SecondarySubHeading3>
                            SecondarySubHeading3
                        </SecondarySubHeading3>
                        <SecondarySubHeading4>
                            SecondarySubHeading4
                        </SecondarySubHeading4>
                        <SecondarySubHeading5>
                            SecondarySubHeading5
                        </SecondarySubHeading5>
                    </Holder7>
                </Container1>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}