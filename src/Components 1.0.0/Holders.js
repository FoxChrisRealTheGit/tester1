import React, { Component } from 'react';
import '../Component/component styles/reset.css';

/* Holders*/
/*
Holders Description and use
*/

/* Start of Holder 1 Component */
export default class Holder1 extends Component {
    constructor(props){
        super(props);
        this.state={
                display: props.display || 'flex',
                direction: props.direction || 'row',
                block1Direction: props.block1direction || 'row',
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
            margin: this.state.margin,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
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
/* End of Holder 1 Component */
/* Start of Holder 2 Component */
export class Holder2 extends Component {
    constructor(props){
        super(props);
        this.state={
                display: props.display || 'flex',
                direction: props.direction || 'row',
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
            margin: this.state.margin,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style ={holderstyles}>
                <div style ={block1styles}>{childs[0] || <div />}</div>
                <div style ={block2styles}>{childs[1] || <div />}</div>
                <div style ={block3styles}>{childs[2] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 2 Component */
/* Start of Holder 3 Component */
export class Holder3 extends Component {
    constructor(props){
        super(props);
        this.state={
                display: props.display || 'flex',
                direction: props.direction || 'row',
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
            margin: this.state.margin,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
        };
        const block4styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style ={holderstyles}>
                <div style ={block1styles}>{childs[0] || <div />}</div>
                <div style ={block2styles}>{childs[1] || <div />}</div>
                <div style ={block3styles}>{childs[2] || <div />}</div>
                <div style ={block4styles}>{childs[3] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 3 Component */
/* Start of Holder 4 Component */
export class Holder4 extends Component {
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
            margin: this.state.margin,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
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
/* End of Holder 4 Component */
/* Start of Holder 5 Component */
export class Holder5 extends Component {
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
            margin: this.state.margin,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style ={holderstyles}>
                <div style ={block1styles}>{childs[0] || <div />}</div>
                <div style ={block2styles}>{childs[1] || <div />}</div>
                <div style ={block3styles}>{childs[2] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 5 Component */
/* Start of Holder 6 Component */
export class Holder6 extends Component {
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
            margin: this.state.margin,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
        };
        const block4styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style ={holderstyles}>
                <div style ={block1styles}>{childs[0] || <div />}</div>
                <div style ={block2styles}>{childs[1] || <div />}</div>
                <div style ={block3styles}>{childs[2] || <div />}</div>
                <div style ={block4styles}>{childs[3] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 6 Component */
/* Start of Holder 7 Component */
export class Holder7 extends Component {
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
                alignBlock5: props.alignBlock5|| 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
                padding: props.padding || '0',
                margin: props.margin || '10px',
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
            margin: this.state.margin,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
        };
        const block4styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
        };
        const block5styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style ={holderstyles}>
                <div style ={block1styles}>{childs[0] || <div />}</div>
                <div style ={block2styles}>{childs[1] || <div />}</div>
                <div style ={block3styles}>{childs[2] || <div />}</div>
                <div style ={block4styles}>{childs[3] || <div />}</div>
                <div style ={block5styles}>{childs[4] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 7 Component */