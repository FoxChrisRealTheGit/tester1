import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';
import { SubNavbar1, MainHeading1 } from '../../../Components 1.0.0/Blocks';

export default class SampleProductPage1 extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <MainHeading1>
                        Product 1
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/samplepages/product1">Product 1</Link>
                    <Link to="/samplepages/product2">Product 2</Link>
                </SubNavbar1>
                <FooterNavigation />
            </section>
        )
    }
}
