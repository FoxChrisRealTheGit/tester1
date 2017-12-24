import React, { Component } from 'react';
import './component styles/reset.css';
import './component styles/blocks.css';

/* Blocks */
/*
Blocks Description and use
*/


/* empty blocks */
/*
Empty blocks overview
*/

/* Start of Block 1 */
export default class Block1 extends Component {
    render() {
        return (
            <section>
            </section>
        )
    }
}

/* End of Block 1 */
/* Start of Block 2 */
export class Block2 extends Component {
    render() {
        return (
            <section className="block2">
                <div />
            </section>
        )
    }
}
/* End of Block 2 */

/*Start of Heading Test Block1 */
export class HeadingTest1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="headingTest1">
                <h2>{childs[0]}</h2>
            </section>
        )
    }
}

/* End of Heading Test Block1 */
/*Start of Heading Test Block1 */
export class HeadingTest2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="headingTest2">
                <h2>{childs[0]}</h2>
            </section>
        )
    }
}

/* End of Heading Test Block1 */

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

/* Start of horizontal test block1 */
export class HorizontalTestBlock2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="horizontalTest2">
                <hr />
            </section>
        )
    }
}

/* End of horizontal test block 2 */

/* Start of navbar test */
export class NavbarTest1 extends Component {
    render() {
        const children = React.Children.toArray(this.props.children)
        const navBar = children.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="navbarTest1">
                <ul className="navbarTest1-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}

/* End of navbar test */
/*End of Test Section */
/* Start of Real Section */
/*
Blocks Description and use
*/
/* Start of Heading Blocks */


/* End of Heading Blocks */
/* Start of NavBar Blocks */


/* End of NavBar Blocks */
/* Start of Paragraph Blocks */


/* End of Paragraph Blocks */
/* Start of Image Blocks */


/* End of Image Blocks */
/* Start of Button Blocks */



/* End of Button Blocks */
