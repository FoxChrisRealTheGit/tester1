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
/* Start of NavBar Blocks */
export class Navbar1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="navbar1">
                <ul className="navbar1-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}
export class Navbar2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="navbar2">
                <ul className="navbar2-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}
export class Navbar3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="navbar3">
                <ul className="navbar3-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}
export class Navbar4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="navbar4">
                <ul className="navbar4-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}
export class Navbar5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="navbar5">
                <ul className="navbar5-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}
/* End of NavBar Blocks */
/* Start of Sub NavBar Blocks */
export class SubNavbar1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="subnavbar1">
                <ul className="subnavbar1-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}
export class SubNavbar2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="subnavbar2">
                <ul className="subnavbar2-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}
export class SubNavbar3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="subnavbar3">
                <ul className="subnavbar3-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}
export class SubNavbar4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="subnavbar4">
                <ul className="subnavbar4-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}
export class SubNavbar5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children.split(','))
        const navBar = childs.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="subnavbar5">
                <ul className="subnavbar5-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}

/* End of Sub NavBar Blocks */
/* End of NavBar Blocks */
/* Start of Paragraph Blocks */
/* Start of Basic Paragraph Blocks */
export class Paragraph1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="paragraph1">{childs[0]}</p>
        )
    }
}
export class Paragraph2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="paragraph2">{childs[0]}</p>
        )
    }
}
export class Paragraph3 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="paragraph3">{childs[0]}</p>
        )
    }
}
export class Paragraph4 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="paragraph4">{childs[0]}</p>
        )
    }
}
export class Paragraph5 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="paragraph5">{childs[0]}</p>
        )
    }
}
/* End of Basic Paragraphs */
/* Start of Pull Quotes */
export class PullQuote1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="pullQuote1">{childs[0]}</p>
        )
    }
}
export class PullQuote2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="pullQuote2">{childs[0]}</p>
        )
    }
}
export class PullQuote3 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="pullQuote3">{childs[0]}</p>
        )
    }
}
export class PullQuote4 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="pullQuote4">{childs[0]}</p>
        )
    }
}
export class PullQuote5 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <p className="pullQuote5">{childs[0]}</p>
        )
    }
}
/* End of Pull Quotes */
/* End of Paragraph Blocks */
/* Start of Image Blocks */
/* Start of Circle Images */
export class CircleImage1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <img className="circleImage1" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class CircleImage2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <img className="circleImage2" src={childs[0]} alt={childs[1]} />
        )
    }
}
/* End of Circle Images */
/* Start of Rounded Images */
export class RoundedImage1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <img className="roundedImage1" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RoundedImage2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <img className="roundedImage2" src={childs[0]} alt={childs[1]} />
        )
    }
}
/* End of Rounded Images */
/* Start of Square Images */
export class SquareImage1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <img className="squareImage1" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class SquareImage2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <img className="squareImage2" src={childs[0]} alt={childs[1]} />
        )
    }
}
/* End of Square Images */
/* End of Image Blocks */
/* Start of Button Blocks */
/* Start of Flat Buttons */
export class FlatButton1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <button className="flatButton1">{childs[0]}</button>
        )
    }
}
export class FlatButton2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <button className="flatButton2">{childs[0]}</button>
        )
    }
}
/* End of Flat Buttons */
/* Start of Raised Buttons */
export class RaisedButton1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <button className="raisedButton1">{childs[0]}</button>
        )
    }
}
export class RaisedButton2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <button className="raisedButton2">{childs[0]}</button>
        )
    }
}
/* End of Raised Buttons */
/* Start of Floating Buttons */
export class FloatingButton1 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <button className="floatingButton1">{childs[0]}</button>
        )
    }
}
export class FloatingButton2 extends Component {
    render(){
       const childs = React.Children.toArray(this.props.children)
        return(
            <button className="floatingButton2">{childs[0]}</button>
        )
    }
}
/* End of Floating Buttons */
/* End of Button Blocks */
