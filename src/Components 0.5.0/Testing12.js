import React, { Component } from 'react';
import './component styles/reset.css';
import './component styles/testing12.css';

/* Testing Containers */
/*
Containers description and use
*/

/* Start of Testing Container 1 Component */
export default class Container1 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'row',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            textColor: props.textColor || 'yellow',
            background: props.background || 'white',
        }
    }
    render() {
        const containerStyle ={
            display: this.state.display.display,
            flexDirection: this.state.direction,
        }
        const block1style ={
            flex: this.state.block1,
            background: this.state.background,
            flexDirection: 'column',
            alignItems: this.state.alignBlock1
        }
        return (
            <section style={containerStyle}>
                <div style={block1style}>{this.props.children || <div />}</div>
            </section>
        )
    }
}
/* End of Testing Container 1 Component */
/* Start of Testing Holder 1 Component */
export class TestingHolder1 extends Component {
    constructor(props){
        super(props);
        this.state={
                display: props.display || 'flex',
                direction: props.direction || 'row',
                block1: props.block1 || '1',
                alignBlock1: props.alignBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
            }
        }

    render() {
        const holderstyles = {
            width: '100%',
            display: this.state.display,
            flexDirection: this.state.direction,
            flexWrap: 'wrap',
            background: this.state.text,
            justifyContent: this.state.alignBlocks,
        };
        const block1styles = {
            display: 'flex',
            flex: this.state.block1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style ={holderstyles}>
                <div style ={block1styles}>{childs[0] || <div />}</div>
                <div style ={block2styles}>{childs[1] || <div />}</div>
            </section>
        )
    }
}
/* End of Testing Holder 1 Component */
/* Start of Testing Block 1 Component */
/* Start of Block 1 */
export class TestingBlock1 extends Component {
    render() {
        const testingBlock1 = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '2em',
            background: 'black'
        }
        return (
            <div style={testingBlock1}>
                <div />
            </div>
        )
    }
}

/* End of Block 1 */


/* End of Testing Block 1 Component */