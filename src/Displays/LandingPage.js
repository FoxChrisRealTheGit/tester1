import React, { Component } from 'react';

import Navigation from './Navigation';

import Container1 from '../Component/Containers';

import { HorizontalTestBlock1, SubHeading2 } from '../Component/Blocks';

export default class LandingPage extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading2>
                        LANDING PAGE UNDER CONSTRUCTION, USE NAVIGATION ABOVE
                    </SubHeading2>
                </Container1>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}