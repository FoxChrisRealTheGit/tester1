import React, { Component } from 'react';
import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import { Link } from 'react-router-dom';

import Container1 from '../Components 1.0.0/Containers';

import { Holder5 } from '../Components 1.0.0/Holders';

import {
    H34,
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
                        <H34>
                            <Link to="/containers/styled">PreStyled Containers</Link>
                        </H34>
                        <H34>
                            <Link to="/containers/unstyled">UnStyled Containers</Link>
                        </H34>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}