import React, { Component } from 'react';
import Navigation from './Navigation';

import { Link } from 'react-router-dom';

import { Container11 } from '../Component/Containers';
import {
    Block2,
    HeadingTest1,
    HorizontalTestBlock1,
} from '../Component/Blocks';

export default class BlockViews extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <Container11>
                    <HeadingTest1>
                        <Link to="/blocks/headingviews">heading blocks</Link>
                    </HeadingTest1>
                    <HeadingTest1>
                        <Link to="/blocks/navbarviews">navbar blocks</Link>
                    </HeadingTest1>
                    <HeadingTest1>
                        <Link to="/blocks/paragraphviews">paragraph blocks</Link>
                    </HeadingTest1>
                    <HeadingTest1>
                        <Link to="/blocks/imageviews">image blocks</Link>
                    </HeadingTest1>
                    <HeadingTest1>
                        <Link to="/blocks/buttonviews">button blocks</Link>
                    </HeadingTest1>
                </Container11>
            </section>
        )
    }
}