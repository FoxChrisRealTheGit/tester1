import React, { Component } from 'react';
import Navigation from '../Navigation';

import Container1 from '../../Component/Containers';
import {
    HeadingTest1,
    HeadingTest2,
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
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        Buttons
                    </HeadingTest1>
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