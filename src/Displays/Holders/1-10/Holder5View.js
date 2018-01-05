import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import { Block2, MainHeading1, Heading1, SubHeading4, HorizontalTestBlock1, SubNavbar1 } from '../../../Components 1.0.0/Blocks';

import { Holder5 } from '../../../Components 1.0.0/Holders';

import Container1, {
    Container2,
    Container3,
    Container4,
    Container5,
} from '../../../Components 1.0.0/Containers';

export default class Holder5View extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <MainHeading1>
                        Holder 5
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/containers">containers</Link>
                    <Link to="/holders">holders</Link>
                    <Link to="/blocks">blocks</Link>
                </SubNavbar1>

                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container2>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                </Container2>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                </Container3>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container4>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                </Container4>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 5
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                    </Holder5>
                </Container5>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}