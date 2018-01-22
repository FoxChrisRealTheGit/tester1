import React, { Component } from 'react';
import './reset.css';

import Holder1, { Holder2, Holder5, Holder7 } from './Holders';

//non temporary css sheet
import '../Components 1.0.0/SuperStyleSheet.css';

/* Blocks */
/*
Blocks Description and use
*/


/* empty blocks */
/* Start of Block 1 */
export default class Block1 extends Component {
    render() {
        const block1 = {
            width: '5px',
            height: '5px',
            margin: '0 auto',
        }
        return (
            <section style={block1}>
                <div />
            </section>
        )
    }
}

/* End of Block 1 */
/* Start of Block 2 */
export class Block2 extends Component {
    render() {
        const block2 = {
            width: '100px',
            height: '100px',
            background: 'black',
            margin: '0 auto',
        }
        return (
            <section style={block2}>
                <div />
            </section>
        )
    }
}
/* End of Block 2 */
/* Start of horizontal test block1 */
export class HorizontalTestBlock1 extends Component {
    render() {
        // const childs = React.Children.toArray(this.props.children);
        return (
            <section className="horizontalTest1">
                <hr />
            </section>
        )
    }
}

/* End of horizontal test block */
/*End of Test Section */
/* Start of Real Section */
/*
Blocks Description and use
*/
/* Start of Heading Blocks */
/* Start of h1 Main Heading */
export class H11 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '8em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',

        }
        return (
            <h1 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h1>
        )
    }
}
export class H12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '7em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',

        }
        return (
            <h1 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h1>
        )
    }
}
export class H13 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '9em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h1 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h1>
        )
    }
}
export class H14 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '8em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h1 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h1>
        )
    }
}
export class H15 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '8em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h1 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h1>
        )
    }
}
/* End of h1 Main Heading */
/* Start of h2 Heading */
export class H21 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '5.646em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h2 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h2>
        )
    }
}
export class H22 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '4.705em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h2 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h2>
        )
    }
}
export class H23 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '6.775em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h2 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h2>
        )
    }
}
export class H24 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '5.646em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h2 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h2>
        )
    }
}
export class H25 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '5.646em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'width',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h2 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h2>
        )
    }
}
/* End of h2 Heading */
/* Start of h3 SubHeading */
export class H31 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '3.489em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h3 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h3>
        )
    }
}
export class H32 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.9075em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h3 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h3>
        )
    }
}
export class H33 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '4.187em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h3 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h3>
        )
    }
}
export class H34 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '3.489em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h3 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h3>
        )
    }
}
export class H35 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '3.489em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h3 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h3>
        )
    }
}
/* End of h3 SubHeading */
/* Start of h4 Secondary SubHeading */
export class H41 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.157em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',

        }
        return (
            <h4 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h4>
        )
    }
}
export class H42 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '1.7975em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h4 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h4>
        )
    }
}
export class H43 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.588em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h4 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h4>
        )
    }
}
export class H44 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.157em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h4 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h4>
        )
    }
}
export class H45 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.157em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEADING = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        return (
            <h4 style={HEADING} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</h4>
        )
    }
}
/* End of h4 secondary subheading */
/* End of Heading Blocks */
/* Start of Paragraph Blocks */
/* Start of Basic Paragraph Blocks */
export class P1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const PARAGRAPH = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
        }
        return (
            <p style={PARAGRAPH} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</p>
        )
    }
}
export class P2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'serif',
            fontSize: props.size || '0.9em',
            lineHeight: props.lineHeight || '1.22em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const PARAGRAPH = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
        }
        return (
            <p style={PARAGRAPH} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</p>
        )
    }
}
export class P3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.6em',
            lineHeight: props.lineHeight || '1.8em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const PARAGRAPH = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
        }
        return (
            <p style={PARAGRAPH} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</p>
        )
    }
}
export class P4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            textShadow: props.shadow,
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.6em',
            lineHeight: props.lineHeight || '1.8em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const PARAGRAPH = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,
        }
        return (
            <p style={PARAGRAPH} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</p>
        )
    }
}

export class P5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            textShadow: props.shadow,
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            textAlign: props.textAlign || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
            width: props.width || 'inherit',
            height: props.height,
            border: props.border,
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const PARAGRAPH = {
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            textShadow: this.state.textShadow,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            textAlign: this.state.textAlign,
            padding: this.state.padding,
            margin: this.state.margin,

        }
        return (
            <p style={PARAGRAPH} id={this.state.id} className={this.state.className}>{this.state.childs[0]}</p>
        )
    }
}
/* End of Basic Paragraph Blocks */
/* Start of Pull Quotes */
export class PLQ1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            blockid: props.blockid,
            textid: props.textid,
            citeid: props.citeid,
            blockClassName: props.blockClassName,
            textClassName: props.textClassName,
            citeClassName: props.citeClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        this.setState({ childs: CHILDS })
    }
    render() {
        return (
            <blockquote id={this.state.blockid} className={`pullQuote1 ${this.state.blockClassName}`}>
                <p id={this.state.textid} className={`pullQuote1-text ${this.state.textClassName}`}>{this.state.childs[0]}</p>
                <cite id={this.state.citeid} className={this.state.citeClassName}>{this.state.childs[1]}</cite>
            </blockquote>
        )
    }
}
export class PLQ2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

            blockid: props.blockid,
            textid: props.testid,
            citeid: props.citeid,
            blockclassName: props.blockClassName,
            textclassName: props.textClassName,
            citeclassName: props.citeClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        this.setState({ childs: CHILDS })
    }
    render() {
        return (
            <blockquote id={this.state.blockid} className={`pullQuote2 ${this.state.blockClassName}`}>
                <p id={this.state.textid} className={`pullQuote2-text ${this.state.textClassName}`}>{this.state.childs[0]}</p>
                <cite id={this.state.citeid} className={this.state.citeClassName}>{this.state.childs[1]}</cite>
            </blockquote>
        )
    }
}
/* End of Pull Quotes */
/* End of Paragraph Blocks */
/* Start of Image Blocks */
/* Start of Circle Images */
export class CircleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const CIRCLEIMG = {
            borderRadius: "100%",
        }
        return (
            <img style={CIRCLEIMG} id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}

/* End of Circle Images */
/* Start of Rounded Images */
export class RoundedImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const ROUNDEDIMG = {
            borderRadius: '30%',
        }
        return (
            <img style={ROUNDEDIMG} id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}

/* End of Rounded Images */
/* Start of Oval Images */
export class OvalImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const OVALIMG = {
            borderRadius: '30%',
        }
        return (
            <img style={OVALIMG} id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}
