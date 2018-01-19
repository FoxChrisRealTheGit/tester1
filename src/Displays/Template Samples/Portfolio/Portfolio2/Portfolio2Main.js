import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';
import FooterNavigation from '../../../FooterNavigation';

import { HorizontalTestBlock1, SubNavbar1,H11 } from '../../../../Components 1.0.0/Blocks';
import Container1 from '../../../../Components 1.0.0/Containers';

export default class Portfolio2Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <H11>
                        Portfolio 2 Template
                    </H11>
                </Container1>
                <SubNavbar1>
                    <Link to="/templatesamples/portfolio1">Portfolio 1</Link>
                    <Link to="/templatesamples/portfolio2">Portfolio 2</Link>
                    <Link to="/templatesamples/portfolio3">Portfolio 3</Link>
                    <Link to="/templatesamples/portfolio4">Portfolio 4</Link>
                    <Link to="/templatesamples/portfolio5">Portfolio 5</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />

                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}