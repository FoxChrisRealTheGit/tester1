import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import { SubNavbar1 } from '../../../../Component/Blocks';

export default class Blog5Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/templatesamples/blog1">blog 1</Link>
                    <Link to="/templatesamples/blog2">blog 2</Link>
                    <Link to="/templatesamples/blog3">blog 3</Link>
                    <Link to="/templatesamples/blog4">blog 4</Link>
                    <Link to="/templatesamples/blog5">blog 5</Link>
                </SubNavbar1>
            </section>
        )
    }
}