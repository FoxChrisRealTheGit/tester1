import React, { Component } from 'react';
import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import { Link } from 'react-router-dom';

import Container1 from '../Components 1.0.0/Containers';

import { Holder9, Holder5 } from '../Components 1.0.0/Holders';

import {
    SubHeading4,
    HorizontalTestBlock1,
    MainHeading1,
    SubNavbar1,
    Heading1,
    Heading2,
} from '../Components 1.0.0/Blocks';


export default class BlockViews extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <MainHeading1>
                        Blocks
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/containers">containers</Link>
                    <Link to="/holders">holders</Link>
                    <Link to="/blocks">blocks</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading2>
                        react-stylux
                    </Heading2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder9>
                        <SubHeading4>
                            <Link to="/blocks/headingviews">Heading Blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/navbarviews">Navbar Blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/paragraphviews">Paragraph Blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/imageviews">Image Blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/buttonviews">Button Blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/carouseltickerviews">Carsousels</Link>
                        </SubHeading4>
                    </Holder9>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading2>
                        react-stylux-blog
                    </Heading2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading4>
                            <Link to="/blocks/blog/featureviews">Feature Blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/blog/displayviews">Display Blocks</Link>
                        </SubHeading4>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading2>
                        react-stylux-ecommerce
                    </Heading2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        <Link to=""></Link>
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}