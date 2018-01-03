import React, { Component } from 'react';
import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import { Link } from 'react-router-dom';

import Container1 from '../Components 1.0.0/Containers';

import { Holder8 } from '../Components 1.0.0/Holders';

import {
    SubHeading4,
    HorizontalTestBlock1,
} from '../Components 1.0.0/Blocks';


export default class BlockViews extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder8>
                        <SubHeading4>
                            <Link to="/blocks/headingviews">heading blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/navbarviews">navbar blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/paragraphviews">paragraph blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/imageviews">image blocks</Link>
                        </SubHeading4>
                        <SubHeading4>
                            <Link to="/blocks/buttonviews">button blocks</Link>
                        </SubHeading4>
                    </Holder8>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}