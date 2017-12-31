import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../Navigation';

import { SubNavbar1 } from '../../../Components 1.0.0/Blocks';

export default class SampleHomePage1 extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/samplepages/home1">Home 1</Link>
                    <Link to="/samplepages/home2">Home 2</Link>
                </SubNavbar1>
            </section>
        )
    }
}