/* End of Oval Images */
/* Start of Square Images */
export class SquareImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        return (
            <img id={this.state.id} className={`img-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}

/* End of Square Images */
/* Start of Rounded Rectangle Image */
export class RoundedRectangleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const ROUNDEDRECTANGLEIMG = {
            borderRadius: "30%",
        }
        return (
            <img style={ROUNDEDRECTANGLEIMG} id={this.state.id} className={`recimg-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}

/* End of Rounded Rectangle Image */
/* Start of Regular Rectangle Image */
export class RectangleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }

    render() {
        const image = {
            margin: '0 auto',
        }
        return (
            <img style={image} id={this.state.id} className={`recimg-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}

/* End of Regular Rectangle Image */
/* Start of Tall Rounded Rectangle Image */
export class TallRoundedRectangleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const TALLROUNDEDRECTANGLEIMG = {
            borderRadius: "30%",
        }
        return (
            <img style={TALLROUNDEDRECTANGLEIMG} id={this.state.id} className={`tallrecimg-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}
/* End of Tall Rounded Rectangle Iage */
/* Start of Tall Rectangle Image */
export class TallRectangleImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const image = {
            margin: '0 auto',
        }
        return (
            <img style={image} id={this.state.id} className={`tallrecimg-${this.state.size} ${this.state.className}`} src={this.state.childs[0]} alt={this.state.childs[1]} />
        )
    }
}
/* End of Tall Rectangle Image */
/* Start of Figure Blocks */
export class Figure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
            figid: props.figid,
            figCapid: props.figCapid,
            figClassName: props.figClassName,
            figCapClassName: props.figCapClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const CAPTION = {
            padding: '10px',
            color: 'gray',
            textAlign: 'center',
        }
        return (
            <figure id={this.state.figid} className={this.state.figClassName}>
                {this.state.childs[0]}
                <figcaption style={CAPTION} id={this.state.figCapid} className={this.state.figCapClassName}>
                    {this.state.childs[1]}
                </figcaption>
            </figure>
        )
    }
}

/* End of Figure Blocks */
/* Start of Hero Blocks */
export class Hero1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height || 'inherit',
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEROSTYLE = {
            background: this.state.background,
            backgroundImage: this.state.backgroundImage,
            backgroundRepeat: this.state.backgroundRepeat,
            backgroundPosition: this.state.backgroundPosition,
            backgroundSize: this.state.backgroundSize,
            width: this.state.width,
            height: this.state.height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        return (
            <div style={HEROSTYLE} id={this.state.id} className={this.state.className}>
                <Holder7>
                    {this.state.childs[0]}
                    {this.state.childs[2]}
                    {this.state.childs[1]}
                </Holder7>
            </div>
        )
    }
}
export class Hero2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'contain 80%',
            width: props.width || '100%',
            height: props.height || 'inherit',
            bottomBoxWidth: props.bottomBoxWidth || '100%',
            bottomBoxHeight: props.bottomBoxHeight || '25%',
            bottomBoxPadding: props.bottomBoxPadding,
            bottomBoxBackgroundColor: props.bottomBoxBC || 'rgba(0, 0, 0, 0.5)',
            heroid: props.heroid,
            bottomid: props.bottomid,
            heroClassName: props.heroClassName,
            bottomClassName: props.bottomClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEROSTYLE = {
            background: this.state.background,
            backgroundImage: this.state.backgroundImage,
            backgroundRepeat: this.state.backgroundRepeat,
            backgroundPosition: this.state.backgroundPosition,
            backgroundSize: this.state.backgroundSize,
            width: this.state.width,
            height: this.state.height,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
        }
        const BOTTOMBACKGROUND = {
            backgroundColor: this.state.bottomBoxBackgroundColor,
            width: this.state.bottomBoxWidth,
            height: this.state.bottomBoxHeight,
            padding: this.state.bottomBoxPadding,
            overflow: 'hidden',
        }
        return (
            <div style={HEROSTYLE} id={this.state.heroid} className={this.state.heroClassName}>
                <div style={BOTTOMBACKGROUND} id={this.state.bottomid} className={this.state.bottomClassName}>
                    <Holder5>
                        {this.state.childs[0]}
                    </Holder5>
                </div>
            </div>
        )
    }
}
export class Hero3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEROSTYLE = {
            background: this.state.background,
            backgroundImage: this.state.backgroundImage,
            backgroundRepeat: this.state.backgroundRepeat,
            backgroundPosition: this.state.backgroundPosition,
            backgroundSize: this.state.backgroundSize,
            width: this.state.width,
            height: this.state.height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        return (
            <div style={HEROSTYLE} id={this.state.id} className={this.state.className}>
                <Holder1>
                    {this.state.childs[0]}
                </Holder1>
            </div>
        )
    }
}
export class Hero4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEROSTYLE = {
            background: this.state.background,
            backgroundImage: this.state.backgroundImage,
            backgroundRepeat: this.state.backgroundRepeat,
            backgroundPosition: this.state.backgroundPosition,
            backgroundSize: this.state.backgroundSize,
            width: this.state.width,
            height: this.state.height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        return (
            <div style={HEROSTYLE} id={this.state.id} className={this.state.className}>
                <Holder1>
                    {this.state.childs[2]}
                    {this.state.childs[0]}
                </Holder1>
            </div>
        )
    }
}
export class Hero5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: props.background,
            backgroundImage: props.image,
            backgroundRepeat: props.imageRepeat || 'no-repeat',
            backgroundPosition: props.backgroundPosition || 'center',
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const HEROSTYLE = {
            background: this.state.background,
            backgroundImage: this.state.backgroundImage,
            backgroundRepeat: this.state.backgroundRepeat,
            backgroundPosition: this.state.backgroundPosition,
            backgroundSize: this.state.backgroundSize,
            width: this.state.width,
            height: this.state.height,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
        }
        return (
            <div style={HEROSTYLE} id={this.state.id} className={this.state.className}>
                <Holder7>
                    {this.state.childs[0]}
                    <Holder2>
                        {this.state.childs[1]}
                        {this.state.childs[2]}
                        {this.state.childs[3]}
                    </Holder2>
                    <Holder2>
                        {this.state.childs[4]}
                        {this.state.childs[5]}
                        {this.state.childs[6]}
                    </Holder2>
                </Holder7>
            </div>
        )
    }
}
/* End of Hero Blocks */
/* End of Image Blocks */
/* Start of Button Blocks */
/* Start of Flat Buttons */
export class FlatButton1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: props.onClick,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }

    render() {
        return (
            <button id={this.state.id} className={`flatButton1 ${this.state.className}`}
                onClick={this.state.onClick}>{this.state[0]}</button>
        )
    }
}
export class FlatButton2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: props.onClick,
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        return (
            <button id={this.state.id} className={`flatButton2 ${this.state.className}`}>{this.state.childs[0]}</button>
        )
    }
}
/* End of Flat Buttons */
/* Start of Raised Buttons */
export class RaisedButton1 extends Component {
    constructor(props) {
        super();
        this.state = {
            height: "150px",
            width: "150px",
            fontFamily: "inherit",
            color: "blue",
            id: props.id,
            className: props.className,
            childs: ''
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    render() {
        const BUTTONSTYLE = {
            height: this.state.height,
            width: this.state.width,
            fontFamily: this.state.fontFamily,
            margin: 0,
            padding: 0,
        }
        const BUTTONCOLOR = {
            display: "flex",
            flex: 2,
            background: this.state.color,
        }
        return (
            <button style={BUTTONSTYLE} id={this.state.id} className={`raisedButton1 ${this.state.className}`}>
                <div style={BUTTONCOLOR}>
                    {this.state.childs[0]}
                </div>
            </button>
        )
    }
}
export class RaisedButton2 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <button className="raisedButton2">{CHILDS[0]}</button>
        )
    }
}
/* End of Raised Buttons */
/* Start of Floating Buttons */
export class FloatingButton1 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <button className="floatingButton1">{CHILDS[0]}</button>
        )
    }
}
export class FloatingButton2 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <button className="floatingButton2">{CHILDS[0]}</button>
        )
    }
}
/* End of Floating Buttons */
/* End of Button Blocks */
/* Start of Navigation Blocks */
/* Start of NavBar Blocks */
export class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '100%',
            totalHeight: props.height,
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'center',
            columnAlign: props.columnAlign || 'center',
            margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '10px 0',
            mainBackground: props.mainBackground || 'inherit',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'black',
            fontSize: props.fontSize || '1.333em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            itemsClassName: props.itemsClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const NAVBAR_NAVBAR_LI = {
            display: 'flex',
            flex: 1,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            justifyContent: 'center',
            margin: this.state.itemSpaceing,
            background: this.state.itemBackground,
            fontVariant: this.state.fontVariant,
        };
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBARACTUAL = CHILDS.map((x, i) => {
            return <li key={i} style={NAVBAR_NAVBAR_LI}>{x}</li>
        })
        this.setState({ childs: NAVBARACTUAL })
    }
    render() {
        const NAVBAR = {
            width: this.state.totalWidth,
            height: this.state.totalHeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.alignItems,
            margin: '0',
            padding: this.state.padding,
            background: this.state.mainBackground,
            color: this.state.color,
        };
        const NAVBAR_NAVBAR = {
            width: this.state.navBarWidth,
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: this.state.columnAlign,
            fontFamily: this.state.fontFamily,
            flexDirection: this.state.direction,
        };
        return (
            <nav style={NAVBAR} id={this.state.navid} className={this.state.navClassName}>
                <ul style={NAVBAR_NAVBAR} id={this.state.navid} className={`${this.state.navClassName} navbar1-navbar socialness`}>
                    {this.state.childs}
                </ul>
            </nav>
        )
    }
}

