import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';
import {
    H11,
    SubNavbar1,
    HorizontalTestBlock1,
    H34,
} from '../../../Components 1.0.0/Blocks';

// unsure about this

export default class CartView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Cart Blocks
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
                        Cart 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Cart 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Cart 3
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Cart 4
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}