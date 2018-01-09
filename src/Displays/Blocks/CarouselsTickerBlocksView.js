import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import Container1 from '../../Components 1.0.0/Containers';
import {
    ImageSlider1,
    HorizontalTicker,
    MainHeading1,
    HorizontalTestBlock1,
    Heading1,
    SubHeading4,
    SubNavbar1,
    RectangleImage,
} from '../../Components 1.0.0/Blocks';

/* Images */
import chrisLeaves from "../../images/chrisLeaves.jpg";
import KarenJump from "../../images/KarenJump.jpg";
import Kristen from "../../images/Kristen.jpg";
import KristenButt from "../../images/KristenButt.jpg";

export default class CaroselsTickersView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <MainHeading1>
                        Carosels & Tickers
                    </MainHeading1>
                </Container1>
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
                    <Link to="/blocks/binviews">Bins</Link>
                </SubNavbar1>

                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Carosels
                </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 1
                </SubHeading4>
                </Container1>
                <Container1>
                    <ImageSlider1>
                        {chrisLeaves}
                        {KarenJump}
                        {Kristen}
                        {KristenButt}
                    </ImageSlider1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 2
                </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 3
                </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 4
                </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 5
                </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Tickers
                </Heading1>
                </Container1>
                <Container1>
                    <SubHeading4>
                        Horizontal Ticker
                </SubHeading4>
                </Container1>
                <HorizontalTicker>
                    <RectangleImage>
                        {chrisLeaves}
                    </RectangleImage>
                    <RectangleImage>
                        {KarenJump}
                    </RectangleImage>
                    <RectangleImage>
                        {Kristen}
                    </RectangleImage>
                    <RectangleImage>
                        {KristenButt}
                    </RectangleImage>
                </HorizontalTicker>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}