import React, { Component } from 'react';
import './component styles/reset.css';
import './component styles/containers.css';

/* Containers */
/*
Containers description and use
*/

/* Start of Container 1 Component */
export default class Container1 extends Component {

    render() {
        return (
            <section className="container1">
                <div className="container1-block1">{this.props.children || <div />}</div>
            </section>
        )
    }
}

/* End of Container 1 Component */
/* Start of Container 2 Component */
export class Container2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container2">
                <div className="container2-block1">{childs[0] || <div />}</div>
                <div className="container2-block2">{childs[1] || <div />}</div>
            </section>
        )
    }
}

/* End of Container 2 Component */
/* Start of Container 3 Component */
export class Container3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container3">
                <div className="container3-block1">{childs[0] || <div />}</div>
                <div className="container3-block2">{childs[1] || <div />}</div>
            </section>
        )
    }
}

/* End of Container 3 Component */
/* Start of Container 4 Component */
export class Container4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container4">
                <section className="container4-top">
                    <div className="container4-block1">{childs[0] || <div />}</div>
                    <div className="container4-block3">{childs[2] || <div />}</div>
                </section>
                <section className="container4-bottom">
                    <div className="container4-block2">{childs[1] || <div />}</div>
                    <div className="container4-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}

/* End of Container 4 Component */
/* Start of Container 5 Component */
export class Container5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container5">
                <section className="container5-top">
                    <div className="container5-block1">{childs[0] || <div />}</div>
                    <div className="container5-block2">{childs[1] || <div />}</div>
                    <div className="container5-block3">{childs[2] || <div />}</div>
                </section>
                <section className="container5-bottom">
                    <div className="container5-block4">{childs[3] || <div />}</div>
                    <div className="container5-block5">{childs[4] || <div />}</div>
                    <div className="container5-block6">{childs[5] || <div />}</div>
                </section>
            </section>
        )
    }
}

/* End of Container 5 Component */
/* Start of Container 6 Component */
export class Container6 extends Component {

    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container6">
                <section className="container6-left">
                    <div className="container6-block1">{childs[0] || <div />}</div>
                    <div className="container6-block2">{childs[1] || <div />}</div>
                    <div className="container6-block3">{childs[2] || <div />}</div>
                </section>
                <section className="container6-right">
                    <div className="container6-block4">{childs[3] || <div />}</div>
                    <div className="container6-block5">{childs[4] || <div />}</div>
                    <div className="container6-block6">{childs[5] || <div />}</div>
                </section>
            </section>
        )
    }
}

/* End of Container 6 Component */
/* Start of Container 7 Component */
export class Container7 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container7">
                <section className="container7-left">
                    <div className="container7-block1">{childs[0] || <div />}</div>
                    <div className="container7-block2">{childs[1] || <div />}</div>
                </section>
                <section className="container7-right">
                    <div className="container7-block3">{childs[2] || <div />}</div>
                </section>
            </section>
        )
    }
}

/* End of Container 7 Component */
/* Start of Container 8 Component */
export class Container8 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container8">
                <section className="container8-left">
                    <div className="container8-block1">{childs[0] || <div />}</div>
                </section>
                <section className="container8-right">
                    <div className="container8-block2">{childs[1] || <div />}</div>
                    <div className="container8-block3">{childs[2] || <div />}</div>
                </section>
            </section>
        )
    }
}

/* End of Container 8 Component */
/* Start of Container 9 Component */
export class Container9 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container9">
                <section className="container9-top">
                    <div className="container9-block1">{childs[0] || <div />}</div>
                </section>
                <section className="container9-bottom">
                    <div className="container9-block2">{childs[1] || <div />}</div>
                    <div className="container9-block3">{childs[2] || <div />}</div>
                </section>
            </section>
        )
    }
}

/* End of Container 9 Component */
/* Start of Container 10 Component */
export class Container10 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container10">
                <section className="container10-top">
                    <div className="container10-block1">{childs[0] || <div />}</div>
                </section>
                <section className="container10-middle">
                    <div className="container10-block2">{childs[1] || <div />}</div>
                </section>
                <section className="container10-bottom">
                    <div className="container10-block3">{childs[2] || <div />}</div>
                    <div className="container10-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}

/* End of Container 10 Component */
/* Start of Container 11 Component */
export class Container11 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container11">
                <section className="container11-top">
                    <div className="container11-block1">{childs[0] || <div />}</div>
                    <div className="container11-block2">{childs[1] || <div />}</div>
                </section>
                <section className="container11-middle">
                    <div className="container11-block3">{childs[2] || <div />}</div>
                </section>
                <section className="container11-bottom">
                    <div className="container11-block4">{childs[3] || <div />}</div>
                    <div className="container11-block5">{childs[4] || <div />}</div>
                </section>
            </section>
        )
    }
}

/* End of Container 11 Component */
/* Start of Container 12 Component */
export class Container12 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container12">
            </section>
        )
    }
}

/* End of Container 12 Component */
/* Sytart of Container 13 Component */
export class Container13 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container13">
            </section>
        )
    }
}

/* End of Container 13 Component */
/* Start of Container 14 Component */
export class Container14 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container14">
            </section>
        )
    }
}

/* End of Container 14 Component */
/* Start of Container 15 Component */
export class Container15 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container15">
            </section>
        )
    }
}

/* End of Container 15 Component */
/* Start of Container 16 Component */
export class Container16 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container16">
            </section>
        )
    }
}

/* End of Container 16 Component */
/* Start of Container 17 Component */
export class Container17 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container17">
            </section>
        )
    }
}

/* End of Container 17 Component */
/* Start of Container 18 Component */
export class Container18 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container18">
            </section>
        )
    }
}

/* End of Container 18 Component */
/* Start of Container 19 Component */
export class Container19 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container19">
            </section>
        )
    }
}

/* End of Container 19 Component */
/* Start of Container 20 Component */
export class Container20 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="container20">
            </section>
        )
    }
}

/* End of Container 20 Component */