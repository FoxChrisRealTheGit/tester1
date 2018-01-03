import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import {SubNavbar1, MainHeading1} from '../../../Components 1.0.0/Blocks';
import Container1 from '../../../Components 1.0.0/Containers';

export default class SampleAboutPage1 extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <MainHeading1>
                        About 1
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/samplepages/about1">About 1</Link>
                    <Link to="/samplepages/about2">About 2</Link>
                </SubNavbar1>
                <FooterNavigation />
            </section>
        )
    }
}
