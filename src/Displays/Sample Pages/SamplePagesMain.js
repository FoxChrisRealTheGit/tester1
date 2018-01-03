import React, { Component } from 'react';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';
import { Link } from 'react-router-dom';

import Container1 from '../../Components 1.0.0/Containers';
import Holder1, { Holder4, Holder5, Holder9 } from '../../Components 1.0.0/Holders';
import {
    Heading1,
    SubHeading4,
    HorizontalTestBlock1,
} from '../../Components 1.0.0/Blocks';

export default class SamplesPagesMain extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        sample home pages
                </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <SubHeading4>
                            <Link to="/samplepages/home1">home1</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/samplepages/home2">Home2</Link>
                        </SubHeading4>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        sample about pages
                </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <SubHeading4>
                            <Link to="/samplepages/about1">about1</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/samplepages/about2">about2</Link>
                        </SubHeading4>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        sample blog pages
                </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <Holder4>
                            <SubHeading4>
                                <Link to="/samplepages/blog1">blog1</Link>
                            </SubHeading4>
                            <SubHeading4>
                                <Link to="/samplepages/blog2">blog2</Link>
                            </SubHeading4>
                            <SubHeading4>
                                <Link to="/samplepages/blog3">blog3</Link>
                            </SubHeading4>
                            <SubHeading4>
                                <Link to="/samplepages/blog4">blog4</Link>
                            </SubHeading4>
                            <SubHeading4>
                                <Link to="/samplepages/blog5">blog5</Link>
                            </SubHeading4>
                        </Holder4>
                        <Holder4>
                            <SubHeading4>
                                <Link to="/samplepages/blog6">blog6</Link>
                            </SubHeading4>
                            <SubHeading4>
                                <Link to="/samplepages/blog7">blog7</Link>
                            </SubHeading4>
                        </Holder4>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        sample contact pages
                </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <SubHeading4>
                            <Link to="/samplepages/contact1">contact1</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/samplepages/contact2">contact2</Link>
                        </SubHeading4>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        sample product pages
                </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1>
                        <SubHeading4>
                            <Link to="samplepages/product1">product1</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="samplepages/product2">product2</Link>
                        </SubHeading4>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}