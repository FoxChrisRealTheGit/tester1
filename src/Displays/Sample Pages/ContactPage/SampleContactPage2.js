import React, { Component } from 'react';
import Navigation from '../../Navigation';

import { Link } from 'react-router-dom';
import { SubNavbar1 } from '../../../Component/Blocks';

export default class SampleContactPage2 extends Component {

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
