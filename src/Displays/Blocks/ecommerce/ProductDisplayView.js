import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';
import { Holder5 } from '../../../Components 1.0.0/Holders';
import {
    MainHeading1,
    Heading1,
    SubNavbar1,
    HorizontalTestBlock1,
    SubHeading4,
} from '../../../Components 1.0.0/Blocks';


//product display and thumbnail
export default class ProductDisplayView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <MainHeading1>
                        Product Display Blocks
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
                        Product Display 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Display 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Display 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Display 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Product Thumbnail Blocks
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Thumbnail 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Thumbnail 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Thumbnail 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}