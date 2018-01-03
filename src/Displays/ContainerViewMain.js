import React, { Component } from 'react';
import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import { Link } from 'react-router-dom';

import Container1 from '../Components 1.0.0/Containers';

import { Holder5 } from '../Components 1.0.0/Holders';

import {
    SubHeading4,
    HorizontalTestBlock1
} from '../Components 1.0.0/Blocks';

export default class ContainerViewMain extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading4>
                            <Link to="/containers/styled">PreStyled Containers</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/containers/unstyled">UnStyled Containers</Link>
                        </SubHeading4>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}