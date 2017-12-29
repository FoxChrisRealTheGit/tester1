import React, { Component } from 'react';
import Navigation from './Navigation';

import { Link } from 'react-router-dom';

import Container1 from '../Component/Containers';

import { Holder4 } from '../Components 1.0.0/Holders';

import {
    SubHeading4,
    HorizontalTestBlock1
} from '../Component/Blocks';

export default class ContainerViewMain extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder4>
                        <SubHeading4>
                            <Link to="/containers/styled">PreStyled Containers</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/containers/unstyled">UnStyled Containers</Link>
                        </SubHeading4>
                    </Holder4>
                </Container1>
            </section>
        )
    }
}