import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';
import { Holder5 } from '../../../Components 1.0.0/Holders';
import {
    H11,
    SubNavbar1,
    H21,
    HorizontalTestBlock1,
    H34,
} from '../../../Components 1.0.0/Blocks';

// just feature product displays
export default class FeatureProductView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Feature Product Blocks
                    </H11>
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
                    <H34>
                        Feature Product 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Feature Product 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Feature Product 3
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Product Slider Blocks
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Slider 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}