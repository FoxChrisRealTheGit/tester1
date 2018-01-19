import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import Container1 from '../Components 1.0.0/Containers';
import Holder1, { Holder5 } from '../Components 1.0.0/Holders';
import {
    HorizontalTestBlock1,
    Navbar1,
    RectangleImage,
    H32,
    ImageSlider1,
    P1,
    H42,
    HorizontalTicker,
    Hero2,
}
    from '../Components 1.0.0/Blocks';

import KarenJump from '../images/KarenJump.jpg';
import chrischillin from '../images/Chris-hangingout.jpg';
import heroGreeting1 from '../images/SVG/heroGreeting1.svg';

import lies2logo from '../images/ticker/2lies&1truth.png';
import ataraxylogo from '../images/ticker/ataraxybaselogo.svg';
import foxTail from '../images/ticker/foxtail2.1.svg';

export default class LandingPage extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <RectangleImage
                            size="exlg">
                            {heroGreeting1}
                        </RectangleImage>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H42>Who uses Stylux?</H42>
                        <HorizontalTicker>
                            <RectangleImage size='tn'>{lies2logo}</RectangleImage>
                            <RectangleImage size='exsm'>{ataraxylogo}</RectangleImage>
                            <RectangleImage size='exsm'>{foxTail}</RectangleImage>
                        </HorizontalTicker>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1
                        block2="3">
                        <Navbar1
                            direction="column"
                            columnAlign="flex-start"
                            alignItems="flex-start"
                            padding="0 0 0 20px">
                            Components
                            <Link to="/containers">containers</Link>
                            <Link to="/holders">holders</Link>
                            <Link to="/blocks">blocks</Link>
                            <Link to=""></Link>
                            Examples
                            <Link to="/samplepages">samples pages</Link>
                            <Link to="/templatesamples">template samples</Link>
                            <Link to=""></Link>
                            <Link to="/documentation">Documentation</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/donate">Donate</Link>

                        </Navbar1>
                        <Holder5>
                            <H32>
                                Get stuff done fast
                            </H32>
                            <ImageSlider1
                                background="white"
                                arrowColor="black">
                                <Hero2
                                    image={`url(${KarenJump})`}>
                                </Hero2>
                                <Hero2
                                    image={`url(${chrischillin}`}>
                                </Hero2>
                            </ImageSlider1>
                        </Holder5>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H32>
                            How does it work?
                        </H32>
                        <P1>
                            insert steps on how stylux works
                        </P1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H32>
                            Want to help out?
                        </H32>
                        <P1>
                            insert steps on how to help out, probable a mini clone of contact
                        </P1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}