/* End of NavBar Blocks */
/* Start of Sub NavBar Blocks */
export class SubNavbar1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '50%',
            totalHeight: props.height || '30px',
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'flex-start',
            columnAlign: props.columnAlign || 'center',
            //margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '0',
            mainBackground: props.mainBackground || 'black',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'whitesmoke',
            fontSize: props.fontSize || '0.8em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            listid: props.listid,
            itemsid: props.itemsid,
            navClassName: props.navClassName,
            listClassName: props.listClassName,
            itemsClassName: props.itemsClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const SUBNAVBAR_NAVBAR_LI = {
            display: 'flex',
            flex: 1,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            justifyContent: 'center',
            margin: this.state.itemSpaceing,
            background: this.state.itemBackground,
            fontVariant: this.state.fontVariant,
        };
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i} style={SUBNAVBAR_NAVBAR_LI} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
        })
        this.setState({ childs: NAVBAR })
    }
    render() {
        const SUBNAVBAR = {
            width: this.state.totalWidth,
            height: this.state.totalHeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.alignItems,
            margin: '0',
            padding: this.state.padding,
            background: this.state.mainBackground,
            color: this.state.color,
            top: '-1px',
            position: "sticky",
            zIndex: "200",
        };
        const SUBNAVBAR_NAVBAR = {
            width: this.state.navBarWidth,
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            flex: 1,
            alignItems: this.state.columnAlign,
            fontFamily: this.state.fontFamily,
            flexDirection: this.state.direction,
        };

        return (
            <nav style={SUBNAVBAR} id={this.state.navid} className={`subnavbar1 socialness ${this.state.navClassName}`}>
                <ul style={SUBNAVBAR_NAVBAR} id={this.state.listid} className={`subnavbar1-navbar ${this.state.listClassName}`}>
                    {this.state.childs}
                </ul>
            </nav>
        )
    }
}
export class SubNavbar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontFamily: props.font || 'serif',
            totalWidth: props.totalWidth || '100%',
            navBarWidth: props.navbarWidth || '50%',
            totalHeight: props.height || '30px',
            display: props.display || 'flex',
            direction: props.direction || 'row',
            alignItems: props.align || 'center',
            columnAlign: props.columnAlign || 'center',
            //margin: props.margin || '0',
            padding: props.padding || '0',
            itemSpaceing: props.itemSpacing || '0',
            mainBackground: props.mainBackground || 'gray',
            itemBackground: props.itemBackground || 'inherit',
            color: props.color || 'black',
            fontSize: props.fontSize || '0.8em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
            navid: props.navid,
            leftItemsid: props.leftItemsid,
            rightItemsid: props.rightItemsid,
            navClassName: props.navClassName,
            leftItemsClassName: props.leftItemsClassName,
            rightItemsClassName: props.rightItemsClassName,
            childs: ''
        }
    }
    componentDidMount() {
        const SUBNAVBAR_NAVBAR_LI = {
            display: 'flex',
            flex: 1,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            justifyContent: 'center',
            margin: this.state.itemSpaceing,
            background: this.state.itemBackground,
            fontVariant: this.state.fontVariant,
        };
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i} style={SUBNAVBAR_NAVBAR_LI} id={this.state.itemsid} className={this.state.itemsClassName}>{x}</li>
        })
        this.setState({ childs: NAVBAR })
    }
    render() {
        const SUBNAVBAR = {
            width: this.state.totalWidth,
            height: this.state.totalHeight,
            color: this.state.color,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.alignItems,
            margin: '0',
            padding: this.state.padding,
            background: this.state.mainBackground,
            posistion: 'sticky',
            top: 0,
        };
        const SUBNAVBAR_NAVBAR1 = {
            width: this.state.navBarWidth,
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            flex: 1,
            alignItems: this.state.columnAlign,
            fontFamily: this.state.fontFamily,
            flexDirection: this.state.direction,
        };
        const SUBNAVBAR_NAVBAR2 = {
            width: this.state.navBarWidth,
            height: 'inherit',
            display: 'flex',
            flexWrap: 'wrap',
            flex: 1,
            alignItems: this.state.columnAlign,
            fontFamily: this.state.fontFamily,
            flexDirection: this.state.direction,
        };
        return (
            <nav style={SUBNAVBAR} className="subnavbar2 socialness">
                <Holder1>
                    <ul style={SUBNAVBAR_NAVBAR1} id={this.state.navid} className={`subnavbar2-navbar1 ${this.state.navClassName}`}>
                        {this.state.childs[0]}
                        {this.state.childs[1]}
                    </ul>
                    <Holder1
                        alignBlock1="flex-end"
                        alignBlock2="flex-start">
                        <div id={this.state.leftItemsid} className={`subnavbar2-globalSearch ${this.state.leftItemsClassName}`}>
                            <p>Search Holder</p>
                        </div>
                        <ul style={SUBNAVBAR_NAVBAR2} id={this.state.rightItemsid} className={`subnavbar2-navbar2 ${this.state.rightItemsClassName}`}>
                            {this.state.childs}
                        </ul>
                    </Holder1>
                </Holder1>
            </nav>
        )
    }
}
export class SubNavbar3 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <nav className="subnavbar3">
                <ul className="subnavbar3-navbar">
                    {NAVBAR}
                </ul>
            </nav>
        )
    }
}
export class SubNavbar4 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <nav className="subnavbar4">
                <ul className="subnavbar4-navbar">
                    {NAVBAR}
                </ul>
            </nav>
        )
    }
}
export class SubNavbar5 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <nav className="subnavbar5">
                <ul className="subnavbar5-navbar">
                    {NAVBAR}
                </ul>
            </nav>
        )
    }
}

