import React, {Component} from 'react';
import Navigation from '../Navigation';

import { Link } from 'react-router-dom';

import Container1 ,{ Container11 } from '../../Component/Containers';
import Holder1 ,{Holder8}from '../../Component/Holders';
import {
    Heading1,
    SubHeading4,
    HorizontalTestBlock1,
} from '../../Component/Blocks';

export default class SamplesPagesMain extends Component{
    render(){
        return(
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
                <Holder8>
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
                </Holder8>
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
            </section>
        )
    }
}