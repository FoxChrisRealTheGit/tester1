import React, { Component } from 'react';
import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import { Link } from 'react-router-dom';

import Container1 from '../Components 1.0.0/Containers';

import { Holder9 } from '../Components 1.0.0/Holders';

import {
    SubHeading4,
    HorizontalTestBlock1,
    MainHeading1,
    SubNavbar1,
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
                    <Holder9>
                        <SubHeading4>
                            <Link to="/blocks/headingviews">heading blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/navbarviews">navbar blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/paragraphviews">paragraph blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/imageviews">image blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/buttonviews">button blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/carouseltickerviews">carsousels</Link>
                        </SubHeading4>
                    </Holder9>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}