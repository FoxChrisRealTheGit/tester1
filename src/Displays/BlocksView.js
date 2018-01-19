import React, { Component } from 'react';
import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import { Link } from 'react-router-dom';

import Container1 from '../Components 1.0.0/Containers';

import { Holder13, Holder5, Holder6 } from '../Components 1.0.0/Holders';

import {
    H34,
    HorizontalTestBlock1,
    H11,
    SubNavbar1,
    H22,
} from '../Components 1.0.0/Blocks';


export default class BlockViews extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Blocks
                    </H11>
                </Container1>
                <SubNavbar1>
                    <Link to="/containers">containers</Link>
                    <Link to="/holders">holders</Link>
                    <Link to="/blocks">blocks</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H22>
                        react-stylux
                    </H22>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder13>
                        <H34>
                            <Link to="/blocks/headingviews">Heading Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/navbarviews">Navbar Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/paragraphviews">Paragraph Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/imageviews">Image Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/buttonviews">Button Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/carouseltickerviews">Carsousel Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/listviews">List Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/formviews">Form Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/tableviews">Table Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/togglersviews">Toggler Blocks</Link>
                        </H34>
                    </Holder13>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H22>
                        react-stylux-blog
                    </H22>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H34>
                            <Link to="/blocks/blog/featureviews">Feature Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/blog/displayviews">Display Blocks</Link>
                        </H34>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H22>
                        react-stylux-ecommerce
                    </H22>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder6>
                        <H34>
                            <Link to="/blocks/ecommerce/cartviews">Cart Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/ecommerce/featureviews">Feature Blocks</Link>
                        </H34>
                        <H34>
                            <Link to="/blocks/ecommerce/displayviews">Display Blocks</Link>
                        </H34>
                    </Holder6>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}