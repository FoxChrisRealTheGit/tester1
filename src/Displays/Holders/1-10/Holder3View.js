import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import { Block2, H11,  H34, HorizontalTestBlock1, SubNavbar1 } from '../../../Components 1.0.0/Blocks';

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
                <Container1>
                    <H11>
                        Holder 3
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
                    <Holder3>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder3>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        container 2
                    </H34>
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
                    <H34>
                        container 3
                    </H34>
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
                    <H34>
                        container 4
                    </H34>
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
                    <H34>
                        container 5
                    </H34>
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
                <FooterNavigation />
            </section>
        )
    }
}