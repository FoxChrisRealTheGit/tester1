import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import { SubNavbar1 } from '../../../../Component/Blocks';

export default class ECommerce5Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/templatesamples/ecommerce1">ecommerce 1</Link>
                    <Link to="/templatesamples/ecommerce2">ecommerce 2</Link>
                    <Link to="/templatesamples/ecommerce3">ecommerce 3</Link>
                    <Link to="/templatesamples/ecommerce4">ecommerce 4</Link>
                    <Link to="/templatesamples/ecommerce5">ecommerce 5</Link>
                </SubNavbar1>
            </section>
        )
    }
}