import React, { Component } from 'react';
import './reset.css';

import Container1 from './Containers';
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
        const childs = React.Children.toArray(this.props.children);
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
export class MainHeading1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '8em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
        }
    }

    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',

        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h1 style={HEADING}>{CHILDS[0]}</h1>
        )
    }
}
export class MainHeading2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '7em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',

        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 style={HEADING}>{childs[0]}</h1>
        )
    }
}
export class MainHeading3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '9em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h1 style={HEADING}>{CHILDS[0]}</h1>
        )
    }
}
export class MainHeading4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '8em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h1 style={HEADING}>{CHILDS[0]}</h1>
        )
    }
}
export class MainHeading5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '8em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 15px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h1 style={HEADING}>{CHILDS[0]}</h1>
        )
    }
}
/* End of h1 Main Heading */
/* Start of h2 Heading */
export class Heading1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '5.646em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h2 style={HEADING}>{CHILDS[0]}</h2>
        )
    }
}
export class Heading2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '4.705em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h2 style={HEADING}>{CHILDS[0]}</h2>
        )
    }
}
export class Heading3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '6.775em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h2 style={HEADING}>{CHILDS[0]}</h2>
        )
    }
}
export class Heading4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '5.646em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h2 style={HEADING}>{CHILDS[0]}</h2>
        )
    }
}
export class Heading5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '5.646em',
            fontWeight: props.weight || '600',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h2 style={HEADING}>{CHILDS[0]}</h2>
        )
    }
}
/* End of h2 Heading */
/* Start of h3 SubHeading */
export class SubHeading1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '3.489em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h3 style={HEADING}>{CHILDS[0]}</h3>
        )
    }
}
export class SubHeading2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.9075em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h3 style={HEADING}>{CHILDS[0]}</h3>
        )
    }
}
export class SubHeading3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '4.187em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h3 style={HEADING}>{CHILDS[0]}</h3>
        )
    }
}
export class SubHeading4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '3.489em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            height: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h3 style={HEADING}>{CHILDS[0]}</h3>
        )
    }
}
export class SubHeading5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '3.489em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 5px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h3 style={HEADING}>{CHILDS[0]}</h3>
        )
    }
}
/* End of h3 SubHeading */
/* Start of h4 Secondary SubHeading */
export class SecondarySubHeading1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.157em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',

        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h4 style={HEADING}>{CHILDS[0]}</h4>
        )
    }
}
export class SecondarySubHeading2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '1.7975em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h4 style={HEADING}>{CHILDS[0]}</h4>
        )
    }
}
export class SecondarySubHeading3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.588em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h4 style={HEADING}>{CHILDS[0]}</h4>
        )
    }
}
export class SecondarySubHeading4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.157em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h4 style={HEADING}>{CHILDS[0]}</h4>
        )
    }
}
export class SecondarySubHeading5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '2.157em',
            fontWeight: props.weight || '200',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0 0 3px 0',
            margin: props.margin || '0',
        }
    }
    render() {
        const HEADING = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
            overflowX: 'hidden',
            overflowY: 'hidden',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <h4 style={HEADING}>{CHILDS[0]}</h4>
        )
    }
}
/* End of h4 secondary subheading */
/* End of Heading Blocks */
/* Start of Paragraph Blocks */
/* Start of Basic Paragraph Blocks */
export class Paragraph1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
        }
    }
    render() {
        const PARAGRAPH = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
        }

        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <p style={PARAGRAPH}>{CHILDS[0]}</p>
        )
    }
}
export class Paragraph2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '0.9em',
            lineHeight: props.lineHeight || '1.22em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
        }
    }
    render() {
        const PARAGRAPH = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <p style={PARAGRAPH}>{CHILDS[0]}</p>
        )
    }
}
export class Paragraph3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.6em',
            lineHeight: props.lineHeight || '1.8em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
        }
    }
    render() {
        const PARAGRAPH = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <p style={PARAGRAPH}>{CHILDS[0]}</p>
        )
    }
}
export class Paragraph4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.6em',
            lineHeight: props.lineHeight || '1.8em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
        }
    }
    render() {
        const PARAGRAPH = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <p style={PARAGRAPH}>{CHILDS[0]}</p>
        )
    }
}