/* End of Sub NavBar Blocks */
/* Start of Brand Blocks */
export class Brand1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
        }
    }
    render() {
        const BRAND = {
            display: this.state.display,
            flexDirection: this.state.direction,
            //width: '15%',
            alignItems: 'center',
        }
        const BRAND_NAME = {
            display: 'flex',
            fontWeight: '900',

        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div style={BRAND}>
                <SquareImage
                    size='tn'>
                    {CHILDS[0]}
                    logo
                    </SquareImage>
                <p style={BRAND_NAME}>{CHILDS[1]}</p>
            </div>
        )
    }
}
export class Brand2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
        }
    }
    render() {
        const BRAND = {
            display: 'flex',
            alignItems: 'center',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <section style={BRAND}>
                <RectangleImage
                    size='exsm'>
                    {CHILDS[0]}
                    logo
                    </RectangleImage>
            </section>
        )
    }
}
export class Brand3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
        }
    }
    render() {
        const BRAND = {
            display: 'flex',
            alignItems: 'center',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <section style={BRAND}>
                <SquareImage>
                    {CHILDS[0]}
                    logo
                    </SquareImage>
            </section>
        )
    }
}
export class Brand4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
        }
    }
    render() {
        const BRAND = {
            display: 'flex',
            alignItems: 'center',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <section style={BRAND}>
                <RectangleImage>
                    {CHILDS[0]}
                    logo
                    </RectangleImage>
            </section>
        )
    }
}
export class Brand5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
        }
    }
    render() {
        const BRAND = {
            display: 'flex',
            alignItems: 'center',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <section style={BRAND}>
            </section>
        )
    }
}
/* End of Brand Blocks */
/* Start of Drop Down Nav Blocks */
export class DropDownNav1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            background: props.background,
            boxShadow: props.boxShadow || '1px 2px 2px black',
            borderRadius: props.borderRadius || '0 0 5px 5px',
            offset: props.offset,
            color: props.color || 'black',
            textAlign: props.textAlign || 'center',
            margin: props.margin,
            padding: props.padding,
            width: props.width,
            mainid: props.mainid,
            titleid: props.titleid,
            itemsid: props.itemsid,
            mainClassName: props.mainClassName,
            titleClassName: props.titleClassName,
            itemsClassName: props.itemsClassName,
            childs: [],
            first: []
        }
        // this.enter = this.enter.bind(this);
        // this.left = this.left.bind(this);
    }
    componentDidMount() {
        const DropDown_NavBar_Li = {
            color: this.state.color,
        }

        const CHILDS = React.Children.toArray(this.props.children)

        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
        })
        const FIRST = CHILDS[0];
        this.setState({ childs: NAVBAR, first: FIRST })
    }
    // enter(){
    //     this.setState =({display: 'block'});
    // }
    // left(){
    //     this.setState =({display: 'none'});
    // }

    render() {
        const DROPDOWN = {
            position: 'absolute',
            display: this.state.display,
            borderRadius: this.state.borderRadius,
            boxShadow: this.state.boxShadow,
            margin: `0 0 0 ${this.state.offset}`,
            width: this.state.width,
            padding: '5px',
            textAlign: this.state.textAlign,
            flex: 1,
            background: this.state.background,
            zIndex: "1000",
            color: this.state.color,
        }

        const HASCHILDS = {
            fontSize: '1em',
            color: this.state.color,
            cursor: 'default',
        }

        return (
            <nav id={this.state.mainid} className={`dropdownnav1 ${this.state.mainClassName}`}>
                <li id={this.state.titleid} className={`DropDown ${this.state.titleClassName}`} style={HASCHILDS}
                    onMouseOver={() => this.setState({ display: 'block' })}
                    onMouseOut={() => this.setState({ display: 'none' })}>
                    {this.state.first}
                    <ul style={DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                        {this.state.childs}
                    </ul>
                </li>
            </nav>
        )
    }
}
export class DropDownNav2 extends Component {
    render() {
        //firstguide
        return (
            <nav className="dropdownnav2">
            </nav>
        )
    }
}
export class DropDownNav3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            background: props.background,
            offset: props.offset,
            margin: '',
            padding: props.padding,
            width: props.width,
            mainid: props.mainid,
            titleid: props.titleid,
            itemsid: props.itemsid,
            mainClassName: props.mainClassName,
            titleClassName: props.titleClassName,
            itemsClassName: props.itemsClassName,
        }
    }
    render() {
        const DROPDOWN = {
            position: 'absolute',
            display: this.state.display,
            margin: `0 0 0 ${this.state.offset}`,
            width: this.state.width,
            padding: '5px',
            textAlign: 'center',
            flex: 1,
            background: this.state.background,
        }
        // const DropDown_NavBar_Li = {

        // }
        const HASCHILDS = {
            fontSize: '1.333em',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <nav id={this.state.mainid} className={`dropdownnav3 ${this.state.mainClassName}`}>
                <li style={HASCHILDS}
                    onMouseOver={() => this.setState({ display: 'block' })}
                    onMouseOut={() => this.setState({ display: 'none' })}
                    id={this.state.titleid} className={this.state.titleClassName}>
                    {CHILDS[0]}
                    <ul style={DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                        <Holder2>
                            {CHILDS[1]}
                            {CHILDS[2]}
                            {CHILDS[3]}
                            {CHILDS[4]}
                            {CHILDS[5]}
                            {CHILDS[6]}
                            {CHILDS[7]}
                            {CHILDS[8]}
                            {CHILDS[9]}
                            {CHILDS[10]}
                        </Holder2>
                    </ul>
                </li>
            </nav>
        )
    }
}
export class DropDownNav4 extends Component {
    render() {

        return (
            <nav className="dropdownnav3">
            </nav>
        )
    }
}
//sideways
export class DropDownNav5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            background: props.background,
            offset: props.offset,
            margin: '',
            padding: props.padding,
            width: props.width,
            mainid: props.mainid,
            titleid: props.titleid,
            itemsid: props.itemsid,
            mainClassName: props.mainClassName,
            titleClassName: props.titleClassName,
            itemsClassName: props.itemsClassName,
        }
    }

    render() {
        const DROPDOWN = {
            position: 'absolute',
            display: this.state.display,
            margin: `0 0 0 ${this.state.offset}`,
            width: this.state.width,
            padding: '5px',
            textAlign: 'center',
            flex: 1,
            background: this.state.background,
        }
        const DropDown_NavBar_Li = {

        }
        const HASCHILDS = {
            fontSize: '1em',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
        })
        return (
            <nav id={this.state.mainid} className={`dropdownnav5 ${this.state.mainClassName}`}>
                <li style={HASCHILDS} id={this.state.titleid} className={`DropDown_Side ${this.state.titleClassName}`}
                    onMouseOver={() => this.setState({ display: 'inline' })}
                    onMouseOut={() => this.setState({ display: 'none' })}>
                    {CHILDS[0]}
                    <ul style={DROPDOWN} id={this.state.itemsid} className={this.state.itemsClassName}>
                        {NAVBAR}
                    </ul>
                </li>
            </nav>
        )
    }
}

