import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

import Container1 from '../../Components 1.0.0/Containers';
import {
    Block2,
    MainHeading1,
    SubHeading4,
    HorizontalTestBlock1,
    SubNavbar1
} from '../../Component/Blocks';

export default class ContainerView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/containers/styled">Styled Containers</Link>
                    <Link to="/containers/unstyled">Unstyled Containers</Link>
                    <Link to="/holders">Holders</Link>
                </SubNavbar1>
                <Container1>
                    <MainHeading1>
                        UnStyled Containers
                    </MainHeading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Block2 />
                </Container1>
                <HorizontalTestBlock1 />
            </section>
        );
    }
}

