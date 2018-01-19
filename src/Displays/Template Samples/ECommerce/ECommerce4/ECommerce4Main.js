import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';
import FooterNavigation from '../../../FooterNavigation';

import { SubNavbar1, H11 } from '../../../../Components 1.0.0/Blocks';
import Container1 from '../../../../Components 1.0.0/Containers';

export default class ECommerce4Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <H11>
                        ecommerce 4 Template
                    </H11>
                </Container1>
                <SubNavbar1>
                    <Link to="/templatesamples/ecommerce1">ecommerce 1</Link>
                    <Link to="/templatesamples/ecommerce2">ecommerce 2</Link>
                    <Link to="/templatesamples/ecommerce3">ecommerce 3</Link>
                    <Link to="/templatesamples/ecommerce4">ecommerce 4</Link>
                    <Link to="/templatesamples/ecommerce5">ecommerce 5</Link>
                </SubNavbar1>

                <FooterNavigation />
            </section>
        )
    }
}