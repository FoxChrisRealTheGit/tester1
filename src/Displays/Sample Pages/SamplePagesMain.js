import React, {Component} from 'react';
import Navigation from '../Navigation';

import { Link } from 'react-router-dom';

import Container1 ,{ Container11 } from '../../Component/Containers';
import Holder1 from '../../Component/Holders';
import {
    Block2,
    HeadingTest1,
    HorizontalTestBlock1,
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
                    <HeadingTest1>
                        home1
                    </HeadingTest1>
                    <HeadingTest1>
                        home2
                    </HeadingTest1>
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
                    <HeadingTest1>
                        about1
                    </HeadingTest1>
                    <HeadingTest1>
                        about2
                    </HeadingTest1>
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
                    <HeadingTest1>
                        blog1
                    </HeadingTest1>
                    <HeadingTest1>
                        blog2
                    </HeadingTest1>
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
                    <HeadingTest1>
                        contact1
                    </HeadingTest1>
                    <HeadingTest1>
                        contact2
                    </HeadingTest1>
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
                    <HeadingTest1>
                        product1
                    </HeadingTest1>
                    <HeadingTest1>
                        product2
                    </HeadingTest1>
                </Holder1>
            </Container1>
            <HorizontalTestBlock1 />
            </section>
        )
    }
}