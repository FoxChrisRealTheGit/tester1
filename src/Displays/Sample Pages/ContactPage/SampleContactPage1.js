import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../Navigation';

import { SubNavbar1 } from '../../../Components 1.0.0/Blocks';

export default class SampleContactPage1 extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/samplepages/contact1">Contact 1</Link>
                    <Link to="/samplepages/contact2">Contact 2</Link>
                </SubNavbar1>
            </section>
        )
    }
}
