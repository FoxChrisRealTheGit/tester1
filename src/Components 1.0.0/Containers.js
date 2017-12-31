import React, { Component } from 'react';
import './reset.css';

/* Containers */
/*
Containers description and use
*/

/* Start of Container 1 Component */
export default class Container1 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'row',
            block1: props.block1 || '1',
            textColor: props.textColor || 'yellow',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '0',
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
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle}>
                <div style={block1style}>{childs[0] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 1 Component */
/* Start of Container 2 Component */
export class Container2 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px',  
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
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const block2style ={
            flex: this.state.block2,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle}>
                <div style={block1style}>{childs[0] || <div />}</div>
                <div style={block2style}>{childs[1] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 2 Component */
/* Start of Container 3 Component */
export class Container3 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px',  
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
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const block2style ={
            flex: this.state.block2,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const block3style ={
            flex: this.state.block3,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        } 
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle}>
                <div style={block1style}>{childs[0] || <div />}</div>
                <div style={block2style}>{childs[1] || <div />}</div>
                <div style={block3style}>{childs[2] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 3 Component */
/* Start of Container 4 Component */
export class Container4 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            block4: props.block4 || '1',
            alignBlock4: props.alignBlock4 || 'center',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px',  
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
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const block2style ={
            flex: this.state.block2,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const block3style ={
            flex: this.state.block3,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }  
        const block4style ={
            flex: this.state.block4,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle}>
            <div style={block1style}>{childs[0] || <div />}</div>
            <div style={block2style}>{childs[1] || <div />}</div>
            <div style={block3style}>{childs[2] || <div />}</div>
            <div style={block4style}>{childs[3] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 4 Component */
/* Start of Container 5 Component */
export class Container5 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            block4: props.block4 || '1',
            alignBlock4: props.alignBlock4 || 'center',
            block5: props.block5 || '1',
            alignBlock5: props.alignBlock5 || 'center',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px',  
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
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const block2style ={
            flex: this.state.block2,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const block3style ={
            flex: this.state.block3,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }  
        const block4style ={
            flex: this.state.block4,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        } 
        const block5style ={
            flex: this.state.block5,
            background: this.state.background,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        }
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle}>
            <div style={block1style}>{childs[0] || <div />}</div>
            <div style={block2style}>{childs[1] || <div />}</div>
            <div style={block3style}>{childs[2] || <div />}</div>
            <div style={block4style}>{childs[3] || <div />}</div>
            <div style={block5style}>{childs[4] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 5 Component */