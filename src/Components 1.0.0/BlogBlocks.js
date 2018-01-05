import React, { Component } from 'react';
import './reset.css';

import Container1 from './Containers';

import Holder1, {
    Holder6,
    Holder9,
    Holder5,
    Holder7,
    Holder8,
} from './Holders';

import {
    Paragraph2, SquareImage, Heading2, SecondarySubHeading2, SecondarySubHeading4, SecondarySubHeading1, Navbar1
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
                <SecondarySubHeading4>{CHILDS[0]}</SecondarySubHeading4>
                <Heading2>{CHILDS[1]}</Heading2>
                <SecondarySubHeading2>{CHILDS[2]}</SecondarySubHeading2>
                <SquareImage size="lg">{CHILDS[3]}</SquareImage>
                <Paragraph2>{CHILDS[4]}</Paragraph2>
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
                            <SecondarySubHeading1>
                                {CHILDS[2]}
                            </SecondarySubHeading1>
                            <SecondarySubHeading4>
                                {CHILDS[3]}
                            </SecondarySubHeading4>
                        </Holder5>
                    </Holder1>
                    <Holder1
                        block1='0.5'>
                        <SquareImage>{CHILDS[4]}</SquareImage>
                        <Holder5
                            alignBlock1="flex-start"
                            alignBlock2="flex-start">
                            <SecondarySubHeading1>
                                {CHILDS[5]}
                            </SecondarySubHeading1>
                            <SecondarySubHeading4>
                                {CHILDS[6]}
                            </SecondarySubHeading4>
                        </Holder5>
                    </Holder1>
                    <Holder1
                        block1='0.5'>
                        <SquareImage>{CHILDS[7]}</SquareImage>
                        <Holder5
                            alignBlock1="flex-start"
                            alignBlock2="flex-start">
                            <SecondarySubHeading1>
                                {CHILDS[8]}
                            </SecondarySubHeading1>
                            <SecondarySubHeading4>
                                {CHILDS[9]}
                            </SecondarySubHeading4>
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
                    <SecondarySubHeading4>{CHILDS[1]}</SecondarySubHeading4>
                    <Heading2>{CHILDS[2]}</Heading2>
                    <Paragraph2>{CHILDS[3] + "..."} </Paragraph2>
                    <SecondarySubHeading2>{CHILDS[4]}</SecondarySubHeading2>
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
                    <Heading2>{CHILDS[0]}</Heading2>
                    <SecondarySubHeading2>{"by: " + CHILDS[1]}</SecondarySubHeading2>
                    <Paragraph2>{CHILDS[2] + "..." + this.state.linkText} </Paragraph2>
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
                <SecondarySubHeading2>{CHILDS[1]}</SecondarySubHeading2>
            </Holder5>
        )
    }
}
/* End of display blog 4 */
/* End of display blog blocks */
