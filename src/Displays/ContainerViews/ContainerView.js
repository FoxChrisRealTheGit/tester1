import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import Container1, {
    Container2,
    Container3,
    Container4,
    Container5,
} from '../../Components 1.0.0/Containers';
import {
    Block2,
    H11,
    H34,
    HorizontalTestBlock1,
    SubNavbar1
} from '../../Components 1.0.0/Blocks';

export default class ContainerView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Containers
                    </H11>
                </Container1>
                <SubNavbar1>
                    <Link to="/containers">containers</Link>
                    <Link to="/holders">holders</Link>
                    <Link to="/blocks">blocks</Link>
                </SubNavbar1>

                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        container 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Block2 />
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        container 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container2>
                    <Block2 />
                    <Block2 />
                </Container2>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        container 3
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container3>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        container 4
                    </H34>
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
                    <H34>
                        container 5
                    </H34>
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
                <FooterNavigation />
            </section>
        );
    }
}

