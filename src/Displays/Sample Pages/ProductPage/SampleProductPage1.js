import React, { Component } from 'react';
import Navigation from '../../Navigation';

import { Link } from 'react-router-dom';
import { SubNavbar1 } from '../../../Component/Blocks';

export default class SampleProductPage1 extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/samplepages/product1">Product 1</Link>
                    <Link to="/samplepages/product2">Product 2</Link>
                </SubNavbar1>
            </section>
        )
    }
}