/* End of Drop Down Nav Blocks */
/* End of Navigation Blocks */
/* Start of image sliders */
export class ImageSlider1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages: [],
            cur: 0,
            arrowColor: props.arrowColor || 'white',
            background: props.background || 'black',
            padding: props.padding,
            height: props.height || '450px',
            slideTimer: props.slideTimer || '5000',
            mainid: props.mainid,
            leftArrowid: props.leftArrowid,
            rightArrowid: props.rightArrowid,
            sliderid: props.sliderid,
            mainClassName: props.mainClassName,
            leftArrowClassName: props.leftArrowClassName,
            rightArrowClassName: props.rightArrowClassName,
            sliderClassName: props.sliderClassName,

        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    componentDidMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
        setInterval(this.slideRight, this.state.slideTimer);
    }
    slideLeft() {
        if (this.state.cur === 0) {
            return this.setState({ cur: this.state.sliderImages.length - 1 })
        } else {
            return this.setState({ cur: this.state.cur - 1 })
        }
    }
    slideRight() {
        if (this.state.cur >= this.state.sliderImages.length - 1) {
            return this.setState({ cur: 0 })

        } else {
            return this.setState({ cur: this.state.cur + 1 })
        }
    }
    render() {
        const WRAP = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            background: this.state.background,
            overflowY: 'hidden',
            display: 'flex',
            padding: this.state.padding,
        };
        const LEFT_ARROW = {
            borderWidth: '30px 40px 30px 0',
            borderColor: `transparent ${this.state.arrowColor} transparent transparent`,
            left: '0',
            marginLeft: '30px',
        };
        const RIGHT_ARROW = {
            borderWidth: '30px 0 30px 40px',
            borderColor: `transparent transparent transparent ${this.state.arrowColor}`,
            right: '0',
            marginRight: '30px',
        };
        const SLIDER = {
            width: '100%',
            overflowX: 'hidden',
            height: this.state.height,
        };
        const SLIDE = {
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            height: this.state.height,

            // display:'block'

        };
        const SLIDE_CONTENT = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        };
        // const SLIDE_TEXT = {
        //     fontSize: '5em',
        //     color: 'white',
        //     posistion:'relative',
        //     top: '-50px',
        // };
        const RENDERSLIDES = this.state.sliderImages.map((x, i) => {
            return (
                <div key={i} style={SLIDE}>
                    <div style={SLIDE_CONTENT}>
                        {x}
                    </div>
                </div>
            )
        })
        return (
            <div style={WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                <div style={LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                <div style={SLIDER}>
                    {RENDERSLIDES[this.state.cur]}
                </div>
                <div style={RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
            </div>
        )
    }
}
/* end of image slider 1 */
/* start of image slider 2 */
export class ImageSlider2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages: [],
            cur: 0,
            arrowColor: props.arrowColor || 'white',
            background: props.background || 'black',
            padding: props.padding,
            height: props.height || '450px',
            slideTimer: props.slideTimer || '5000',
            mainid: props.mainid,
            sliderid: props.sliderid,
            mainClassName: props.mainClassName,
            sliderClassName: props.sliderClassName,
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    componentDidMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
        setInterval(this.slideRight, this.state.slideTimer);
    }
    slideLeft() {
        if (this.state.cur === 0) {
            return this.setState({ cur: this.state.sliderImages.length - 1 })
        } else {
            return this.setState({ cur: this.state.cur - 1 })
        }
    }
    slideRight() {
        if (this.state.cur >= this.state.sliderImages.length - 1) {
            return this.setState({ cur: 0 })

        } else {
            return this.setState({ cur: this.state.cur + 1 })
        }
    }

    render() {
        const WRAP = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            background: this.state.background,
            overflowY: 'hidden',
            display: 'flex',
            padding: this.state.padding,
        };
        const SLIDER = {
            width: '100%',
            overflowX: 'hidden',
            height: this.state.height,
        };
        const SLIDE = {
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            height: this.state.height,
            // display:'block'
        };
        const SLIDE_CONTENT = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        };
        const RENDERSLIDES = this.state.sliderImages.map((x, i) => {
            return (
                <div key={i} style={SLIDE}>
                    <div style={SLIDE_CONTENT}>
                        {x}
                    </div>
                </div>
            )
        })
        return (
            <div style={WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                <div style={SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                    {RENDERSLIDES[this.state.cur]}
                </div>
            </div>
        )
    }
}
/* end of image slider 2 */
/* start of image slider 3 */
export class ImageSlider3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages: [],
            cur: 0,
            arrowColor: props.arrowColor || 'white',
            background: props.background || 'black',
            padding: props.padding,
            height: props.height || '450px',
            slideTimer: props.slideTimer || '5000',
            mainid: props.mainid,
            leftArrowid: props.leftArrowid,
            rightArrowid: props.rightArrowid,
            sliderid: props.sliderid,
            mainClassName: props.mainClassName,
            leftArrowClassName: props.leftArrowClassName,
            rightArrowClassName: props.rightArrowClassName,
            sliderClassName: props.sliderClassName,
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    componentDidMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
        setInterval(this.slideRight, this.state.slideTimer);
    }
    slideLeft() {
        if (this.state.cur === 0) {
            return this.setState({ cur: this.state.sliderImages.length - 1 })
        } else {
            return this.setState({ cur: this.state.cur - 1 })
        }
    }
    slideRight() {
        if (this.state.cur >= this.state.sliderImages.length - 1) {
            return this.setState({ cur: 0 })

        } else {
            return this.setState({ cur: this.state.cur + 1 })
        }
    }

    render() {
        const WRAP = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            background: this.state.background,
            overflowY: 'hidden',
            display: 'flex',
            padding: this.state.padding,
        };
        const SLIDER = {
            width: '100%',
            overflowX: 'hidden',
            height: this.state.height,
        };
        const SLIDE = {
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            height: this.state.height,
            // display:'block'
        };
        const SLIDE_CONTENT = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        };
        const RENDERSLIDES = this.state.sliderImages.map((x, i) => {
            return (
                <div key={i} style={SLIDE}>
                    <div style={SLIDE_CONTENT}>
                        {x}
                    </div>
                </div>
            )
        })
        return (
            <div style={WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                <div style={SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                    {RENDERSLIDES[this.state.cur]}
                </div>
            </div>
        )
    }
}
/* end of image slider 3 */
/* start of image slider 4 */
export class ImageSlider4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages: [],
            cur: 0,
            arrowColor: props.arrowColor || 'white',
            background: props.background || 'black',
            padding: props.padding,
            height: props.height || '450px',
            slideTimer: props.slideTimer || '5000',
            mainid: props.mainid,
            sliderid: props.sliderid,
            mainClassName: props.mainClassName,
            sliderClassName: props.sliderClassName,
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    componentDidMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
        setInterval(this.slideRight, this.state.slideTimer);
    }
    slideLeft() {
        if (this.state.cur === 0) {
            return this.setState({ cur: this.state.sliderImages.length - 1 })
        } else {
            return this.setState({ cur: this.state.cur - 1 })
        }
    }
    slideRight() {
        if (this.state.cur >= this.state.sliderImages.length - 1) {
            return this.setState({ cur: 0 })

        } else {
            return this.setState({ cur: this.state.cur + 1 })
        }
    }

    render() {
        const WRAP = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            background: this.state.background,
            overflowY: 'hidden',
            display: 'flex',
            padding: this.state.padding,
        };
        const SLIDER = {
            width: '100%',
            overflowX: 'hidden',
            height: this.state.height,
        };
        const SLIDE = {
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            height: this.state.height,
            // display:'block'
        };
        const SLIDE_CONTENT = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        };
        const RENDERSLIDES = this.state.sliderImages.map((x, i) => {
            return (
                <div key={i} style={SLIDE}>
                    <div style={SLIDE_CONTENT}>
                        {x}
                    </div>
                </div>
            )
        })
        return (
            <div style={WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                <div style={SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                    {RENDERSLIDES[this.state.cur]}
                </div>
            </div>
        )
    }
}
/* end of image slider 4 */
/* sart of image slider 5 */
export class ImageSlider5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages: [],
            cur: 0,
            arrowColor: props.arrowColor || 'white',
            background: props.background || 'black',
            padding: props.padding,
            height: props.height || '450px',
            slideTimer: props.slideTimer || '5000',
            mainid: props.mainid,
            sliderid: props.sliderid,
            mainClassName: props.mainClassName,
            sliderClassName: props.sliderClassName,
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    componentDidMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
        setInterval(this.slideRight, this.state.slideTimer);
    }
    slideLeft() {
        if (this.state.cur === 0) {
            return this.setState({ cur: this.state.sliderImages.length - 1 })
        } else {
            return this.setState({ cur: this.state.cur - 1 })
        }
    }
    slideRight() {
        if (this.state.cur >= this.state.sliderImages.length - 1) {
            return this.setState({ cur: 0 })

        } else {
            return this.setState({ cur: this.state.cur + 1 })
        }
    }

    render() {
        const WRAP = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            background: this.state.background,
            overflowY: 'hidden',
            display: 'flex',
            padding: this.state.padding,
        };
        const SLIDER = {
            width: '100%',
            overflowX: 'hidden',
            height: this.state.height,
        };
        const SLIDE = {
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            height: this.state.height,
            // display:'block'
        };
        const SLIDE_CONTENT = {
            width: '100%',
            height: this.state.height,
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        };
        const RENDERSLIDES = this.state.sliderImages.map((x, i) => {
            return (
                <div key={i} style={SLIDE}>
                    <div style={SLIDE_CONTENT}>
                        {x}
                    </div>
                </div>
            )
        })
        return (
            <div style={WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                <div style={SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                    {RENDERSLIDES[this.state.cur]}
                </div>
            </div>
        )
    }
}
/* end of image slider 5 */
/* End of image sliders */
/* Start of Ticker Styles */
export class HorizontalTicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: [],
        }
    }
    componentDidMount() {
        let t_item = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            t_item.push(CHILDS[g])
        }
        this.setState({
            slide1: t_item
        })
    }
    render() {
        const TICKERWRAPPER = {
            width: '100%',
            overflow: 'hidden',
            paddingLeft: '100%',
            display: 'flex',
        }
        const TICKER_ITEM = {
            display: 'flex',
            padding: '0 2em',

        }
        // const HORIZONTALTICKER2 = {
        //     paddingLeft: '50%',
        // }
        // const CHILDS = React.Children.toArray(this.props.children)
        const TICKERITEM = this.state.slide1.map((x, i) => {
            return (
                <div key={i} style={TICKER_ITEM} >{x}</div>
            )
        })
        return (
            <div style={TICKERWRAPPER}>
                <div className="horizontal-ticker">
                    {TICKERITEM}
                </div>
            </div>
        )
    }
}

