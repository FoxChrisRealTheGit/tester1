import React, { Component } from 'react';

import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import Container1 from '../Components 1.0.0/Containers';
import Holder1 from '../Components 1.0.0/Holders';
import { HorizontalTestBlock1, SubHeading4, Navbar1 } from '../Components 1.0.0/Blocks';

export default class LandingPage extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        LANDING PAGE UNDER CONSTRUCTION, USE NAVIGATION ABOVE
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <Navbar1>
                        </Navbar1>
                        
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}