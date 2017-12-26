import React, { Component } from 'react';
import Navigation from './Navigation';

import { Link } from 'react-router-dom';

import { Container11 } from '../Component/Containers';
import {
    Block2,
    SubHeading2,
    HorizontalTestBlock1,
} from '../Component/Blocks';
import { Holder10 } from '../Component/Holders';

export default class BlockViews extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container11>
                    <SubHeading2>
                        <Link to="/blocks/headingviews">heading blocks</Link>
                    </SubHeading2>
                    <SubHeading2>
                        <Link to="/blocks/navbarviews">navbar blocks</Link>
                    </SubHeading2>
                    <SubHeading2>
                        <Link to="/blocks/paragraphviews">paragraph blocks</Link>
                    </SubHeading2>
                    <SubHeading2>
                        <Link to="/blocks/imageviews">image blocks</Link>
                    </SubHeading2>
                    <SubHeading2>
                        <Link to="/blocks/buttonviews">button blocks</Link>
                    </SubHeading2>
                </Container11>
            </section>
        )
    }
}