import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

import Container1, {
    Container2,
    Container3,
    Container4,
    Container5,
} from '../../Components 1.0.0/Containers';
import {
    Block2,
    MainHeading1,
    SubHeading4,
    HorizontalTestBlock1,
    SubNavbar1
} from '../../Components 1.0.0/Blocks';

export default class ContainerView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/containers/styled">styled containers</Link>
                    <Link to="/containers/unstyled">unstyled containers</Link>
                    <Link to="/holders">holders</Link>
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
                <Container1>
                    <SubHeading4>
                        container 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container2>
                    <Block2 />
                    <Block2 />
                </Container2>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container3>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container4>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container4>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 5
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container5>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container5>
                <HorizontalTestBlock1 />
            </section>
        );
    }
}

