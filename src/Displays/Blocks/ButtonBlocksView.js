import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';

import Container1 from '../../Components 1.0.0/Containers';
import {
    Heading1,
    SubNavbar1,
    HorizontalTestBlock1,
    FlatButton1,
    FlatButton2,
    RaisedButton1,
    RaisedButton2,
    FloatingButton1,
    FloatingButton2
} from '../../Component/Blocks';

export default class ButtonBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/blocks/buttonviews">Button</Link>
                    <Link to="/blocks/headingviews">Headings</Link>
                    <Link to="/blocks/imageviews">Images</Link>
                    <Link to="/blocks/navbarviews">NavBars</Link>
                    <Link to="/blocks/paragraphviews">Paragraphs</Link>
                </SubNavbar1>
                <Container1>
                    <Heading1>
                        Buttons
                    </Heading1>
                </Container1>
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
            </section>
        )
    }
}