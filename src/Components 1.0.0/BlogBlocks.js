import React, { Component } from 'react';
import './reset.css';

import Holder1, {
    Holder6,
    Holder9,
    Holder5,
    Holder7,
    Holder8,
} from './Holders';

import {
    P2, SquareImage, H22, H42, H44, H41, Navbar1
} from './Blocks';
/* Blog blocks */



/* Feature blog blocks */
/* start Feature blog 1 */
//two brown eyes large display
export default class FeatureBlog1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: props.buttonText || "read more..."
        }
    }
    render() {
        const CHILDS = React.Children.toArray(this.props.children.split("\\"));
        return (
            <Holder9>
                <H44>{CHILDS[0]}</H44>
                <H22>{CHILDS[1]}</H22>
                <H42>{CHILDS[2]}</H42>
                <SquareImage size="lg">{CHILDS[3]}</SquareImage>
                <P2>{CHILDS[4]}</P2>
                <button>{this.state.buttonText}</button>
            </Holder9>
        )
    }
}
/* end of feature blog 1 */
/* start Feature blog 2 */
//techcrunch four grid feature
export class FeatureBlog2 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children.split("\\"));
        return (
            <Holder1
                alignBlock1="flex-end"
                alignBlock2="flex-start">
                <SquareImage size="lg">{CHILDS[0]}</SquareImage>
                <Holder6>
                    <Holder1
                        block1='0.5'>
                        <SquareImage>{CHILDS[1]}</SquareImage>
                        <Holder5
                            alignBlock1="flex-start"
                            alignBlock2="flex-start">
                            <H41>
                                {CHILDS[2]}
                            </H41>
                            <H44>
                                {CHILDS[3]}
                            </H44>
                        </Holder5>
                    </Holder1>
                    <Holder1
                        block1='0.5'>
                        <SquareImage>{CHILDS[4]}</SquareImage>
                        <Holder5
                            alignBlock1="flex-start"
                            alignBlock2="flex-start">
                            <H41>
                                {CHILDS[5]}
                            </H41>
                            <H44>
                                {CHILDS[6]}
                            </H44>
                        </Holder5>
                    </Holder1>
                    <Holder1
                        block1='0.5'>
                        <SquareImage>{CHILDS[7]}</SquareImage>
                        <Holder5
                            alignBlock1="flex-start"
                            alignBlock2="flex-start">
                            <H41>
                                {CHILDS[8]}
                            </H41>
                            <H44>
                                {CHILDS[9]}
                            </H44>
                        </Holder5>
                    </Holder1>
                </Holder6>
            </Holder1>
        )
    }
}
/* end of feature blog 2 */
/* end of feature blog blocks */
/* start of display blog blocks */
/* Start of display blog 1 */
//two brown eyes main display
export class DisplayBlog1 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children.split("\\"));
        return (
            <Holder1
                alignBlock1="flex-end"
                alignBlock2="flex-start">
                <SquareImage>{CHILDS[0]}</SquareImage>
                <Holder7
                    alignBlock1="flex-start"
                    alignBlock2="flex-start"
                    alignBlock3="flex-start"
                    alignBlock4="flex-start">
                    <H44>{CHILDS[1]}</H44>
                    <H22>{CHILDS[2]}</H22>
                    <P2>{CHILDS[3] + "..."} </P2>
                    <H42>{CHILDS[4]}</H42>
                </Holder7>
            </Holder1>
        )
    }
}
/* End of display blog 1 */
/* start of display blog 2 */
//techcrunch main display
export class DisplayBlog2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linkText: props.linkText || "Read More",
        }
    }
    render() {
        const CHILDS = React.Children.toArray(this.props.children.split("\\"));
        return (
            <Holder1
                alignBlock2="flex-start"
                justifyBlock2="flex-start">
                <Holder8
                    alignBlock1="flex-start"
                    alignBlock2="flex-start"
                    alignBlock3="flex-start">
                    <H22>{CHILDS[0]}</H22>
                    <H42>{"by: " + CHILDS[1]}</H42>
                    <P2>{CHILDS[2] + "..." + this.state.linkText} </P2>
                    <Navbar1
                        align="flex-start"
                        navbarWidth="30%">
                        <a href="facebook.com"></a>
                        <a href="twitter.com"></a>
                        <a href="linkedin.com"></a>
                        <a href="reddit.com"></a>
                    </Navbar1>
                </Holder8>
                <SquareImage size="md">{CHILDS[3]}</SquareImage>
            </Holder1>
        )
    }
}
/* End of display blog 2*/
/* Start of display blog 3 */
//card like amelias
export class DisplayBlog3 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}
/* End of display blog 3 */
/* Start of display blog 4*/
//small block type
export class DisplayBlog4 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children.split("\\"));
        return (
            <Holder5>
                <SquareImage>{CHILDS[0]}</SquareImage>
                <H42>{CHILDS[1]}</H42>
            </Holder5>
        )
    }
}
/* End of display blog 4 */
/* End of display blog blocks */
