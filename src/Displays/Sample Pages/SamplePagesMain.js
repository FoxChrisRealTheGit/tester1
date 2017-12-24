import React, {Component} from 'react';
import Navigation from '../Navigation';

import { Link } from 'react-router-dom';

import Container1 ,{ Container11 } from '../../Component/Containers';
import Holder1 from '../../Component/Holders';
import {
    Block2,
    HeadingTest1,
    HorizontalTestBlock1,
    HeadingTest2
} from '../../Component/Blocks';

export default class SamplesPagesMain extends Component{
    render(){
        return(
            <section>
            <Navigation />
            <HorizontalTestBlock1 />
            <Container1>
                <HeadingTest1>
                    sample home pages
                </HeadingTest1>
            </Container1>
            <HorizontalTestBlock1 />
            <Container1>
                <Holder1>
                    <HeadingTest2>
                        <Link to="/samplepages/home1">home1</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/samplepages/home2">Home2</Link>
                    </HeadingTest2>
                </Holder1>
            </Container1>
            <HorizontalTestBlock1 />
            <HorizontalTestBlock1 />
            <Container1>
                <HeadingTest1>
                    sample about pages
                </HeadingTest1>
            </Container1>
            <HorizontalTestBlock1 />
            <Container1>
                <Holder1>
                    <HeadingTest2>
                        <Link to="/samplepages/about1">about1</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/samplepages/about2">about2</Link>
                    </HeadingTest2>
                </Holder1>
            </Container1>
            <HorizontalTestBlock1 />
            <HorizontalTestBlock1 />
            <Container1>
                <HeadingTest1>
                    sample blog pages
                </HeadingTest1>
            </Container1>
            <HorizontalTestBlock1 />
            <Container1>
                <Holder1>
                    <HeadingTest2>
                        <Link to="/samplepages/blog1">blog1</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/samplepages/blog2">blog2</Link>
                    </HeadingTest2>
                </Holder1>
            </Container1>
            <HorizontalTestBlock1 />
            <HorizontalTestBlock1 />
            <Container1>
                <HeadingTest1>
                    sample contact pages
                </HeadingTest1>
            </Container1>
            <HorizontalTestBlock1 />
            <Container1>
                <Holder1>
                    <HeadingTest2>
                        <Link to="/samplepages/contact1">contact1</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="/samplepages/contact2">contact2</Link>
                    </HeadingTest2>
                </Holder1>
            </Container1>
            <HorizontalTestBlock1 />
            <HorizontalTestBlock1 />
            <Container1>
                <HeadingTest1>
                    sample product pages
                </HeadingTest1>
            </Container1>
            <HorizontalTestBlock1 />
            <Container1>
                <Holder1>
                    <HeadingTest2>
                        <Link to="samplepages/product1">product1</Link>
                    </HeadingTest2>
                    <HeadingTest2>
                        <Link to="samplepages/product2">product2</Link>
                    </HeadingTest2>
                </Holder1>
            </Container1>
            <HorizontalTestBlock1 />
            </section>
        )
    }
}