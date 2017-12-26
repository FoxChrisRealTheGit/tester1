import React, { Component } from 'react';
import Navigation from './Navigation';

import { Link } from 'react-router-dom';

import { Container2 } from '../Component/Containers';
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
                <Container2>
                    <SubHeading4>
                        <Link to="/containers/styled">PreStyled Containers</Link>
                    </SubHeading4>
                    <SubHeading4>
                        <Link to="/containers/unstyled">UnStyled Containers</Link>
                    </SubHeading4>
                </Container2>
            </section>
        )
    }
}