export class SeeSawTicker extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}
/* End of ticker Styles */
/* Start of toggler blocks */
//sidebar toggler
export class Toggler1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            position: props.position || 'fixed',
            width: props.width || '100px',
            height: props.height || '100vh',
            top: props.top || '0',
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler1',
            bColor: props.bColor || 'black',
            bBackground: props.bBackground,
            bFontSize: props.bFontSize || '1.333em',
            bFontVariant: props.bFontVariant,
            bFontWeight: props.bFontWeight,
            bTextShadow: props.bTextShadow,
            bMargin: props.bMargin,
            bPadding: props.bPadding,
            bBorderLeft: props.bBorderLeft,
            bBorderRight: props.bBorderRight,
            bBorderTop: props.bBorderTop,
            bBorderBottom: props.bBorderBottom,
            border: props.bBorder,
            border: props.border,
            bLEft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            left: props.left,
            right: props.right,
            mainid: props.mainid,
            toggleid: props.toggleid,
            titleid: props.titleid,
            titleClassName: props.titleClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
            boxShadow: props.shadow || '1px 2px 2px black',
            childs: [],
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const TOGGLERBOX = {
            display: this.state.show ? 'inline' : 'none',
            width: this.state.width,
            height: this.state.height,
            boxShadow: this.state.boxShadow,
            position: this.state.position,
            background: this.state.background,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            right: this.state.right,
            left: this.state.left,
            top: this.state.top,
            zIndex: 2000,
        }
        const CLICKBOX = {
            cursor: 'pointer',
            color: this.state.bColor,
            background: this.state.bBackground,
            fontSize: this.state.bFontSize,
            fontVariant: this.state.bFontVariant,
            fontWeight: this.state.bFontWeight,
            textShadow: this.state.bTextShadow,
            margin: this.state.bMargin,
            padding: this.state.bPadding,
            borderLeft: this.state.bBorderLeft,
            borderRight: this.state.bBorderRight,
            borderTop: this.state.bBorderTop,
            borderBottom: this.state.bBorderBottom,
            border: this.state.bBorder,
        }

        return (
            <div id={this.state.mainid} className={this.state.mainClassName}>
                <div style={CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {this.state.childs}
                </div>
            </div>
        )
    }
}
//collapsable multiuse toggler
export class Toggler2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            width: props.width || '400px',
            height: props.height,
            background: props.background || 'white',
            border: props.border,
            bLEft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            buttonText: props.buttonText || 'toggler2',
            bColor: props.bColor || 'black',
            bBackground: props.bBackground,
            bFontSize: props.bFontSize || '1.333em',
            bFontVariant: props.bFontVariant,
            bFontWeight: props.bFontWeight,
            bTextShadow: props.bTextShadow,
            bMargin: props.bMargin,
            bPadding: props.bPadding,
            bBorderLeft: props.bBorderLeft,
            bBorderRight: props.bBorderRight,
            bBorderTop: props.bBorderTop,
            bBorderBottom: props.bBorderBottom,
            position: props.position || 'absolute',
            togglePlace: props.togglePlace || 'column',
            padding: props.padding,
            offset: props.offset + '%',
            boxShadow: props.shadow || '1px 2px 2px black',
            mainid: props.mainid,
            toggleid: props.toggleid,
            titleid: props.titleid,
            titleClassName: props.titleClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
            childs:[],
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        const FULLELEMENT = {
            display: 'flex',
            flexDirection: this.state.togglePlace,
        }
        const TOGGLERBOX = {
            display: this.state.show ? 'flex' : 'none',
            flexDirection: 'column-reverse',
            position: this.state.position,
            width: this.state.width,
            height: this.state.height,
            background: this.state.background,
            padding: this.state.padding,
            margin: `0 0 0 ${this.state.offset}`,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            boxShadow: this.state.boxShadow,
            overflow: 'hidden',
            zIndex: 2000,
        }
        const CLICKBOX = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: this.state.bColor,
            background: this.state.bBackground,
            fontSize: this.state.bFontSize,
            fontVariant: this.state.bFontVariant,
            fontWeight: this.state.bFontWeight,
            textShadow: this.state.bTextShadow,
            margin: this.state.bMargin,
            padding: this.state.bPadding,
            borderLeft: this.state.bBorderLeft,
            borderRight: this.state.bBorderRight,
            borderTop: this.state.bBorderTop,
            borderBottom: this.state.bBorderBottom,
            border: this.state.bBorder,
        }
        return (
            <div id={this.state.mainid} style={FULLELEMENT} className={this.state.mainClassName}>
                <div style={CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {this.state.childs}
                </div>
            </div>
        )
    }
}

