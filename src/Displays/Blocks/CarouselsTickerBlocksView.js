import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import Container1 from '../../Components 1.0.0/Containers';
import {
    ImageSlider1,
    HorizontalTicker,
    H11,
    HorizontalTestBlock1,
    H21,
    H34,
    SubNavbar1,
    RectangleImage,
    Hero1,
    Hero2,
    P2,
    ImageSlider2,
    ImageSlider3,
    ImageSlider4,
    ImageSlider5,
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
                    <H11>
                        carousels & Tickers
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
                <Container1>
                    <H21>
                        carousels
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        carousel 1
                    </H34>
                </Container1>
                <Container1>
                    <ImageSlider1>
                        <Hero2
                            image={`url(${chrisLeaves})`}>
                            <P2>some neat text</P2>
                        </Hero2>
                        <Hero2
                            image={`url(${KarenJump})`}>
                        </Hero2>
                        <Hero2
                            image={`url(${Kristen})`}>
                        </Hero2>
                        <Hero2
                            image={`url(${KristenButt})`}>
                        </Hero2>
                    </ImageSlider1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        carousel 2
                    </H34>
                </Container1>
                <Container1>
                    <ImageSlider2>
                        <Hero2
                            image={`url(${chrisLeaves})`}>
                            <P2>some neat text</P2>
                        </Hero2>
                        <Hero2
                            image={`url(${KarenJump})`}>
                        </Hero2>
                        <Hero2
                            image={`url(${Kristen})`}>
                        </Hero2>
                        <Hero2
                            image={`url(${KristenButt})`}>
                        </Hero2>
                    </ImageSlider2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        carousel 3
                    </H34>
                </Container1>
                <Container1>
                    <ImageSlider3>
                        <Hero2
                            image={`url(${chrisLeaves})`}>
                            <P2>some neat text</P2>
                        </Hero2>
                        <Hero2
                            image={`url(${KarenJump})`}>
                        </Hero2>
                        <Hero2
                            image={`url(${Kristen})`}>
                        </Hero2>
                        <Hero2
                            image={`url(${KristenButt})`}>
                        </Hero2>
                    </ImageSlider3>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        carousel 4
                    </H34>
                </Container1>
                <Container1>
                    <ImageSlider4>
                        <Hero2
                            image={`url(${chrisLeaves})`}>
                            <P2>some neat text</P2>
                        </Hero2>
                        <Hero2
                            image={`url(${KarenJump})`}>
                        </Hero2>
                        <Hero2
                            image={`url(${Kristen})`}>
                        </Hero2>
                        <Hero2
                            image={`url(${KristenButt})`}>
                        </Hero2>
                    </ImageSlider4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        carousel 5
                    </H34>
                </Container1>
                <Container1>
                    <ImageSlider5>
                        <Hero1
                            image={`url(${chrisLeaves})`}>
                            <H21>Some sort of heading</H21>
                            <button>click me</button>
                            <P2>some neat text</P2>
                        </Hero1>
                        <Hero1
                            image={`url(${KarenJump})`}>
                            <H21>Another heading</H21>
                            <button>click me</button>
                            <P2>some neater text</P2>
                        </Hero1>
                        <Hero1
                            image={`url(${Kristen})`}>
                            <H21>Some sort of heading</H21>
                            <button>click me</button>
                            <P2>the neatest text</P2>
                        </Hero1>
                        <Hero1
                            image={`url(${KristenButt})`}>
                            <H21>a neat heading</H21>
                            <button>click me</button>
                            <P2>some neat text</P2>
                        </Hero1>
                    </ImageSlider5>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Tickers
                    </H21>
                </Container1>
                <Container1>
                    <H34>
                        Horizontal Ticker
                    </H34>
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