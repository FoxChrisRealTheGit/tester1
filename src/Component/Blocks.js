import React, { Component } from 'react';
import './component styles/reset.css';
import './component styles/blocks.css';

import Container1 from './Containers';
import Holder1, { Holder2 } from './Holders';

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
            <section className="block1">
                <div />
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
        const navBar = childs.map((x, i) => {
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
/* Start of Type 1 Main Headings */
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
/* End of Type 1 Main Headings */
/* Start of Type 2 Main Headings */
export class MainHeading6 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading6">{childs[0]}</h1>
        )
    }
}
export class MainHeading7 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading7">{childs[0]}</h1>
        )
    }
}
export class MainHeading8 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading8">{childs[0]}</h1>
        )
    }
}
export class MainHeading9 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading9">{childs[0]}</h1>
        )
    }
}
export class MainHeading10 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading10">{childs[0]}</h1>
        )
    }
}
/* End of Type 2 Main Headings */
/* Start of Type 3 Main Headings */
export class MainHeading11 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading11">{childs[0]}</h1>
        )
    }
}
export class MainHeading12 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading12">{childs[0]}</h1>
        )
    }
}
export class MainHeading13 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading13">{childs[0]}</h1>
        )
    }
}
export class MainHeading14 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading14">{childs[0]}</h1>
        )
    }
}
export class MainHeading15 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading15">{childs[0]}</h1>
        )
    }
}
/* End of Type 4 Main Headings */
/* Start of Type 4 Main Headings */
export class MainHeading16 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading16">{childs[0]}</h1>
        )
    }
}
export class MainHeading17 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading17">{childs[0]}</h1>
        )
    }
}
export class MainHeading18 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading18">{childs[0]}</h1>
        )
    }
}
export class MainHeading19 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading19">{childs[0]}</h1>
        )
    }
}
export class MainHeading20 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h1 className="mainHeading20">{childs[0]}</h1>
        )
    }
}
/* End of Type 4 Main Headings */
/* End of Main Heading */
/* Start of h2 Heading */
/* Start of Type 1 Headings */
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
/* End of Type 1 Headings */
/* Start of Type 2 Headings */
export class Heading6 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading6">{childs[0]}</h2>
        )
    }
}
export class Heading7 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading7">{childs[0]}</h2>
        )
    }
}
export class Heading8 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading8">{childs[0]}</h2>
        )
    }
}
export class Heading9 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading9">{childs[0]}</h2>
        )
    }
}
export class Heading10 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading10">{childs[0]}</h2>
        )
    }
}
/* End of Type 2 Headings */
/* Start of Type 3 Headings */
export class Heading11 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading11">{childs[0]}</h2>
        )
    }
}
export class Heading12 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading12">{childs[0]}</h2>
        )
    }
}
export class Heading13 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading13">{childs[0]}</h2>
        )
    }
}
export class Heading14 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading14">{childs[0]}</h2>
        )
    }
}
export class Heading15 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading15">{childs[0]}</h2>
        )
    }
}
/* End of Type 3 Headings */
/* Start of Type 4 Headings */
export class Heading16 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading16">{childs[0]}</h2>
        )
    }
}
export class Heading17 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading17">{childs[0]}</h2>
        )
    }
}
export class Heading18 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading18">{childs[0]}</h2>
        )
    }
}
export class Heading19 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading19">{childs[0]}</h2>
        )
    }
}
export class Heading20 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h2 className="heading20">{childs[0]}</h2>
        )
    }
}
/* End of Type 4 Headings */
/* End of h2 Headings */
/* Start of h3 SubHeading */
/* Start of Type 1 subHeading */
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
/* End of Type 1 SubHEading */
/* Start of Type 2 subHeading */
export class SubHeading6 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading6">{childs[0]}</h3>
        )
    }
}
export class SubHeading7 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading7">{childs[0]}</h3>
        )
    }
}
export class SubHeading8 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading8">{childs[0]}</h3>
        )
    }
}
export class SubHeading9 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading9">{childs[0]}</h3>
        )
    }
}
export class SubHeading10 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading10">{childs[0]}</h3>
        )
    }
}
/* End of Type 1 SubHEading */
/* Start of Type 3 subHeading */
export class SubHeading11 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading11">{childs[0]}</h3>
        )
    }
}
export class SubHeading12 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading12">{childs[0]}</h3>
        )
    }
}
export class SubHeading13 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading13">{childs[0]}</h3>
        )
    }
}
export class SubHeading14 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading14">{childs[0]}</h3>
        )
    }
}
export class SubHeading15 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading15">{childs[0]}</h3>
        )
    }
}
/* End of Type 1 SubHEading */
/* Start of Type 4 subHeading */
export class SubHeading16 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading16">{childs[0]}</h3>
        )
    }
}
export class SubHeading17 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading17">{childs[0]}</h3>
        )
    }
}
export class SubHeading18 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading18">{childs[0]}</h3>
        )
    }
}
export class SubHeading19 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading19">{childs[0]}</h3>
        )
    }
}
export class SubHeading20 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h3 className="subHeading20">{childs[0]}</h3>
        )
    }
}
/* End of Type 1 SubHEading */
/* End of h3 SubHeading */
/* Start of h4 Secondary SubHeading */
/* Start of Type 1 secondary subheading */
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
/* End of Type 1 secondary subheading */
/* Start of Type 2 secondary subheading */
export class SecondarySubHeading6 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading6">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading7 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading7">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading8 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading8">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading9 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading9">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading10 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading10">{childs[0]}</h4>
        )
    }
}
/* End of Type 2 secondary subheading */
/* Start of Type 3 secondary subheading */
export class SecondarySubHeading11 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading11">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading12 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading12">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading13 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading13">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading14 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading14">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading15 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading15">{childs[0]}</h4>
        )
    }
}
/* End of Type 3 secondary subheading */
/* Start of Type 4 secondary subheading */
export class SecondarySubHeading16 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading16">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading17 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading17">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading18 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading18">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading19 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading19">{childs[0]}</h4>
        )
    }
}
export class SecondarySubHeading20 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <h4 className="secondarySubHeading20">{childs[0]}</h4>
        )
    }
}
/* End of Type 4 secondary subheading */
/* End of h4 Secondary SubHeading */
/* End of Heading Blocks */
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
export class SubNavbar2 extends Component {
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
}
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
/* Start of Paragraph Blocks */
/* Start of Basic Paragraph Blocks */
/* Start of Type 1 Paragraph Blocks */
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
/* End of Type 1 Paragraph Blocks */
/* Start of Type 2 Paragraph Blocks */
export class Paragraph6 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph6">{childs[0]}</p>
        )
    }
}
export class Paragraph7 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph7">{childs[0]}</p>
        )
    }
}
export class Paragraph8 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph8">{childs[0]}</p>
        )
    }
}
export class Paragraph9 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph9">{childs[0]}</p>
        )
    }
}
export class Paragraph10 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph10">{childs[0]}</p>
        )
    }
}
/* End of Type 2 Paragraph Blocks */
/* Start of Type 3 Paragraph Blocks */
export class Paragraph11 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph11">{childs[0]}</p>
        )
    }
}
export class Paragraph12 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph12">{childs[0]}</p>
        )
    }
}
export class Paragraph13 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph13">{childs[0]}</p>
        )
    }
}
export class Paragraph14 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph14">{childs[0]}</p>
        )
    }
}
export class Paragraph15 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph15">{childs[0]}</p>
        )
    }
}
/* End of Type 3 Paragraph Blocks */
/* Start of Type 4 Paragraph Blocks */
export class Paragraph16 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph16">{childs[0]}</p>
        )
    }
}
export class Paragraph17 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph17">{childs[0]}</p>
        )
    }
}
export class Paragraph18 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph18">{childs[0]}</p>
        )
    }
}
export class Paragraph19 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph19">{childs[0]}</p>
        )
    }
}
export class Paragraph20 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <p className="paragraph20">{childs[0]}</p>
        )
    }
}
/* End of Type 4 Paragraph Blocks */
/* End of Basic Paragraphs */
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
/* Start of Search items */
/* Global Search */
export class GlobalSearch1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <button className="globalSearch1">{childs[0]}</button>
        )
    }
}
/* End of Global Search */
/* Start of Constrained Search */


/* End of Constrained Search */
/* End of Search Items */