//panel toggler
export class Toggler3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            width: props.width || '400px',
            height: props.height,
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler2',
            position: props.position,

            textvertical: props.textVertical || 'center',
            texthorizontal: props.textHorizontal || 'center',
            textheight: props.textHeight || '200px',
            textwidth: props.textWidth || '300px',
            labels: [],
            text: [],
            mainid: props.mainid,
            toggleid: props.toggleid,
            panelClassName: props.panelClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        let labels = [];
        let text = [];
        for (var i = 0; i < CHILDS.length; i += 1) {
            if ((i + 1) % 2 === 0) {
                text.push(CHILDS[i])
            } else {
                labels.push(CHILDS[i])
            }
        }
        this.setState({
            labels: labels,
            text: text
        })
    }

    render() {
        const CHECKSSTYLE = {
            display: "none",
        }
        const PANELS = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: this.state.position,
            width: this.state.width,
            height: this.state.height,
            background: this.state.background,
            top: this.state.top,
            overflow: 'hidden',
        }
        const TEXTBOX = {
            height: this.state.textheight,
            width: this.state.textwidth,
            display: 'flex',
            flexDirection: 'column',
            alignItems: this.state.texthorizontal,
            justifyContent: this.state.textvertical,
        }
        const LABELSSTYLES = {
            cursor: 'pointer',
        }
        const CHECKS = this.state.labels.map((x, i, arr) => {
            return <input key={i} id={'tab' + (i + 1)} type="radio" name="panel_select" defaultChecked style={CHECKSSTYLE} />
        })
        const LABELS = this.state.labels.map((x, i, arr) => {
            return <label key={i} style={LABELSSTYLES} htmlFor={'tab' + (i + 1)}>{x}</label>
        })
        const TEXT = this.state.text.map((x, i, arr) => {
            return (
                <div key={i} id={'panel' + (i + 1)} className={this.state.panelClassName}>
                    <p style={TEXTBOX}>
                        {x}
                    </p>
                </div>
            )
        })

        return (
            <div style={PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                {CHECKS}
                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                    {LABELS}
                </nav>
                {TEXT}
            </div>
        )
    }
}


//I have not idea about this one
export class Toggler4 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}
/* start of moduls */
//center adjustable popup
export class Modul1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            boxTop: props.boxTop || '40%',
            boxRight: props.boxRight || '45%',
            boxLeft: props.boxLeft,
            boxBottom: props.boxBottom,
            boxPosition: props.boxPosition || 'fixed',
            boxBackground: props.boxBackground || 'white',
            boxHeight: props.boxHeight || '200px',
            boxWidth: props.boxWidth || '200px',
            boxAlign: props.boxAlign || 'center',
            boxJustify: props.boxJustify || 'center',
            buttonText: props.buttonText || 'Modul 1',
            boxShadow: props.boxShadow || '1px 2px 2px black',
            btnBackground: props.btnBackground || 'white',
            bColor: props.bColor || 'black',
            bBackground: props.bBackground,
            bFontSize: props.bFontSize || '1.333em',
            bFontVariant: props.bFontVariant,
            bFontWeight: props.bFontWeight,
            bTextShadow: props.bTextShadow,
            bMargin: props.bMargin,
            bPadding: props.bPadding,
            bBorderLeft: props.bBorderLeft,
            bBorderRight: props.bBorderRight,
            bBorderTop: props.bBorderTop,
            bBorderBottom: props.bBorderBottom,
            boxId: props.boxId,
            titleId: props.titleId,
            backId: props.backId,
            titleClassName: props.titleClassName,
            boxClassName: props.boxClassName,
            backClassName: props.backClassName,
            childs:[],
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const BOXSTYLES = {
            width: this.state.boxWidth,
            height: this.state.boxHeight,
            background: this.state.boxBackground,
            position: this.state.boxPosition,
            top: this.state.boxTop,
            left: this.state.boxLeft,
            right: this.state.boxRight,
            bottom: this.state.boxBottom,
            display: this.state.show ? 'flex' : 'none',
            alignItems: this.state.boxAlign,
            justifyContent: this.state.boxJustify,
            boxShadow: this.state.boxShadow,
            zIndex: '2000',
        }
        const CLICKBOX = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: this.state.bColor,
            background: this.state.bBackground,
            fontSize: this.state.bFontSize,
            fontVariant: this.state.bFontVariant,
            fontWeight: this.state.bFontWeight,
            textShadow: this.state.bTextShadow,
            margin: this.state.bMargin,
            padding: this.state.bPadding,
            borderLeft: this.state.bBorderLeft,
            borderRight: this.state.bBorderRight,
            borderTop: this.state.bBorderTop,
            borderBottom: this.state.bBorderBottom,
            border: this.state.bBorder,
        }
        const BTNSTYLE = {
            borderRadius: '100%',
            cursor: 'pointer',
            position: 'absolute',
            left: this.state.boxWidth,
            bottom: this.state.boxHeight,
            background: this.state.btnBackground,
        }
        return (
            <div >
                <div style={CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={BOXSTYLES} id={this.state.boxId} className={this.state.boxClassName}>
                    <button style={BTNSTYLE} id={this.state.btnId} className={this.state.btnClassName} onClick={this.toggle}>X</button>
                    {this.state.childs}
                </div>
            </div>
        )
    }
}
//popup on element
export class Modul2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}
/* end of moduls */
/* end of bin blocks */
/* Start of List Blocks */
/* Start of Numbered List Blocks */
//styled default numbered
export class NumberList1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            paddingLeft: props.paddingLeft,
            listStyleType: props.listStyleType || 'decimal',
            listStyleImage: props.listStyleImage || 'none',
            listStylePosition: props.listStylePosition || 'inside',
            id: props.id,
            className: props.className,
        }
    }
    componentDidMount() {
        let listItems = []
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        listItems = CHILDS.map((x) => x)
        this.setState({ listItem: listItems })
    }


    render() {
        const LISTSTYLE = {
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            paddingLeft: this.state.paddingLeft,
            listStyleType: this.state.listStyleType,
            listStyleImage: this.state.listStyleImage,
            listStylePosition: this.state.listStylePosition,

        }
        const LISTITEMSTYLE = {
            paddingLeft: this.state.itemPadding,
            backgroundImage: this.state.itemBGImage,
            backgroundPosition: this.state.itemBGPosition,
            backgroundSize: this.state.itemBGSize,
            backgroundRepeat: 'no-repeat',
        }
        const LIST = this.state.listItem.map((x, i) => {
            return (
                <li key={i} style={LISTITEMSTYLE}>{x}</li>
            )
        })
        return (
            <ol style={LISTSTYLE} id={this.state.id} className={this.state.className}>
                {LIST}
            </ol>
        )
    }
}
//big number list
export class NumberList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAmount: props.listAmount || '1',
            listItem: [],
            id: props.id,
            className: props.className,

        }
    }
    componentDidMount() {
        let listItems = []
        let nestedItems = []
        const CHILDS = React.Children.toArray(this.props.children)
        let tempItems = CHILDS.map((x) => x)
        for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
            for (var w = 0; w < +this.state.listAmount; w += 1) {
                nestedItems.push(tempItems[w])
            }
            listItems.push(nestedItems)
            nestedItems = []
            tempItems.splice(0, this.state.listAmount)
        }
        this.setState({ listItem: listItems })
    }

    render() {
        const LISTSTYLE = {
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            paddingLeft: this.state.paddingLeft,
            position: 'relative'

        }
        const LISTITEMSTYLE = {
            paddingLeft: '70px',
            counterIncrement: 'aCounter',

        }
        const LIST = this.state.listItem.map((x, i) => {
            return (

                <li key={i} style={LISTITEMSTYLE}>{x}</li>

            )
        })
        return (
            <ol style={LISTSTYLE} id={this.state.id} className={`bigList ${this.state.className}`}>
                {LIST}
            </ol>
        )
    }
}

