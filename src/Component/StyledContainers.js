import React, { Component } from 'react';
import './component styles/reset.css';
import './component styles/styledContainers.css';


import Container1, { Container3 } from './Containers';

import {
    Navbar2,
    Navbar3,
    Brand2,
    Brand3,
    GlobalSearch1
} from './Blocks';
import Holder1, { Holder2, Holder3, Holder4, Holder5, Holder7, Holder8, Holder18 } from './Holders';
/* Pre Styled Containers*/
/*
   Pre Styled Description and use
*/

/* Start of Pre Styled Headers */
/* Start of Styled Header 1 */
export default class StyluxStyledHeader1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <header className="StyluxStyledHeader1">
                    <Holder2>
                        <Brand2>
                            {childs[0]}
                        </Brand2>
                        {childs[1]}
                        {childs[2]}
                    </Holder2>
                </header>
            </Container1>
        )
    }
}
/* End of Styled Header 1 */
/* Start of Styled Header 2 */
export class StyluxStyledHeader2 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <header className="StyluxStyledHeader2">
                    <Holder2>
                        <Brand3>
                            {childs[0]}
                        </Brand3>
                        <Holder4>
                            {childs[1]}
                            {childs[2]}
                        </Holder4>
                        <Holder4>
                            {childs[3]}
                            <GlobalSearch1>
                                Search Holder
                            </GlobalSearch1>
                        </Holder4>
                    </Holder2>
                </header>
            </Container1>
        )
    }
}
/* End of Styled Header 2 */
/* Start of Styled Header 3 */
export class StyluxStyledHeader3 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <header className="StyluxStyledHeader3">
                    <Holder1>
                        {childs[0]}
                        {childs[1]}
                    </Holder1>
                </header>
            </Container1>
        )
    }
}
/* End of Styled Header 3 */
/* Start of Styled Header 4 */
export class StyluxStyledHeader4 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <header className="StyluxStyledHeader4">
                    <Holder2>
                        {childs[0]}
                        {childs[1]}
                        {childs[2]}
                    </Holder2>
                </header>
            </Container1>
        )
    }
}
/* End of Styled Header 4 */
/* Start of Styled Header 5 */
export class StyluxStyledHeader5 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <header className="StyluxStyledHeader5">
                    <Holder5>
                        {childs[0]}
                        {childs[1]}
                        {childs[2]}
                    </Holder5>
                </header>
            </Container1>
        )
    }
}
/* End of Styled Header 5 */
/* End of Pre Styled Headers */
/* Start of Pre Styled Footers */
/* Start of Styled Footer 1 */
export class StyluxStyledFooter1 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <footer className="StyluxStyledFooter1">
                    <Holder4>
                        <Holder3>
                            {childs[0]}
                            {childs[1]}
                            {childs[2]}
                            <Holder1>
                                {childs[3]}
                                {childs[4]}
                            </Holder1>
                        </Holder3>
                        <Holder2>
                            <Holder7>
                                {childs[5]}
                            </Holder7>
                            <Holder4>
                                {childs[6]}
                            </Holder4>
                            <Holder4>
                                {childs[7]}
                            </Holder4>
                        </Holder2>
                    </Holder4>
                </footer>
            </Container1>
        )
    }
}
/* End of Styled Footer 1 */
/* Start of Styled Footer 2 */
export class StyluxStyledFooter2 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <footer className="StyluxStyledFooter2">
                    <Holder8>
                        {childs[0]}
                        {childs[3]}
                        {childs[1]}
                        {childs[4]}
                        {childs[2]}
                        {childs[5]}
                    </Holder8>
                </footer>
            </Container1>
        )
    }
}
/* End of Styled Footer 2 */
/* Start of Styled Footer 3 */
export class StyluxStyledFooter3 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <footer className="StyluxStyledFooter3">
                    <Holder4>
                        {childs[0]}
                        {childs[1]}
                    </Holder4>
                </footer>
            </Container1>
        )
    }
}
/* End of Styled Footer 3 */
/* Start of Styled Footer 4 */
export class StyluxStyledFooter4 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <footer className="StyluxStyledFooter4">
                    <Holder18>
                        {childs[0]}
                        {childs[1]}
                        {childs[2]}
                        {childs[3]}
                    </Holder18>
                </footer>
            </Container1>
        )
    }
}
/* End of Styled Footer 4 */
/* Start of Styled Footer 5 */
export class StyluxStyledFooter5 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <Container1>
                <footer className="StyluxStyledFooter5">
                </footer>
            </Container1>
        )
    }
}
/* End of Styled Footer 5 */

/* End of Pre Styled Footers */
/* Start of Pre Styled SideBars */


/* End of Pre Styled SideBars */
/* Start of Pre Built Carosels */


/* End of Pre Built Carosels */
/* Start of Pre Built Product Displays */


/* End of Pre Built Product Displays */
/* Start of Pre Built tables */


/* End of Pre Built Tables */
/* Start of Pre Built Forms */


/* End of Pre Built Forms */
