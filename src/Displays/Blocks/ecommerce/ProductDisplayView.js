import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';
import {
    H11,
    H21,
    SubNavbar1,
    HorizontalTestBlock1,
    H34,
} from '../../../Components 1.0.0/Blocks';


//product display and thumbnail
export default class ProductDisplayView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Product Display Blocks
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
                        Product Display 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Display 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Display 3
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Display 4
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Product Thumbnail Blocks
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Thumbnail 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Thumbnail 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Thumbnail 3
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}