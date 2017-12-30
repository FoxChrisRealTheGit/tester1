import React, { Component } from 'react';
import '../Component/component styles/reset.css';

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
            alignItems: 'center'
        }
        return (
            <section style={containerStyle}>
                <div style={block1style}>{this.props.children || <div />}</div>
            </section>
        )
    }
}
/* End of Container 1 Component */