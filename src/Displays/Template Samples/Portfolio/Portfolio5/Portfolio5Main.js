import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import { SubNavbar1 } from '../../../../Component/Blocks';

export default class Portfolio5Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/templatesamples/portfolio1">Portfolio 1</Link>
                    <Link to="/templatesamples/portfolio2">Portfolio 2</Link>
                    <Link to="/templatesamples/portfolio3">Portfolio 3</Link>
                    <Link to="/templatesamples/portfolio4">Portfolio 4</Link>
                    <Link to="/templatesamples/portfolio5">Portfolio 5</Link>
                </SubNavbar1>
            </section>
        )
    }
}