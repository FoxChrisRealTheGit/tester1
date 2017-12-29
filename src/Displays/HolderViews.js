import React, { Component } from 'react';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';

import Container1 from '../Components 1.0.0/Containers';

import {Block2} from '../Components 1.0.0/Blocks';

import {MainHeading1, SubHeading4, HorizontalTestBlock1, SubNavbar1 } from '../Component/Blocks';

import Holder1, {
    Holder2,
    Holder3,
    Holder4,
    Holder5,
    Holder6
} from '../Components 1.0.0/Holders';

export default class HolderViews extends Component {
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
                        UnStyled Holders
                    </MainHeading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        <Link to='/holders/holder1'>holder 1</Link>
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <Block2 />
                        <Block2 />
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                    <Link to='/holders/holder2'>holder 2</Link>
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder2>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                    <Link to='/holders/holder3'>holder 3</Link>
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
                    <Link to='/holders/holder4'>holder 4</Link>
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder4>
                        <Block2 />
                        <Block2 />
                    </Holder4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                    <Link to='/holders/holder5'>holder 5</Link>
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                    <Link to='/holders/holder6'>holder 6</Link>
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder6>
                        <Block2 />
                        <Block2 />
                        <Block2 />
                        <Block2 />
                    </Holder6>
                </Container1>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}