export class Paragraph5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
        }
    }
    render() {
        const PARAGRAPH = {
            width: 'inherit',
            color: this.state.color,
            fontFamily: this.state.fontFamily,
            fontSize: this.state.fontSize,
            lineHeight: this.state.lineHeight,
            fontWeight: this.state.fontWeight,
            display: this.state.display,
            flexDirection: 'column',
            alignItems: this.state.align,
            padding: this.state.padding,
            margin: this.state.margin,
        }
        const CHILDS = React.Children.toArray(this.props.children)

        //cannt implement without being able to pass multiple styles
        return (
            <p style={PARAGRAPH}>{CHILDS[0]}</p>
        )
    }
}
/* End of Basic Paragraph Blocks */
/* Start of Pull Quotes */
export class PullQuote1 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        return (
            <blockquote className="pullQuote1">
                <p className="pullQuote1-text">{CHILDS[0]}</p>
                <cite>{CHILDS[1]}</cite>
            </blockquote>
        )
    }
}
export class PullQuote2 extends Component {
    render() {
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        return (
            <blockquote className="pullQuote2">
                <p className="pullQuote2-text">{CHILDS[0]}</p>
                <cite>{CHILDS[1]}</cite>
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
        }
    }
    render() {
        const CIRCLEIMG = {
            borderRadius: "100%",
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={CIRCLEIMG} className={`img-${this.state.size}`} src={CHILDS[0]} alt={CHILDS[1]} />
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
        }
    }
    render() {
        const ROUNDEDIMG = {
            borderRadius: '30%',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={ROUNDEDIMG} className={`img-${this.state.size}`} src={CHILDS[0]} alt={CHILDS[1]} />
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
        }
    }
    render() {
        const OVALIMG = {
            borderRadius: '30%',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={OVALIMG} className={`img-${this.state.size}`} src={CHILDS[0]} alt={CHILDS[1]} />
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
        }
    }
    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img className={`img-${this.state.size}`} src={CHILDS[0]} alt={CHILDS[1]} />
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
        }
    }
    render() {
        const ROUNDEDRECTANGLEIMG = {
            borderRadius: "30%",
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={ROUNDEDRECTANGLEIMG} className={`recimg-${this.state.size}`} src={CHILDS[0]} alt={CHILDS[1]} />
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
        }
    }

    render() {
        const image = {
            margin: '0 auto',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={image} className={`recimg-${this.state.size}`} src={CHILDS[0]} alt={CHILDS[1]} />
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
        }
    }
    render() {
        const TALLROUNDEDRECTANGLEIMG = {
            borderRadius: "30%",
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={TALLROUNDEDRECTANGLEIMG} className={`tallrecimg-${this.state.size}`} src={CHILDS[0]} alt={CHILDS[1]} />
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
        }
    }
    render() {
        const image = {
            margin: '0 auto',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <img style={image} className={`tallrecimg-${this.state.size}`} src={CHILDS[0]} alt={CHILDS[1]} />
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
        }
    }
    render() {
        const CAPTION = {
            padding: '10px',
            color: 'gray',
            textAlign: 'center',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <figure>
                {CHILDS[0]}
                <figcaption style={CAPTION}>
                    {CHILDS[1]}
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
            height: props.height,
        }
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
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div style={HEROSTYLE}>
                <Holder7>
                    {CHILDS[0]}
                    {CHILDS[2]}
                    {CHILDS[1]}
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
            backgroundSize: props.imageSize || 'cover',
            width: props.width || '100%',
            height: props.height || 'inherit',
            bottomBoxWidth: props.bottomBoxWidth || '100%',
            bottomBoxHeight: props.bottomBoxHeight || '25%',
            bottomBoxPadding: props.bottomBoxPadding,
            bottomBoxBackgroundColor: props.bottomBoxBC || 'rgba(0, 0, 0, 0.5)',
        }
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
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div style={HEROSTYLE}>
                <div style={BOTTOMBACKGROUND}>
                    <Holder5>
                        {CHILDS[0]}
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
        }
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
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div style={HEROSTYLE}>
                <Holder1>
                    {CHILDS[0]}
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
        }
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
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div style={HEROSTYLE}>
                <Holder1>
                    {CHILDS[2]}
                    {CHILDS[0]}
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
        }
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
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div style={HEROSTYLE}>
                <Holder7>
                    {CHILDS[0]}
                    <Holder2>
                        {CHILDS[1]}
                        {CHILDS[2]}
                        {CHILDS[3]}
                    </Holder2>
                    <Holder2>
                        {CHILDS[4]}
                        {CHILDS[5]}
                        {CHILDS[6]}
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
        }

    }

    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <button className="flatButton1"
                onClick={this.state.onClick}>{CHILDS[0]}</button>
        )
    }
}
export class FlatButton2 extends Component {

