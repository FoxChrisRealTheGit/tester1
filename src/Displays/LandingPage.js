import React, { Component } from 'react';

import Navigation from './Navigation';

import { HorizontalTestBlock1 } from '../Component/Blocks';

export default class LandingPage extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
            </section>
        )
    }
}