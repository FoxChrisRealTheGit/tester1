import React, { Component } from 'react';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';
import { Link } from 'react-router-dom';

import Container1 from '../../Components 1.0.0/Containers';
import Holder1, { Holder4, Holder5, Holder9 } from '../../Components 1.0.0/Holders';
import {
    H21,
    H34,
    HorizontalTestBlock1,
} from '../../Components 1.0.0/Blocks';

export default class SamplesPagesMain extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        sample home pages
                </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <H34>
                            <Link to="/samplepages/home1">home1</Link>
                        </H34>
                        <H34>
                            <Link to="/samplepages/home2">Home2</Link>
                        </H34>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        sample about pages
                </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <H34>
                            <Link to="/samplepages/about1">about1</Link>
                        </H34>
                        <H34>
                            <Link to="/samplepages/about2">about2</Link>
                        </H34>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        sample blog pages
                </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <Holder4>
                            <H34>
                                <Link to="/samplepages/blog1">blog1</Link>
                            </H34>
                            <H34>
                                <Link to="/samplepages/blog2">blog2</Link>
                            </H34>
                            <H34>
                                <Link to="/samplepages/blog3">blog3</Link>
                            </H34>
                            <H34>
                                <Link to="/samplepages/blog4">blog4</Link>
                            </H34>
                            <H34>
                                <Link to="/samplepages/blog5">blog5</Link>
                            </H34>
                        </Holder4>
                        <Holder4>
                            <H34>
                                <Link to="/samplepages/blog6">blog6</Link>
                            </H34>
                            <H34>
                                <Link to="/samplepages/blog7">blog7</Link>
                            </H34>
                        </Holder4>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        sample contact pages
                </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <H34>
                            <Link to="/samplepages/contact1">contact1</Link>
                        </H34>
                        <H34>
                            <Link to="/samplepages/contact2">contact2</Link>
                        </H34>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        sample product pages
                </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <H34>
                            <Link to="samplepages/product1">product1</Link>
                        </H34>
                        <H34>
                            <Link to="samplepages/product2">product2</Link>
                        </H34>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}