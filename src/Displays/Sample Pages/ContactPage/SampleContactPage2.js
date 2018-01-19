import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';
import { SubNavbar1 , H11} from '../../../Components 1.0.0/Blocks';

export default class SampleContactPage2 extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <H11>
                        Contact 2
                    </H11>
                </Container1>
                <SubNavbar1>
                    <Link to="/samplepages/contact1">Contact 1</Link>
                    <Link to="/samplepages/contact2">Contact 2</Link>
                </SubNavbar1>
                <FooterNavigation />
            </section>
        )
    }
}
