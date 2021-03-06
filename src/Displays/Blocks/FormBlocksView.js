import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import Container1 from '../../Components 1.0.0/Containers';
import {
    H11,
    SubNavbar1,
    HorizontalTestBlock1,
} from '../../Components 1.0.0/Blocks';

export default class FormBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                       Form Blocks
                    </H11>
                </Container1>
                <SubNavbar1
                    navbarWidth="70%">
                    <Link to="/blocks/buttonviews">button</Link>
                    <Link to="/blocks/headingviews">headings</Link>
                    <Link to="/blocks/imageviews">images</Link>
                    <Link to="/blocks/navbarviews">navbars</Link>
                    <Link to="/blocks/paragraphviews">paragraphs</Link>
                    <Link to="/blocks/carouseltickerviews">carousels</Link>
                    <Link to="/blocks/listviews">Lists</Link>
                    <Link to="/blocks/formviews">Forms</Link>
                    <Link to="/blocks/tableviews">Tables</Link>
                    <Link to="/blocks/togglersviews">Togglers</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />

                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}
