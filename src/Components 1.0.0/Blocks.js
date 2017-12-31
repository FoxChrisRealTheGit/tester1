import React, { Component } from 'react';
import './reset.css';

import Container1 from './Containers';
import Holder1 from './Holders';

//temporary css sheet
import '../Components 0.5.0/component styles/blocks.css';

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
            fontSize: props.size || '9.136em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }

    render() {
        const heading = {
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

        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 style={heading}>{childs[0]}</h1>
        )
    }
}
export class MainHeading2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '7.613em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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

        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 style={heading}>{childs[0]}</h1>
        )
    }
}
export class MainHeading3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '10.963em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 style={heading}>{childs[0]}</h1>
        )
    }
}
export class MainHeading4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'lightgray',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '9.136em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 style={heading}>{childs[0]}</h1>
        )
    }
}
export class MainHeading5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'sans-serif',
            fontSize: props.size || '9.136em',
            fontWeight: props.weight || '900',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 style={heading}>{childs[0]}</h1>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 style={heading}>{childs[0]}</h2>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 style={heading}>{childs[0]}</h2>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 style={heading}>{childs[0]}</h2>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 style={heading}>{childs[0]}</h2>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 style={heading}>{childs[0]}</h2>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 style={heading}>{childs[0]}</h3>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 style={heading}>{childs[0]}</h3>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 style={heading}>{childs[0]}</h3>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 style={heading}>{childs[0]}</h3>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 style={heading}>{childs[0]}</h3>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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

        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 style={heading}>{childs[0]}</h4>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 style={heading}>{childs[0]}</h4>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 style={heading}>{childs[0]}</h4>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 style={heading}>{childs[0]}</h4>
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
            padding: props.padding || '0',
            margin: props.margin || '0',
        }
    }
    render() {
        const heading = {
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
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 style={heading}>{childs[0]}</h4>
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
        const paragraph = {
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

        const childs = React.Children.toArray(this.props.children)
        return (
            <p style={paragraph}>{childs[0]}</p>
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
        const paragraph = {
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
        const childs = React.Children.toArray(this.props.children)
        return (
            <p style={paragraph}>{childs[0]}</p>
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
        const paragraph = {
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
        const childs = React.Children.toArray(this.props.children)
        return (
            <p style={paragraph}>{childs[0]}</p>
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
        const paragraph = {
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
        const childs = React.Children.toArray(this.props.children)
        return (
            <p style={paragraph}>{childs[0]}</p>
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
        const paragraph = {
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
        const childs = React.Children.toArray(this.props.children)

        //cannt implement without being able to pass multiple styles
        return (
            <p className="paragraph5">{childs[0]}</p>
        )
    }
}
/* End of Basic Paragraph Blocks */
/* Start of Pull Quotes */
export class PullQuote1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split('\\'))
        return (
            <blockquote className="pullQuote1">
                <p className="pullQuote1-text">{childs[0]}</p>
                <cite>{childs[1]}</cite>
            </blockquote>
        )
    }
}
export class PullQuote2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split('\\'))
        return (
            <blockquote className="pullQuote2">
                <p className="pullQuote2-text">{childs[0]}</p>
                <cite>{childs[1]}</cite>
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
        const circleimg = {
            borderRadius: "100%",
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <img style={circleimg} className={`img-${this.state.size}`} src={childs[0]} alt={childs[1]} />
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
        const roundedimg = {
            borderRadius: '30%',
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <img style={roundedimg} className={`img-${this.state.size}`} src={childs[0]} alt={childs[1]} />
        )
    }
}

/* End of Rounded Images */
/* Start of Square Images */
export class SquareImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: props.size || 'sm',
        }
    }
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className={`img-${this.state.size}`} src={childs[0]} alt={childs[1]} />
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
        const roundedRectangleimg = {
            borderRadius: "30%",
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <img style={roundedRectangleimg} className={`recimg-${this.state.size}`} src={childs[0]} alt={childs[1]} />
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

        const childs = React.Children.toArray(this.props.children)
        return (
            <img className={`recimg-${this.state.size}`} src={childs[0]} alt={childs[1]} />
        )
    }
}

/* End of Regular Rectangle Image */
/* End of Image Blocks */
/* Start of Button Blocks */
/* Start of Flat Buttons */
export class FlatButton1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <button className="flatButton1">{childs[0]}</button>
        )
    }
}
export class FlatButton2 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <button className="flatButton2">{childs[0]}</button>
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
        const buttonStyle ={
            height: this.state.height,
            width: this.state.width,
            fontFamily: this.state.fontFamily,
            margin:0,
            padding: 0,
        }
        const buttonColor={
            display: "flex",
            flex: 2,
            background: this.state.color,
        }
        const childs = React.Children.toArray(this.props.children)
        return (
            <button style={buttonStyle} className="raisedButton1">
                <div style ={buttonColor}>
                        {childs[0]}
                </div>
            </button>
        )
    }
}
export class RaisedButton2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <button className="raisedButton2">{childs[0]}</button>
        )
    }
}
/* End of Raised Buttons */
/* Start of Floating Buttons */
export class FloatingButton1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <button className="floatingButton1">{childs[0]}</button>
        )
    }
}
export class FloatingButton2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <button className="floatingButton2">{childs[0]}</button>
        )
    }
}
/* End of Floating Buttons */
/* End of Button Blocks */
/* Start of Navigation Blocks */
/* Start of NavBar Blocks */
export class Navbar1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <div className="navbar1">
                <ul className="navbar1-navbar">
                    {navBar}
                </ul>
            </div>
        )
    }
}
export class Navbar2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <div className="navbar2">
                <ul className="navbar2-navbar">
                    {navBar}
                </ul>
            </div>
        )
    }
}
export class Navbar3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <div className="navbar3">
                <ul className="navbar3-navbar">
                    {navBar}
                </ul>
            </div>
        )
    }
}
export class Navbar4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <div className="navbar4">
                <ul className="navbar4-navbar">
                    {navBar}
                </ul>
            </div>
        )
    }
}
export class Navbar5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <div className="navbar5">
                <ul className="navbar5-navbar">
                    {navBar}
                </ul>
            </div>
        )
    }
}
/* End of NavBar Blocks */
/* Start of Sub NavBar Blocks */
export class SubNavbar1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <div className="subnavbar1">
                <ul className="subnavbar1-navbar">
                    {navBar}
                </ul>
            </div>
        )
    }
}
/*export class SubNavbar2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i, arr) => {
            return <li key={i}>{arr[i + 2]}</li>
        })
        return (
            <header className="subnavbar2">
                <Container1>
                    <Holder1>
                        <ul className="subnavbar2-navbar1">
                            {childs[0]}
                            {childs[1]}
                        </ul>
                        <Holder2>
                            <Block1 />
                            <div className="subnavbar2-globalSearch">
                                <GlobalSearch1 >Search Holder</GlobalSearch1>
                            </div>
                            <ul className="subnavbar2-navbar2">
                                {navBar}
                            </ul>
                        </Holder2>
                    </Holder1>
                </Container1>
            </header>
        )
    }
}*/
export class SubNavbar3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <div className="subnavbar3">
                <ul className="subnavbar3-navbar">
                    {navBar}
                </ul>
            </div>
        )
    }
}
export class SubNavbar4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <div className="subnavbar4">
                <ul className="subnavbar4-navbar">
                    {navBar}
                </ul>
            </div>
        )
    }
}
export class SubNavbar5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
            return <li key={i}>{x}</li>
        })
        return (
            <div className="subnavbar5">
                <ul className="subnavbar5-navbar">
                    {navBar}
                </ul>
            </div>
        )
    }
}

