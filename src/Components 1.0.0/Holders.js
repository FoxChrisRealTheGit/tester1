import React, { Component } from 'react';
import './reset.css';

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
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
                padding: props.padding || '0',
                margin: props.margin || '10px 0',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
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
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block3: props.block3 || '1',
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
                padding: props.padding || '0',
                margin: props.margin || '10px 0',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock3,
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
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block3: props.block3 || '1',
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block4: props.block4 || '1',
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
                padding: props.padding || '0',
                margin: props.margin || '10px 0',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock3,
        };
        const block4styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock4,
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
                direction: props.direction || 'row',
                block1: props.block1 || '1',
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block3: props.block3 || '1',
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block4: props.block4 || '1',
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block5: props.block5 || '1',
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
                padding: props.padding || '0',
                margin: props.margin || '10px 0',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock3,
        };
        const block4styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock4,
        };
        const block5styles = {
            display: 'flex',
            flex: this.state.block5,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock5,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock5,
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
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
                padding: props.padding || '0',
                margin: props.margin || '10px 0',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
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
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block3: props.block3 || '1',
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
                padding: props.padding || '0',
                margin: props.margin || '10px 0',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock3,
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
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block3: props.block3 || '1',
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block4: props.block4 || '1',
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
                padding: props.padding || '0',
                margin: props.margin || '10px 0',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock3,
        };
        const block4styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock4,
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
/* End of Holder 7 Component */
/* Start of Holder 8 Component */
export class Holder8 extends Component {
    constructor(props){
        super(props);
        this.state={
                display: props.display || 'flex',
                direction: props.direction || 'column',
                block1: props.block1 || '1',
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block3: props.block3 || '1',
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block4: props.block4 || '1',
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block5: props.block5 || '1',
                alignBlock5: props.alignBlock5|| 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                textColor: props.textColor || 'black',
                background: props.background || 'white',
                padding: props.padding || '0',
                margin: props.margin || '10px 0',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock3,
        };
        const block4styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock4,
        };
        const block5styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock5,
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
/* End of Holder 8 Component */
/* Start of Holder 9 Component */
export class Holder9 extends Component {
    constructor(props){
        super(props);
        this.state={
                display: props.display || 'flex',
                direction: props.direction || 'column',
                block1: props.block1 || '1',
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block3: props.block3 || '1',
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block4: props.block4 || '1',
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block5: props.block5 || '1',
                alignBlock5: props.alignBlock5|| 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block6: props.block6 || '1',
                alignBlock6: props.alignBlock6|| 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock3,
        };
        const block4styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock4,
        };
        const block5styles = {
            display: 'flex',
            flex: this.state.block5,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock5,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock5,
        };
        const block6styles = {
            display: 'flex',
            flex: this.state.block6,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock6,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock6,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style ={holderstyles}>
                <div style ={block1styles}>{childs[0] || <div />}</div>
                <div style ={block2styles}>{childs[1] || <div />}</div>
                <div style ={block3styles}>{childs[2] || <div />}</div>
                <div style ={block4styles}>{childs[3] || <div />}</div>
                <div style ={block5styles}>{childs[4] || <div />}</div>
                <div style ={block6styles}>{childs[5] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 9 Component */
/* Start of Holder 10 Component */
export class Holder10 extends Component {
    constructor(props){
        super(props);
        this.state={
                display: props.display || 'flex',
                direction: props.direction || 'column',
                block1: props.block1 || '1',
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block2: props.block2 || '1',
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block3: props.block3 || '1',
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block4: props.block4 || '1',
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block5: props.block5 || '1',
                alignBlock5: props.alignBlock5|| 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block6: props.block6 || '1',
                alignBlock6: props.alignBloc6|| 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block7: props.block7 || '1',
                alignBlock7: props.alignBlock7|| 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
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
            justifyContent: this.state.justifyBlock1,
        };
        const block2styles = {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        };
        const block3styles = {
            display: 'flex',
            flex: this.state.block3,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock3,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock3,
        };
        const block4styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock4,
        };
        const block5styles = {
            display: 'flex',
            flex: this.state.block4,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock4,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock5,
        };
        const block6styles = {
            display: 'flex',
            flex: this.state.block6,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock6,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock6,
        };
        const block7styles = {
            display: 'flex',
            flex: this.state.block7,
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: this.state.alignBlock7,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock7,
        };
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style ={holderstyles}>
                <div style ={block1styles}>{childs[0] || <div />}</div>
                <div style ={block2styles}>{childs[1] || <div />}</div>
                <div style ={block3styles}>{childs[2] || <div />}</div>
                <div style ={block4styles}>{childs[3] || <div />}</div>
                <div style ={block5styles}>{childs[4] || <div />}</div>
                <div style ={block6styles}>{childs[5] || <div />}</div>
                <div style ={block7styles}>{childs[6] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 10 Component */
/* Start of Holder 11 Component */
export class Holder11 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
            block4: props.block4 || '1',
            alignBlock4: props.alignBlock4 || 'center',
            justifyBlock4: props.justifyBlock4 || 'center',
            block5: props.block5 || '1',
            alignBlock5: props.alignBlock5|| 'center',
            justifyBlock5: props.justifyBlock5 || 'center',
            block6: props.block6 || '1',
            alignBlock6: props.alignBloc6|| 'center',
            justifyBlock6: props.justifyBlock6 || 'center',
            block7: props.block7 || '1',
            alignBlock7: props.alignBlock7|| 'center',
            justifyBlock7: props.justifyBlock7 || 'center',
            block8: props.block8 || '1',
            alignBlock8: props.alignBlock8 || 'center',
            justifyBlock8: props.justifyBlock8 || 'center',
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
        justifyContent: this.state.justifyBlock1,
    };
    const block2styles = {
        display: 'flex',
        flex: this.state.block2,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock2,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock2,
    };
    const block3styles = {
        display: 'flex',
        flex: this.state.block3,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock3,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock3,
    };
    const block4styles = {
        display: 'flex',
        flex: this.state.block4,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock4,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock4,
    };
    const block5styles = {
        display: 'flex',
        flex: this.state.block4,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock4,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock5,
    };
    const block6styles = {
        display: 'flex',
        flex: this.state.block6,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock6,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock6,
    };
    const block7styles = {
        display: 'flex',
        flex: this.state.block7,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock7,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock7,
    };
    const block8styles = {
        display: 'flex',
        flex: this.state.block8,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock8,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock8,
    };
    const childs = React.Children.toArray(this.props.children);
    return (
        <section style ={holderstyles}>
            <div style ={block1styles}>{childs[0] || <div />}</div>
            <div style ={block2styles}>{childs[1] || <div />}</div>
            <div style ={block3styles}>{childs[2] || <div />}</div>
            <div style ={block4styles}>{childs[3] || <div />}</div>
            <div style ={block5styles}>{childs[4] || <div />}</div>
            <div style ={block6styles}>{childs[5] || <div />}</div>
            <div style ={block7styles}>{childs[6] || <div />}</div>
            <div style ={block8styles}>{childs[7] || <div />}</div>
        </section>
        )
    }
}
/* End of Holder 11 Component */
/* Start of Holder 12 Component */
export class Holder12 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
            block4: props.block4 || '1',
            alignBlock4: props.alignBlock4 || 'center',
            justifyBlock4: props.justifyBlock4 || 'center',
            block5: props.block5 || '1',
            alignBlock5: props.alignBlock5|| 'center',
            justifyBlock5: props.justifyBlock5 || 'center',
            block6: props.block6 || '1',
            alignBlock6: props.alignBloc6|| 'center',
            justifyBlock6: props.justifyBlock6 || 'center',
            block7: props.block7 || '1',
            alignBlock7: props.alignBlock7|| 'center',
            justifyBlock7: props.justifyBlock7 || 'center',
            block8: props.block8 || '1',
            alignBlock8: props.alignBlock8 || 'center',
            justifyBlock8: props.justifyBlock8 || 'center',
            block9: props.block9 || '1',
            alignBlock9: props.alignBlock9 || 'center',
            justifyBlock9: props.justifyBlock9 || 'center',
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
        justifyContent: this.state.justifyBlock1,
    };
    const block2styles = {
        display: 'flex',
        flex: this.state.block2,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock2,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock2,
    };
    const block3styles = {
        display: 'flex',
        flex: this.state.block3,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock3,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock3,
    };
    const block4styles = {
        display: 'flex',
        flex: this.state.block4,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock4,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock4,
    };
    const block5styles = {
        display: 'flex',
        flex: this.state.block4,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock4,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock5,
    };
    const block6styles = {
        display: 'flex',
        flex: this.state.block6,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock6,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock6,
    };
    const block7styles = {
        display: 'flex',
        flex: this.state.block7,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock7,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock7,
    };
    const block8styles = {
        display: 'flex',
        flex: this.state.block8,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock8,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock8,
    };
    const block9styles = {
        display: 'flex',
        flex: this.state.block9,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock9,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock9,
    };
    const childs = React.Children.toArray(this.props.children);
    return (
        <section style ={holderstyles}>
            <div style ={block1styles}>{childs[0] || <div />}</div>
            <div style ={block2styles}>{childs[1] || <div />}</div>
            <div style ={block3styles}>{childs[2] || <div />}</div>
            <div style ={block4styles}>{childs[3] || <div />}</div>
            <div style ={block5styles}>{childs[4] || <div />}</div>
            <div style ={block6styles}>{childs[5] || <div />}</div>
            <div style ={block7styles}>{childs[6] || <div />}</div>
            <div style ={block8styles}>{childs[7] || <div />}</div>
            <div style ={block9styles}>{childs[8] || <div />}</div>
        </section>
        )
    }
}
/* End of Holder 12 Component */
/* Start of Holder 13 Component */
export class Holder13 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
            block4: props.block4 || '1',
            alignBlock4: props.alignBlock4 || 'center',
            justifyBlock4: props.justifyBlock4 || 'center',
            block5: props.block5 || '1',
            alignBlock5: props.alignBlock5|| 'center',
            justifyBlock5: props.justifyBlock5 || 'center',
            block6: props.block6 || '1',
            alignBlock6: props.alignBloc6|| 'center',
            justifyBlock6: props.justifyBlock6 || 'center',
            block7: props.block7 || '1',
            alignBlock7: props.alignBlock7|| 'center',
            justifyBlock7: props.justifyBlock7 || 'center',
            block8: props.block8 || '1',
            alignBlock8: props.alignBlock8 || 'center',
            justifyBlock8: props.justifyBlock8 || 'center',
            block9: props.block9 || '1',
            alignBlock9: props.alignBlock9 || 'center',
            justifyBlock9: props.justifyBlock9 || 'center',
            block10: props.block10 || '1',
            alignBlock10: props.alignBlock10 || 'center',
            justifyBlock10: props.justifyBlock10 || 'center',
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
        justifyContent: this.state.justifyBlock1,
    };
    const block2styles = {
        display: 'flex',
        flex: this.state.block2,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock2,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock2,
    };
    const block3styles = {
        display: 'flex',
        flex: this.state.block3,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock3,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock3,
    };
    const block4styles = {
        display: 'flex',
        flex: this.state.block4,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock4,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock4,
    };
    const block5styles = {
        display: 'flex',
        flex: this.state.block4,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock4,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock5,
    };
    const block6styles = {
        display: 'flex',
        flex: this.state.block6,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock6,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock6,
    };
    const block7styles = {
        display: 'flex',
        flex: this.state.block7,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock7,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock7,
    };
    const block8styles = {
        display: 'flex',
        flex: this.state.block8,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock8,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock8,
    };
    const block9styles = {
        display: 'flex',
        flex: this.state.block9,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock9,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock9,
    };
    const block10styles = {
        display: 'flex',
        flex: this.state.block10,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: this.state.alignBlock10,
        margin: this.state.margin,
        justifyContent: this.state.justifyBlock10,
    };
    const childs = React.Children.toArray(this.props.children);
    return (
        <section style ={holderstyles}>
            <div style ={block1styles}>{childs[0] || <div />}</div>
            <div style ={block2styles}>{childs[1] || <div />}</div>
            <div style ={block3styles}>{childs[2] || <div />}</div>
            <div style ={block4styles}>{childs[3] || <div />}</div>
            <div style ={block5styles}>{childs[4] || <div />}</div>
            <div style ={block6styles}>{childs[5] || <div />}</div>
            <div style ={block7styles}>{childs[6] || <div />}</div>
            <div style ={block8styles}>{childs[7] || <div />}</div>
            <div style ={block9styles}>{childs[8] || <div />}</div>
            <div style ={block10styles}>{childs[9] || <div />}</div>
        </section>
        )
    }
}
/* End of Holder 13 Component */