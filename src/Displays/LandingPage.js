import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import FooterNavigation from './FooterNavigation';

import Container1 from '../Components 1.0.0/Containers';
import Holder1, { Holder3, Holder5 } from '../Components 1.0.0/Holders';
import {
    HorizontalTestBlock1,
    SubHeading4,
    Navbar1,
    RectangleImage,
    SubHeading2,
    ImageSlider1,
    Paragraph1,
    SecondarySubHeading2
}
    from '../Components 1.0.0/Blocks';

import KarenJump from '../images/KarenJump.jpg';
import chrischillin from '../images/Chris-hangingout.jpg';
import heroGreeting1 from '../images/SVG/heroGreeting1.svg';

import lies2logo from '../images/ticker/2lies&1truth.png';
import ataraxylogo from '../images/ticker/ataraxybaselogo.svg';

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
                        <SecondarySubHeading2>Who uses Stylux?</SecondarySubHeading2>
                        <Holder3>
                        <Link to=''></Link>
                        <RectangleImage size='tn'>{lies2logo}</RectangleImage>
                        <RectangleImage size='exsm'>{ataraxylogo}</RectangleImage>
                        </Holder3>
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
                            Elements
                            <Link to="">containers</Link>
                            <Link to="">holders</Link>
                            <Link to="">blocks</Link>
                            <Link to=""></Link>
                            Examples
                            <Link to="/samplepages">samples pages</Link>
                            <Link to="/templatesamples">template samples</Link>
                            <Link to=""></Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/donate">Donate</Link>

                        </Navbar1>
                        <Holder5>
                            <SubHeading2>
                                Get stuff done fast
                            </SubHeading2>
                            <ImageSlider1
                                background="white"
                                arrowColor="black">
                                {KarenJump}
                                {chrischillin}
                            </ImageSlider1>
                        </Holder5>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading2>
                            How does it work?
                        </SubHeading2>
                        <Paragraph1>
                            insert steps on how stylux works
                        </Paragraph1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading2>
                            Want to help out?
                        </SubHeading2>
                        <Paragraph1>
                            insert steps on how to help out, probable a mini clone of contact
                        </Paragraph1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}