/* End of Sub NavBar Blocks */
/* Start of Brand Blocks */
// export class Brand1 extends Component {
//     render() {
//         const childs = React.Children.toArray(this.props.children)
//         return (
//             <section className="brand1">
//                 <SquareImage1>
//                     {childs[0]}
//                     logo
//                 </SquareImage1>
//                 <p className="brand1-name">{childs[1]}</p>
//             </section>
//         )
//     }
// }
// export class Brand2 extends Component {
//     render() {
//         const childs = React.Children.toArray(this.props.children)
//         return (
//             <section className="brand2">
//                 <RectangleImage2>
//                     {childs[0]}
//                     logo
//                 </RectangleImage2>
//             </section>
//         )
//     }
// }
// export class Brand3 extends Component {
//     render() {
//         const childs = React.Children.toArray(this.props.children)
//         return (
//             <section className="brand3">
//                 <SquareImage2>
//                     {childs[0]}
//                     logo
//                 </SquareImage2>
//             </section>
//         )
//     }
// }
// export class Brand4 extends Component {
//     render() {
//         const childs = React.Children.toArray(this.props.children)
//         return (
//             <section className="brand4">
//                 <RectangleImage4>
//                     {childs[0]}
//                     logo
//                 </RectangleImage4>
//             </section>
//         )
//     }
// }
// export class Brand5 extends Component {
//     render() {
//         const childs = React.Children.toArray(this.props.children)
//         return (
//             <section className="brand5">
//             </section>
//         )
//     }
// }
/* End of Brand Blocks */
/* Start of Drop Down Nav Blocks */
export class DropDownNav1 extends Component {
    render() {
        return (
            <div className="dropdownnav1">
            </div>
        )
    }
}
export class DropDownNav2 extends Component {
    render() {
        return (
            <div className="dropdownnav2">
            </div>
        )
    }
}
export class DropDownNav3 extends Component {
    render() {
        return (
            <div className="dropdownnav3">
            </div>
        )
    }
}
export class DropDownNav4 extends Component {
    render() {
        return (
            <div className="dropdownnav4">
            </div>
        )
    }
}
export class DropDownNav5 extends Component {
    render() {
        return (
            <div className="dropdownnav5">
            </div>
        )
    }
}

/* End of Drop Down Nav Blocks */
/* End of Navigation Blocks */