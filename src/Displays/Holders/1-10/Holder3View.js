import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';

import { Block2, Heading1, SubHeading4, HorizontalTestBlock1, SubNavbar1 } from '../../../Components 1.0.0/Blocks';

import { Holder3 } from '../../../Components 1.0.0/Holders';

import Container1, {
    Container2,
    Container3,
    Container4,
    Container5,
} from '../../../Components 1.0.0/Containers';

export default class Holder3View extends Component {
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
                    <Heading1>
                        holder 3
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container2>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                </Container2>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                </Container3>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container4>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                </Container4>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 5
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container5>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                </Container5>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}