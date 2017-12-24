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
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i)=> {
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
/* Start of h1 Main Heading */
 export class MainHeading1 extends Component {
     render(){
        const childs = React.Children.toArray(this.props.children)
         return(
             <h1 className="mainHeading1">{childs[0]}</h1>
         )
     }
 }
 export class MainHeading2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h1 className="mainHeading2">{childs[0]}</h1>
        )
    }
}
export class MainHeading3 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h1 className="mainHeading3">{childs[0]}</h1>
        )
    }
}
export class MainHeading4 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h1 className="mainHeading4">{childs[0]}</h1>
        )
    }
}
export class MainHeading5 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h1 className="mainHeading5">{childs[0]}</h1>
        )
    }
}
/* End of Main Heading */
/* Start of h2 Heading */ 
export class Heading1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h2 className="heading1">{childs[0]}</h2>
        )
    }
}
export class Heading2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h2 className="heading2">{childs[0]}</h2>
        )
    }
}
export class Heading3 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h2 className="heading3">{childs[0]}</h2>
        )
    }
}
export class Heading4 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h2 className="heading4">{childs[0]}</h2>
        )
    }
}
export class Heading5 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h2 className="heading5">{childs[0]}</h2>
        )
    }
}
/* End of h2 Headings */
/* Start of SubHeading */
export class SubHeading1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h3 className="subHeading1">{childs[0]}</h3>
        )
    }
}
export class SubHeading2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h3 className="subHeading2">{childs[0]}</h3>
        )
    }
}
export class SubHeading3 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h3 className="subHeading3">{childs[0]}</h3>
        )
    }
}
export class SubHeading4 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h3 className="subHeading4">{childs[0]}</h3>
        )
    }
}
export class SubHeading5 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h3 className="subHeading5">{childs[0]}</h3>
        )
    }
}
/* End of SubHeading */
/* Start of Secondary SubHeading */
export class SecondarySubHeading1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h4 className="secondarySubHeading1">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h4 className="secondarySubHeading2">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading3 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h4 className="secondarySubHeading3">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading4 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h4 className="secondarySubHeading4">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading5 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <h4 className="secondarySubHeading5">{childs[0]}</h4>
        )
    }
}
/* End of Secondary SubHeading */
/* End of Heading Blocks */
/* Start of NavBar Blocks */


/* End of NavBar Blocks */
/* Start of Paragraph Blocks */


/* End of Paragraph Blocks */
/* Start of Image Blocks */


/* End of Image Blocks */
/* Start of Button Blocks */



/* End of Button Blocks */
