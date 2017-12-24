import React, { Component } from 'react';
import Navigation from '../Navigation';

import { Link } from 'react-router-dom';

import Container1, { Container5 } from '../../Component/Containers';
import {
    Block2,
    HeadingTest1,
    HorizontalTestBlock1,
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
                    <HeadingTest1>
                        app showcase 1
                    </HeadingTest1>
                    <HeadingTest1>
                        app showcase 2
                    </HeadingTest1>
                    <HeadingTest1>
                        app showcase 3
                    </HeadingTest1>
                    <HeadingTest1>
                        app showcase 4
                    </HeadingTest1>
                    <HeadingTest1>
                        app showcase 5
                </HeadingTest1>
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
                    <HeadingTest1>
                        blog 1
                    </HeadingTest1>
                    <HeadingTest1>
                        blog 2
                    </HeadingTest1>
                    <HeadingTest1>
                        blog 3
                    </HeadingTest1>
                    <HeadingTest1>
                        blog 4
                    </HeadingTest1>
                    <HeadingTest1>
                        blog 5
                    </HeadingTest1>
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
                    <HeadingTest1>
                        ecommerce 1
                    </HeadingTest1>
                    <HeadingTest1>
                        ecommerce 2
                    </HeadingTest1>
                    <HeadingTest1>
                        ecommerce 3
                    </HeadingTest1>
                    <HeadingTest1>
                        ecommerce 4
                    </HeadingTest1>
                    <HeadingTest1>
                        ecommerce 5
                    </HeadingTest1>
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
                    <HeadingTest1>
                        portfolio 1
                    </HeadingTest1>
                    <HeadingTest1>
                        portfolio 2
                    </HeadingTest1>
                    <HeadingTest1>
                        portfolio 3
                    </HeadingTest1>
                    <HeadingTest1>
                        portfolio 4
                    </HeadingTest1>
                    <HeadingTest1>
                        portfolio 5
                    </HeadingTest1>
                </Container5>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}