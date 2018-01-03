import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import Container1 from '../Components 1.0.0/Containers';
import { HorizontalTestBlock1, MainHeading1 } from '../Components 1.0.0/Blocks';

export default class Contact extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <MainHeading1>
                        Contact
                    </MainHeading1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}