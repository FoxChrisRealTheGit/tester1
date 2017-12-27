import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../Navigation';

import Container1 from '../../../Component/Containers';

import Holder1, { Holder4, Holder5, Holder6, Holder7 } from '../../../Component/Holders';

import Block1, {
    HorizontalTestBlock1,
    MainHeading4,
    SubHeading2,
    SecondarySubHeading2,
    Paragraph6,
    Paragraph9,
    PullQuote1,
    CircleImage2,
    SubNavbar1
} from '../../../Component/Blocks';

import chrischillin from '../../../images/Chris-hangingout.jpg';

export default class SampleBlogPost5 extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/samplepages/blog1">Blog 1</Link>
                    <Link to="/samplepages/blog2">Blog 2</Link>
                    <Link to="/samplepages/blog3">Blog 3</Link>
                    <Link to="/samplepages/blog4">Blog 4</Link>
                    <Link to="/samplepages/blog5">Blog 5</Link>
                    <Link to="/samplepages/blog6">Blog 6</Link>
                    <Link to="/samplepages/blog7">Blog 7</Link>
                </SubNavbar1>
                type 2 paragraph layout only, test many headers
            </section>
        )
    }
}