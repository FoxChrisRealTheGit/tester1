import React, { Component } from 'react';
import Navigation from '../../Navigation';

import { Link } from 'react-router-dom';
import { SubNavbar1 } from '../../../Component/Blocks';

export default class SampleHomePage2 extends Component {

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
