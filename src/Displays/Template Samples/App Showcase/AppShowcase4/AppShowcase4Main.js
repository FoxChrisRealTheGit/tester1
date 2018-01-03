import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../../Navigation';
import FooterNavigation from '../../../FooterNavigation';

import { SubNavbar1, MainHeading1 } from '../../../../Components 1.0.0/Blocks';
import Container1 from '../../../../Components 1.0.0/Containers';

export default class AppShowcase4Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <MainHeading1>
                        App 4 Template
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/templatesamples/appshowcase1">app 1</Link>
                    <Link to="/templatesamples/appshowcase2">app 2</Link>
                    <Link to="/templatesamples/appshowcase3">app 3</Link>
                    <Link to="/templatesamples/appshowcase4">app 4</Link>
                    <Link to="/templatesamples/appshowcase5">app 5</Link>
                </SubNavbar1>
                <FooterNavigation />
            </section>
        )
    }
}