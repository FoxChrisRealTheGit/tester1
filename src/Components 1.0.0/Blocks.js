import React, { Component } from 'react';
import '../Component/component styles/reset.css';

import Container1 from './Containers';
import Holder1 from './Holders';

/* Blocks */
/*
Blocks Description and use
*/


/* empty blocks */
/* Start of Block 1 */
export default class Block1 extends Component {
    render() {
        const block1= {
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
        const block2= {
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
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading1">{childs[0]}</h1>
        )
    }
}
export class MainHeading2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading2">{childs[0]}</h1>
        )
    }
}
export class MainHeading3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading3">{childs[0]}</h1>
        )
    }
}
export class MainHeading4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading4">{childs[0]}</h1>
        )
    }
}
export class MainHeading5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading5">{childs[0]}</h1>
        )
    }
}
/* End of h1 Main Heading */
/* Start of h2 Heading */
export class Heading1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading1">{childs[0]}</h2>
        )
    }
}
export class Heading2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading2">{childs[0]}</h2>
        )
    }
}
export class Heading3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading3">{childs[0]}</h2>
        )
    }
}
export class Heading4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading4">{childs[0]}</h2>
        )
    }
}
export class Heading5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading5">{childs[0]}</h2>
        )
    }
}
/* End of h2 Heading */
/* Start of h3 SubHeading */
export class SubHeading1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading1">{childs[0]}</h3>
        )
    }
}
export class SubHeading2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading2">{childs[0]}</h3>
        )
    }
}
export class SubHeading3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading3">{childs[0]}</h3>
        )
    }
}
export class SubHeading4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading4">{childs[0]}</h3>
        )
    }
}
export class SubHeading5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading5">{childs[0]}</h3>
        )
    }
}
/* End of h3 SubHeading */
/* Start of h4 Secondary SubHeading */
export class SecondarySubHeading1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading1">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading2">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading3">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading4">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading5">{childs[0]}</h4>
        )
    }
}
/* End of h4 secondary subheading */
/* End of Heading Blocks */
 /* Start of Paragraph Blocks */
/* Start of Basic Paragraph Blocks */
export class Paragraph1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph1">{childs[0]}</p>
        )
    }
}
export class Paragraph2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph2">{childs[0]}</p>
        )
    }
}
export class Paragraph3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph3">{childs[0]}</p>
        )
    }
}
export class Paragraph4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph4">{childs[0]}</p>
        )
    }
}
export class Paragraph5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
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
export class CircleImage1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="circleImage img-exsm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class CircleImage2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="circleImage img-sm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class CircleImage3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="circleImage img-md" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class CircleImage4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="circleImage img-lg" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class CircleImage5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="circleImage img-exlg" src={childs[0]} alt={childs[1]} />
        )
    }
}
/* End of Circle Images */
/* Start of Rounded Images */
export class RoundedImage1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedImage img-exsm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RoundedImage2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedImage img-sm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RoundedImage3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedImage img-md" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RoundedImage4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedImage img-lg" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RoundedImage5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedImage img-exlg" src={childs[0]} alt={childs[1]} />
        )
    }
}
/* End of Rounded Images */
/* Start of Square Images */
export class SquareImage1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="squareImage img-exsm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class SquareImage2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="squareImage img-sm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class SquareImage3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="squareImage img-md" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class SquareImage4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="squareImage img-lg" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class SquareImage5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="squareImage img-exlg" src={childs[0]} alt={childs[1]} />
        )
    }
}
/* End of Square Images */
/* Start of Rounded Rectangle Image */
export class RoundedRectangleImage1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedRectangleImage recimg-exsm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RoundedRectangleImage2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedRectangleImage recimg-sm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RoundedRectangleImage3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedRectangleImage recimg-md" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RoundedRectangleImage4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedRectangleImage recimg-lg" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RoundedRectangleImage5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="roundedRectangleImage recimg-exlg" src={childs[0]} alt={childs[1]} />
        )
    }
}
/* End of Rounded Rectangle Image */
/* Start of Regular Rectangle Image */
export class RectangleImage1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="rectangleImage recimg-exsm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RectangleImage2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="rectangleImage recimg-sm" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RectangleImage3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="rectangleImage recimg-md" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RectangleImage4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="rectangleImage recimg-lg" src={childs[0]} alt={childs[1]} />
        )
    }
}
export class RectangleImage5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <img className="rectangleImage recimg-exlg" src={childs[0]} alt={childs[1]} />
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
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <button className="raisedButton1">{childs[0]}</button>
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
            <section className="navbar1">
                <ul className="navbar1-navbar">
                    {navBar}
                </ul>
            </section>
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
            <section className="navbar2">
                <ul className="navbar2-navbar">
                    {navBar}
                </ul>
            </section>
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
            <section className="navbar3">
                <ul className="navbar3-navbar">
                    {navBar}
                </ul>
            </section>
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
            <section className="navbar4">
                <ul className="navbar4-navbar">
                    {navBar}
                </ul>
            </section>
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
            <section className="navbar5">
                <ul className="navbar5-navbar">
                    {navBar}
                </ul>
            </section>
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
            <header className="subnavbar1">
                <ul className="subnavbar1-navbar">
                    {navBar}
                </ul>
            </header>
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
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
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
        const childs = React.Children.toArray(this.props.children)
        const navBar = childs.map((x, i) => {
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
/* Start of Brand Blocks */
export class Brand1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <section className="brand1">
                <SquareImage1>
                    {childs[0]}
                    logo
                </SquareImage1>
                <p className="brand1-name">{childs[1]}</p>
            </section>
        )
    }
}
export class Brand2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <section className="brand2">
                <RectangleImage2>
                    {childs[0]}
                    logo
                </RectangleImage2>
            </section>
        )
    }
}
export class Brand3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <section className="brand3">
                <SquareImage2>
                    {childs[0]}
                    logo
                </SquareImage2>
            </section>
        )
    }
}
export class Brand4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <section className="brand4">
                <RectangleImage4>
                    {childs[0]}
                    logo
                </RectangleImage4>
            </section>
        )
    }
}
export class Brand5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <section className="brand5">
            </section>
        )
    }
}
/* End of Brand Blocks */
/* Start of Drop Down Nav Blocks */
export class DropDownNav1 extends Component{
    render(){
        return(
            <section className="dropdownnav1">
            </section>
        )
    }
}
export class DropDownNav2 extends Component{
    render(){
        return(
            <section className="dropdownnav2">
            </section>
        )
    }
}
export class DropDownNav3 extends Component{
    render(){
        return(
            <section className="dropdownnav3">
            </section>
        )
    }
}
export class DropDownNav4 extends Component{
    render(){
        return(
            <section className="dropdownnav4">
            </section>
        )
    }
}
export class DropDownNav5 extends Component{
    render(){
        return(
            <section className="dropdownnav5">
            </section>
        )
    }
}

/* End of Drop Down Nav Blocks */
/* End of Navigation Blocks */