    render() {
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <button className="flatButton2">{CHILDS[0]}</button>
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
        }
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
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <button style={BUTTONSTYLE} className="raisedButton1">
                <div style={BUTTONCOLOR}>
                    {CHILDS[0]}
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
            fontSize: props.fontSize || '1em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
        }
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
        return (
            <nav style={NAVBAR}>
                <ul style={NAVBAR_NAVBAR} className="navbar1-navbar socialness">
                    {NAVBARACTUAL}
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
            fontSize: props.fontSize || '0.8em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
        }
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
            position: 'sticky',
            top: '-1px'
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
            return <li key={i} style={SUBNAVBAR_NAVBAR_LI}>{x}</li>
        })
        return (
            <nav style={SUBNAVBAR} className="subnavbar1 socialness">
                <ul style={SUBNAVBAR_NAVBAR} className="subnavbar1-navbar">
                    {NAVBAR}
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
            fontSize: props.fontSize || '0.8em',
            fontWeight: props.fontWeight || '100',
            fontVariant: props.fontVariant || 'none',
        }
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
        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} style={SUBNAVBAR_NAVBAR_LI}>{arr[i + 2]}</li>
        })
        return (
            <nav style={SUBNAVBAR} className="subnavbar2 socialness">
                <Holder1>
                    <ul style={SUBNAVBAR_NAVBAR1} className="subnavbar2-navbar1">
                        {CHILDS[0]}
                        {CHILDS[1]}
                    </ul>
                    <Holder1
                        alignBlock1="flex-end"
                        alignBlock2="flex-start">
                        <div className="subnavbar2-globalSearch">
                            <p>Search Holder</p>
                        </div>
                        <ul style={SUBNAVBAR_NAVBAR2} className="subnavbar2-navbar2">
                            {NAVBAR}
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
            link: props.link || '/'
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
                <a href={this.state.link}>
                    <SquareImage
                        size='tn'>
                        {CHILDS[0]}
                        logo
                        </SquareImage>
                </a>
                <a href={this.state.link}>
                    <p style={BRAND_NAME}>{CHILDS[1]}</p>
                </a>

            </div>
        )
    }
}
export class Brand2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            link: props.link || '/'
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
                <a href={this.state.link}>
                    <RectangleImage
                        size='exsm'>
                        {CHILDS[0]}
                        logo
                    </RectangleImage>
                </a>
            </section>
        )
    }
}
export class Brand3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            link: props.link || '/'
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
                <a href={this.state.link}>
                    <SquareImage>
                        {CHILDS[0]}
                        logo
                    </SquareImage>
                </a>
            </section>
        )
    }
}
export class Brand4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            link: props.link || '/'
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
                <a href={this.state.link}>
                    <RectangleImage>
                        {CHILDS[0]}
                        logo
                    </RectangleImage>
                </a>
            </section>
        )
    }
}
export class Brand5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            link: props.link || '/'
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
                <a href={this.state.link}>

                </a>
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
            offset: props.offset || '10px',
            color: 'white',
            margin: '',
            padding: '',
            width: props.width,
        }
        // this.enter = this.enter.bind(this);
        // this.left = this.left.bind(this);
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
            fontSize: '1.333em',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
        })
        return (
            <nav className="dropdownnav1">
                <li style={HASCHILDS} className="DropDown"
                    onMouseOver={() => this.setState({ display: 'block' })}
                    onMouseOut={() => this.setState({ display: 'none' })}>
                    {CHILDS[0]}
                    <ul style={DROPDOWN}>
                        {NAVBAR}
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
            fontSize: '1.333em',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <nav className="dropdownnav3">
                <li style={HASCHILDS}
                    onMouseOver={() => this.setState({ display: 'block' })}
                    onMouseOut={() => this.setState({ display: 'none' })}>
                    {CHILDS[0]}
                    <ul style={DROPDOWN}>
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
            fontSize: '1.333em',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        const NAVBAR = CHILDS.map((x, i, arr) => {
            return <li key={i} style={DropDown_NavBar_Li}>{arr[i + 1]}</li>
        })
        return (
            <nav className="dropdownnav5">
                <li style={HASCHILDS} className="DropDown_Side"
                    onMouseOver={() => this.setState({ display: 'inline' })}
                    onMouseOut={() => this.setState({ display: 'none' })}>
                    {CHILDS[0]}
                    <ul style={DROPDOWN}>
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

        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }
    componentWillMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
    }
    componentDidMount() {
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
            <div style={WRAP}>
                <div style={LEFT_ARROW} className="arrow" onClick={() => this.slideLeft()}></div>
                <div style={SLIDER}>
                    {RENDERSLIDES[this.state.cur]}
                </div>
                <div style={RIGHT_ARROW} className="arrow" onClick={() => this.slideRight()}></div>
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
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }
    componentWillMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
    }
    componentDidMount() {
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
            <div style={WRAP}>
                <div style={SLIDER}>
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
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }
    componentWillMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
    }
    componentDidMount() {
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
            <div style={WRAP}>
                <div style={SLIDER}>
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
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }
    componentWillMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
    }
    componentDidMount() {
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
            <div style={WRAP}>
                <div style={SLIDER}>
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
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }
    componentWillMount() {
        let slides = [];
        const CHILDS = React.Children.toArray(this.props.children)
        for (var g = 0; g < CHILDS.length; g += 1) {
            slides.push(CHILDS[g])
        }
        this.setState({ sliderImages: slides })
    }
    componentDidMount() {
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
            <div style={WRAP}>
                <div style={SLIDER}>
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
    componentWillMount() {
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
        const HORIZONTALTICKER2 = {
            paddingLeft: '50%',
        }
        const CHILDS = React.Children.toArray(this.props.children)
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
            position: props.position || 'absolute',
            width: props.width || '100px',
            height: props.height || '100vh',
            top: props.top || '0',
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler1',
            left: props.left,
            right: props.right,
        }
        this.toggle = this.toggle.bind(this);
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
            position: this.state.position,
            background: this.state.background,
            right: this.state.right,
            left: this.state.left,
            top: this.state.top,
        }
        const CLICKBOX = {
            cursor: 'pointer',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div>
                <div style={CLICKBOX} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={TOGGLERBOX}>
                    {CHILDS}
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
            buttonText: props.buttonText || 'toggler2',
            position: props.position,
            padding: props.padding,
            offset: props.offset + '%',
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        const TOGGLERBOX = {
            display: this.state.show ? 'flex' : 'none',
            position: this.state.position,
            width: this.state.width,
            height: this.state.height,
            background: this.state.background,
            padding: this.state.padding,
            margin: `0 0 0 ${this.state.offset}`,
            overflow: 'hidden',
        }
        const CLICKBOX = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
        }
        const CHILDS = React.Children.toArray(this.props.children)
        return (
            <div>
                <div style={CLICKBOX} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={TOGGLERBOX}>
                    {CHILDS}
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
        }
    }
    componentWillMount() {
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
                <div key={i} id={'panel' + (i + 1)}>
                    <p style={TEXTBOX}>
                        {x}
                    </p>
                </div>
            )
        })

        return (
            <div style={PANELS} className="panels">
                {CHECKS}
                <nav>
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

/* end of bin blocks */
/* Start of List Blocks */
/* Start of Numbered List Blocks */


/* End of Numbered List Blocks */
/* Start of bullet list blocks */


/* End of bullet list blocks */
/* End of List Blocks */
/* Start of Form Blocks */


/* End of form Blocks */
/* Start of Table Blocks */


/* End of Table Blocks */