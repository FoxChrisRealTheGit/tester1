import React, { Component } from 'react';
import Navigation from './Navigation';

import { Link } from 'react-router-dom';

import { Container2 } from '../Component/Containers';
import {
    SubHeading2,
    HorizontalTestBlock1
} from '../Component/Blocks';

export default class ContainerViewMain extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container2>
                    <SubHeading2>
                        <Link to="/containers/styled">PreStyled Containers</Link>
                    </SubHeading2>
                    <SubHeading2>
                        <Link to="/containers/unstyled">UnStyled Containers</Link>
                    </SubHeading2>
                </Container2>
            </section>
        )
    }
}