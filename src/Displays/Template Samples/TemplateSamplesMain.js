import React, { Component } from 'react';
import Navigation from '../Navigation';

import { Link } from 'react-router-dom';

import Container1, { Container5 } from '../../Component/Containers';
import {
    Block2,
    HeadingTest1,
    HorizontalTestBlock1,
    HeadingTest2
} from '../../Component/Blocks';

export default class TemplateSamplesMain extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        app showcase
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container5>
                    <HeadingTest2>
                        <Link to="/templatesamples/appshowcase1">app showcase 1</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/appshowcase2">app showcase 2</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/appshowcase3">app showcase 3</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/appshowcase4">app showcase 4</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/appshowcase5">app showcase 5</Link>
                    </HeadingTest2>
                </Container5>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        blogs
                    </HeadingTest1>

                </Container1>
                <HorizontalTestBlock1 />
                <Container5>
                    <HeadingTest2>
                        <Link to="/templatesamples/blog1">blog 1</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/blog2">blog 2</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/blog3">blog 3</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/blog4">blog 4</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/blog5">blog 5</Link>
                    </HeadingTest2>
                </Container5>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        ecommerce
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container5>
                    <HeadingTest2>
                        <Link to="/templatesamples/ecommerce1">ecommerce 1</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/ecommerce2">ecommerce 2</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/ecommerce3">ecommerce 3</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/ecommerce4">ecommerce 4</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/ecommerce5">ecommerce 5</Link>
                    </HeadingTest2>
                </Container5>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        portfolio
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container5>
                    <HeadingTest2>
                        <Link to="/templatesamples/portfolio1">portfolio 1</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/portfolio2">portfolio 2</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/portfolio3">portfolio 3</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/portfolio4">portfolio 4</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/templatesamples/portfolio5">portfolio 5</Link>
                    </HeadingTest2>
                </Container5>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}