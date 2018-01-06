import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';
import { Holder5 } from '../../../Components 1.0.0/Holders';
import {
    MainHeading1,
    SubNavbar1,
    Heading1,
    HorizontalTestBlock1,
    SubHeading4,
} from '../../../Components 1.0.0/Blocks';

// just feature product displays
export default class FeatureProductView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <MainHeading1>
                        Feature Product Blocks
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/blocks">Blocks</Link>
                    <Link to="/blocks/ecommerce/cartviews">Carts</Link>
                    <Link to="/blocks/ecommerce/featureviews">Feature Products</Link>
                    <Link to="/blocks/ecommerce/displayviews">Display Products</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Feature Product 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Feature Product 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Feature Product 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Product Slider Blocks
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Slider 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}