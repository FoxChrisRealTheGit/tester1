import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../../Navigation';

import { Block2, Heading1, SubHeading4, HorizontalTestBlock1, SubNavbar1 } from '../../../Component/Blocks';

import { Holder6 } from '../../../Components 1.0.0/Holders';

import Container1 from '../../../Components 1.0.0/Containers';

export default class Holder6View extends Component {
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
                        holder 6
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