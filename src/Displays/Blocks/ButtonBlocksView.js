import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import Container1 from '../../Components 1.0.0/Containers';
import {
    MainHeading1,
    SubNavbar1,
    HorizontalTestBlock1,
    FlatButton1,
    FlatButton2,
    RaisedButton1,
    RaisedButton2,
    FloatingButton1,
    FloatingButton2
} from '../../Components 1.0.0/Blocks';

export default class ButtonBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <MainHeading1>
                        Buttons
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/blocks/buttonviews">button</Link>
                    <Link to="/blocks/headingviews">headings</Link>
                    <Link to="/blocks/imageviews">images</Link>
                    <Link to="/blocks/navbarviews">navbars</Link>
                    <Link to="/blocks/paragraphviews">paragraphs</Link>
                </SubNavbar1>

                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <FlatButton1>
                        Flat Button 1
                    </FlatButton1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <FlatButton2>
                        Flat Button 2
                    </FlatButton2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <RaisedButton1>
                        Raised Button 1
                    </RaisedButton1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <RaisedButton2>
                        Raised Button 2
                    </RaisedButton2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <FloatingButton1>
                        Floating Button 1
                    </FloatingButton1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <FloatingButton2>
                        Floating Button 2
                    </FloatingButton2>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}