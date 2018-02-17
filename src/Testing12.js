import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Displays/Navigation';

import { SubNavbar1, SquareImage, H31 } from './Components 1.0.0/Blocks';

import Holder from './Component 1.5.0/Holders1.5.0';

export default class Testing12 extends Component {

    render() {
        return (
            <section>
                <Header />
                <SubNavbar1
                    navbarWidth="70%">
                    <Link to="/blocks/buttonviews">button</Link>
                    <Link to="/blocks/headingviews">headings</Link>
                    <Link to="/blocks/imageviews">images</Link>
                    <Link to="/blocks/navbarviews">navbars</Link>
                    <Link to="/blocks/paragraphviews">paragraphs</Link>
                    <Link to="/blocks/carouseltickerviews">carsousels</Link>
                    <Link to="/blocks/listviews">Lists</Link>
                    <Link to="/blocks/formviews">Forms</Link>
                    <Link to="/blocks/tableviews">Tables</Link>
                    <Link to="/blocks/togglersviews">Togglers</Link>
                </SubNavbar1>
                <Holder
                    block2='3'>
                    <SquareImage />
                    <Holder
                        direction="column">
                        <H31>Hello</H31>
                        <SquareImage />
                    </Holder>
                </Holder>
                <Holder
                    block1="3">
                    <H31>Hello</H31>
                    <SquareImage />
                </Holder>
            </section>
        )
    }
}