export class NumberList3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            paddingLeft: props.paddingLeft,
            listStyleType: props.listStyleType || 'upper-roman',
            listStyleImage: props.listStyleImage || 'none',
            listStylePosition: props.listStylePosition || 'inside',
            id: props.id,
            className: props.className,
        }
    }
    componentDidMount() {
        let listItems = []
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        listItems = CHILDS.map((x) => x)
        this.setState({ listItem: listItems })
    }


    render() {
        const LISTSTYLE = {
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            paddingLeft: this.state.paddingLeft,
            listStyleType: this.state.listStyleType,
            listStyleImage: this.state.listStyleImage,
            listStylePosition: this.state.listStylePosition,

        }
        const LISTITEMSTYLE = {
            paddingLeft: this.state.itemPadding,
            backgroundImage: this.state.itemBGImage,
            backgroundPosition: this.state.itemBGPosition,
            backgroundSize: this.state.itemBGSize,
            backgroundRepeat: 'no-repeat',
        }
        const LIST = this.state.listItem.map((x, i) => {
            return (
                <li key={i} style={LISTITEMSTYLE}>{x}</li>
            )
        })
        return (
            <ol style={LISTSTYLE} id={this.state.id} className={this.state.className}>
                {LIST}
            </ol>
        )
    }
}

/* End of Numbered List Blocks */
/* Start of bullet list blocks */
//styled default bullet
export class BulletList1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            paddingLeft: props.paddingLeft,
            listStyleType: props.listStyleType || 'disc',
            listStyleImage: props.listStyleImage || 'none',
            listStylePosition: props.listStylePosition || 'inside',
            itemPadding: props.itemPadding,
            itemBGImage: props.itemBGImage,
            itemBGPosition: props.itemBGPosition,
            itemBGSize: props.itemBGSize,
            id: props.id,
            className: props.className,
        }
    }
    componentDidMount() {
        let listItems = []
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        listItems = CHILDS.map((x) => x)
        this.setState({ listItem: listItems })
    }

    render() {
        const LISTSTYLE = {
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            paddingLeft: this.state.paddingLeft,
            listStyleType: this.state.listStyleType,
            listStyleImage: this.state.listStyleImage,
            listStylePosition: this.state.listStylePosition,
        }
        const LISTITEMSTYLE = {
            paddingLeft: this.state.itemPadding,
            backgroundImage: this.state.itemBGImage,
            backgroundPosition: this.state.itemBGPosition,
            backgroundSize: this.state.itemBGSize,
            backgroundRepeat: 'no-repeat',
        }
        const LIST = this.state.listItem.map((x, i) => {
            return (
                <li key={i} style={LISTITEMSTYLE}>{x}</li>
            )
        })
        return (
            <ul style={LISTSTYLE} id={this.state.id} className={this.state.className}>
                {LIST}
            </ul>
        )
    }
}

//icon bullet list
export class BulletList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: [],
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            paddingLeft: props.paddingLeft,
            listStyleType: props.listStyleType || 'square',
            listStyleImage: props.listStyleImage || 'none',
            listStylePosition: props.listStylePosition || 'inside',
            id: props.id,
            className: props.className,
        }
    }
    componentDidMount() {
        let listItems = []
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        listItems = CHILDS.map((x) => x)
        this.setState({ listItem: listItems })
    }

    render() {
        const LISTSTYLE = {
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            paddingLeft: this.state.paddingLeft,
            listStyleType: this.state.listStyleType,
            listStyleImage: this.state.listStyleImage,
            listStylePosition: this.state.listStylePosition,
        }
        const LISTITEMSTYLE = {
            paddingLeft: this.state.itemPadding,
            backgroundImage: this.state.itemBGImage,
            backgroundPosition: this.state.itemBGPosition,
            backgroundSize: this.state.itemBGSize,
            backgroundRepeat: 'no-repeat',
        }
        const LIST = this.state.listItem.map((x, i) => {
            return (
                <li key={i} style={LISTITEMSTYLE}>{x}</li>
            )
        })
        return (
            <ul style={LISTSTYLE} id={this.state.id} className={this.state.className}>
                {LIST}
            </ul>
        )
    }
}

/* End of bullet list blocks */
/* End of List Blocks */
/* Start of Form Blocks */





/* End of form Blocks */
/* Start of Table Blocks */
//single header top
export class Table1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            head: props.head,
            body: props.body,
            tableid: props.tableId,
            mainid: props.mainId,
            mainClassName: props.mainClassName,
            tableClassName: props.tableClassName,
        }
    }
    componentDidMount() {
        let tempHead = []
        let tempBody = []
        let childs = []
        let rows = this.state.rows
        let HEADROW, HEAD, BODY
        let BODYROW = []
        const CHILDS = React.Children.count(this.props.children) === 0 ? '' : React.Children.toArray(this.props.children.split('\\'))
        if (CHILDS !== '') {
            childs = CHILDS.map((x, i, arr) => x);
            for (var b = 1; b <= this.state.columns; b += 1) {
                tempHead.push(childs[b - 1])
            }
            childs.splice(0, this.state.columns)
            //need to divide by this.state.columns and make rows here
            tempBody = childs.map((x, i, arr) => x);
            while (rows > 0) {
                if (rows === this.state.rows) {
                    HEAD = tempHead.map((x, i, arr) => {
                        return (
                            <th key={i}>
                                {x}
                            </th>
                        )
                    })
                    HEADROW = <tr>{HEAD}</tr>
                } else {
                    var temperBody = tempBody.splice(0, this.state.columns);
                    BODY = temperBody.map((x, i, arr) => {
                        return (
                            <td key={i}>
                                {x}
                            </td>
                        )
                    })
                    BODYROW.push(<tr key={rows}>{BODY}</tr>)
                }
                rows -= 1
            }
            this.setState({ head: HEADROW, body: BODYROW })
        }
    }
    render() {
        const TABLESTYLE = {

        }


        return (
            <div id={this.state.mainId} className={this.state.mainClassName}>
                <table style={TABLESTYLE} id={this.state.tableId} className={`${this.state.tableClassName}`}>
                    <thead>
                        {this.state.head}
                    </thead>
                    <tbody>
                        {this.state.body}
                    </tbody>
                </table>
            </div>
        )
    }
}

//single header side
export class Table2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            body: props.body,
            tableId: props.tableId,
            mainId: props.mainId,
            mainClassName: props.mainClassName,
            tableClassName: props.tableClassName,
        }
    }
    componentDidMount() {
        let tempBody = []
        let rows = this.state.rows
        let HEAD, BODY
        let BODYROW = []
        const CHILDS = React.Children.count(this.props.children) === 0 ? '' : React.Children.toArray(this.props.children.split('\\'));
        if (CHILDS !== '') {
            tempBody = CHILDS.map((x, i, arr) => x);

            while (rows > 0) {
                var temperBody = tempBody.splice(0, this.state.columns);
                BODY = temperBody.map((x, i, arr) => {
                    return (
                        <td key={i}>
                            {x}
                        </td>
                    )
                })
                BODYROW.push(<tr key={rows}>{BODY}</tr>)

                rows -= 1
            }
            this.setState({ body: BODYROW })
        }
    }
    render() {
        const TABLESTYLE = {

        }
        return (
            <div id={this.state.mainId} className={this.state.mainClassName}>
                <table style={TABLESTYLE} id={this.state.tableId} className={` ${this.state.tableClassName}`}>
                    <tbody>
                        {this.state.body}
                    </tbody>
                </table>
            </div>
        )
    }
}

//double header top and side
//might not be necessary
export class Table3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            className: props.className,

        }
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

/* End of Table Blocks */
/* Start of Chart Blocks */
//pie chart
//having set backs here
export class PieChart1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            className: props.className,
        }
    }
    render() {

        return (
            <div >
            </div>
        )
    }
}

/* End of Chart Blocks */