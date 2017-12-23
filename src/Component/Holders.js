import React, { Component } from 'react';
import './component styles/reset.css';
import './component styles/holders.css';

/* Holders*/
/*
Holders Description and use
*/

/* Start of Holder 1 Component */
export default class Holder1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder1">
                <div className="holder1-block1">{childs[0] || <div />}</div>
                <div className="holder1-block2">{childs[1] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 1 Component */
/* Start of Holder 2 Component */
export class Holder2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder2">
                <div className="holder2-block1">{childs[0] || <div />}</div>
                <div className="holder2-block2">{childs[1] || <div />}</div>
                <div className="holder2-block3">{childs[2] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 2 Component */
/* Start of Holder 3 Component */
export class Holder3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder3">
                <div className="holder3-block1">{childs[0] || <div />}</div>
                <div className="holder3-block2">{childs[1] || <div />}</div>
                <div className="holder3-block3">{childs[2] || <div />}</div>
                <div className="holder3-block4">{childs[3] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 3 Component */
/* Start of Holder 4 Component */
export class Holder4 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder4">
                <div className="holder4-block1">{childs[0] || <div />}</div>
                <div className="holder4-block2">{childs[1] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 4 Component */
/* Start of Holder 5 Component */
export class Holder5 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder5">
                <div className="holder5-block1">{childs[0] || <div />}</div>
                <div className="holder5-block2">{childs[1] || <div />}</div>
                <div className="holder5-block3">{childs[2] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 5 Component */
/* Start of Holder 6 Component */
export class Holder6 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder6">
                <div className="holder6-block1">{childs[0] || <div />}</div>
                <div className="holder6-block2">{childs[1] || <div />}</div>
                <div className="holder6-block3">{childs[2] || <div />}</div>
                <div className="holder6-block4">{childs[3] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 6 Component */
/* Start of Holder 7 Component */
export class Holder7 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder7">
                <section className="holder7-top">
                    <div className="holder7-block1">{childs[0] || <div />}</div>
                    <div className="holder7-block3">{childs[2] || <div />}</div>
                </section>
                <section className="holder7-bottom">
                    <div className="holder7-block2">{childs[1] || <div />}</div>
                    <div className="holder7-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 7 Component */
/* Start of Holder 8 Component */
export class Holder8 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder8">
                <section className="holder8-top">
                    <div className="holder8-block1">{childs[0] || <div />}</div>
                    <div className="holder8-block3">{childs[2] || <div />}</div>
                    <div className="holder8-block5">{childs[4] || <div />}</div>
                </section>
                <section className="holder8-bottom">
                    <div className="holder8-block2">{childs[1] || <div />}</div>
                    <div className="holder8-block4">{childs[3] || <div />}</div>
                    <div className="holder8-block6">{childs[5] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 8 Component */
/* Start of Holder 9 Component */
export class Holder9 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder9">
                <section className="holder9-top">
                    <div className="holder9-block1">{childs[0] || <div />}</div>
                    <div className="holder9-block3">{childs[2] || <div />}</div>
                    <div className="holder9-block5">{childs[4] || <div />}</div>
                    <div className="holder9-block7">{childs[6] || <div />}</div>
                </section>
                <section className="holder9-bottom">
                    <div className="holder9-block2">{childs[1] || <div />}</div>
                    <div className="holder9-block4">{childs[3] || <div />}</div>
                    <div className="holder9-block6">{childs[5] || <div />}</div>
                    <div className="holder9-block8">{childs[7] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 9 Component */
/* Start of Holder 10 Component */
export class Holder10 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder10">
                <section className="holder10-top">
                    <div className="holder10-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder10-bottom">
                    <div className="holder10-block2">{childs[1] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 10 Component */
/* Start of Holder 11 Component */
export class Holder11 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder11">
                <section className="holder11-top">
                    <div className="holder11-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder11-bottom">
                    <div className="holder11-block2">{childs[1] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 11 Component */
/* Start of Holder 12 Component */
export class Holder12 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder12">
                <section className="holder12-left">
                    <div className="holder12-block1">{childs[0] || <div />}</div>
                    <div className="holder12-block2">{childs[1] || <div />}</div>
                </section>
                <section className="holder12-right">
                    <div className="holder12-block3">{childs[2] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 12 Component */
/* Start of Holder 13 Component */
export class Holder13 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder13">
                <section className="holder13-left">
                    <div className="holder13-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder13-right">
                    <div className="holder13-block2">{childs[1] || <div />}</div>
                    <div className="holder13-block3">{childs[2] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 13 Component */
/* Start of Holder 14 Component */
export class Holder14 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder14">
                <section className="holder14-top">
                    <div className="holder14-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder14-bottom">
                    <div className="holder14-block2">{childs[1] || <div />}</div>
                    <div className="holder14-block3">{childs[2] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 14 Component */
/* Start of Holder 15 Component */
export class Holder15 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder15">
                <section className="holder15-top">
                    <div className="holder15-block1">{childs[0] || <div />}</div>
                    <div className="holder15-block2">{childs[1] || <div />}</div>
                </section>
                <section className="holder15-bottom">
                    <div className="holder15-block3">{childs[2] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 15 Component */
/* Start of Holder 16 Component */
export  class Holder16 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder16">
                <section className="holder16-left">
                    <div className="holder16-block1">{childs[0] || <div />}</div>
                    <div className="holder16-block2">{childs[1] || <div />}</div>
                    <div className="holder16-block3">{childs[2] || <div />}</div>
                </section>
                <section className="holder16-right">
                    <div className="holder16-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 16 Component */
/* Start of Holder 17 Component */
export class Holder17 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder17">
                <section className="holder17-left">
                    <div className="holder17-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder17-right">
                    <div className="holder17-block2">{childs[1] || <div />}</div>
                    <div className="holder17-block3">{childs[2] || <div />}</div>
                    <div className="holder17-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 17 Component */
/* Start of Holder 18 Component */
export class Holder18 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder18">
                <section className="holder18-top">
                    <div className="holder18-block1">{childs[0] || <div />}</div>
                    <div className="holder18-block2">{childs[1] || <div />}</div>
                    <div className="holder18-block3">{childs[2] || <div />}</div>
                </section>
                <section className="holder18-bottom">
                    <div className="holder18-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 18 Component */
/* Start of Holder 19 Component */
export class Holder19 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder19">
                <section className="holder19-top">
                    <div className="holder19-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder19-bottom">
                    <div className="holder19-block2">{childs[1] || <div />}</div>
                    <div className="holder19-block3">{childs[2] || <div />}</div>
                    <div className="holder19-block4">{childs[3] || <div />}</div>
                </section>

            </section>
        )
    }
}
/* End of Holder 19 Component */
/* Start of Holder 20 Component */
export class Holder20 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder20">
                <section className="holder20-left">
                    <div className="holder20-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder20-middle">
                    <div className="holder20-block2">{childs[1] || <div />}</div>
                    <div className="holder20-block3">{childs[2] || <div />}</div>
                </section>
                <section className="holder20-right">
                    <div className="holder20-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 20 Component */
/* Start of Holder 21 Component */
export  class Holder21 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder21">
                <section className="holder21-left">
                    <div className="holder21-block1">{childs[0] || <div />}</div>
                    <div className="holder21-block2">{childs[1] || <div />}</div>
                </section>
                <section className="holder21-middle">
                    <div className="holder21-block3">{childs[2] || <div />}</div>
                </section>
                <section className="holder21-right">
                    <div className="holder21-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 21 Component */
/* Start of Holder 22 Component */
export class Holder22 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder22">
                <section className="holder22-left">
                    <div className="holder22-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder22-middle">
                    <div className="holder22-block2">{childs[1] || <div />}</div>
                </section>
                <section className="holder22-right">
                    <div className="holder22-block3">{childs[2] || <div />}</div>
                    <div className="holder22-block4">{childs[3] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 22 Component */
/* Start of Holder 23 Component */
export class Holder23 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder23">
                <section className="holder23-left">
                    <div className="holder23-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder23-right">
                    <section className="holder23-right-top">
                        <div className="holder23-block2">{childs[1] || <div />}</div>
                    </section>
                    <section className="holder23-right-bottom">
                        <div className="holder23-block3">{childs[2] || <div />}</div>
                        <div className="holder23-block4">{childs[3] || <div />}</div>
                    </section>
                </section>
            </section>
        )
    }
}
/* End of Holder 23 Component */
/* Start of Holder 24 Component */
export class Holder24 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder24">
                <section className="holder24-left">
                    <div className="holder24-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder24-right">
                    <section className="holder24-right-top">
                        <div className="holder24-block2">{childs[1] || <div />}</div>
                        <div className="holder24-block3">{childs[2] || <div />}</div>
                    </section>
                    <section className="holder24-right-bottom">
                        <div className="holder24-block4">{childs[3] || <div />}</div>
                    </section>
                </section>
            </section>
        )
    }
}
/* End of Holder 24 Component */
/* Start of Holder 25 Component */
export class Holder25 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder25">
                <section className="holder25-left">
                    <div className="holder25-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder25-right">
                    <section className="holder25-right-top">
                        <div className="holder25-block2">{childs[1] || <div />}</div>
                        <div className="holder25-block3">{childs[2] || <div />}</div>
                        <div className="holder25-block4">{childs[3] || <div />}</div>
                    </section>
                    <section className="holder25-right-bottom">
                        <div className="holder25-block5">{childs[4] || <div />}</div>
                        <div className="holder25-block6">{childs[5] || <div />}</div>
                    </section>
                </section>
            </section>
        )
    }
}
/* End of Holder 25 Component */
/* Start of Holder 26 Component */
export class Holder26 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder26">
                <section className="holder26-left">
                    <div className="holder26-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder26-right">
                    <section className="holder26-right-top">
                        <div className="holder26-block2">{childs[1] || <div />}</div>
                        <div className="holder26-block3">{childs[2] || <div />}</div>
                        <div className="holder26-block4">{childs[3] || <div />}</div>
                    </section>
                    <section className="holder26-right-bottom">
                        <div className="holder26-block5">{childs[4] || <div />}</div>
                    </section>
                </section>
            </section>
        )
    }
}
/* End of Holder 26 Component */
/* Start of Holder 27 Component */
export class Holder27 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder27">
                <section className="holder27-left">
                    <div className="holder27-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder27-right">
                    <section className="holder27-right-top">
                        <div className="holder27-block2">{childs[1] || <div />}</div>
                    </section>
                    <section className="holder27-right-bottom">
                        <div className="holder27-block3">{childs[2] || <div />}</div>
                        <div className="holder27-block4">{childs[3] || <div />}</div>
                        <div className="holder27-block5">{childs[4] || <div />}</div>
                    </section>
                </section>
            </section>
        )
    }
}
/* End of Holder 27 Component */
/* Start of Holder 28 Component */
export class Holder28 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder28">
                <section className="holder28-left">
                    <div className="holder28-block1">{childs[0] || <div />}</div>
                </section>
                <section className="holder28-right">
                    <section className="holder28-right-top">
                        <div className="holder28-block2">{childs[1] || <div />}</div>
                        <div className="holder28-block3">{childs[2] || <div />}</div>
                    </section>
                    <section className="holder28-right-bottom">
                        <div className="holder28-block4">{childs[3] || <div />}</div>
                        <div className="holder28-block5">{childs[4] || <div />}</div>
                        <div className="holder28-block6">{childs[5] || <div />}</div>
                    </section>
                </section>
            </section>
        )
    }
}
/* End of Holder 28 Component */
/* Start of Holder 29 Component */
export class Holder29 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder29">
                <section className="holder29-left">
                    <section className="holder29-left-top">
                        <div className="holder29-block1">{childs[0] || <div />}</div>
                        <div className="holder29-block2">{childs[1] || <div />}</div>
                        <div className="holder29-block3">{childs[2] || <div />}</div>
                    </section>
                    <section className="holder29-left-bottom">
                        <div className="holder29-block4">{childs[3] || <div />}</div>
                        <div className="holder29-block5">{childs[4] || <div />}</div>
                    </section>
                </section>
                <section className="holder29-right">
                    <div className="holder29-block6">{childs[5] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 29 Component */
/* Start of Holder 30 Component */
export class Holder30 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder30">
                <section className="holder30-left">
                    <section className="holder30-left-top">
                        <div className="holder30-block1">{childs[0] || <div />}</div>
                        <div className="holder30-block2">{childs[1] || <div />}</div>
                        <div className="holder30-block3">{childs[2] || <div />}</div>
                    </section>
                    <section className="holder30-left-bottom">
                        <div className="holder30-block4">{childs[3] || <div />}</div>
                    </section>
                </section>
                <section className="holder30-right">
                    <div className="holder30-block5">{childs[4] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 30 Component */
/* Start of Holder 31 Component */
export class Holder31 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder31">
                <section className="holder31-left">
                    <section className="holder31-left-top">
                        <div className="holder31-block1">{childs[0] || <div />}</div>
                    </section>
                    <section className="holder31-left-bottom">
                        <div className="holder31-block2">{childs[1] || <div />}</div>
                        <div className="holder31-block3">{childs[2] || <div />}</div>
                        <div className="holder31-block4">{childs[3] || <div />}</div>
                    </section>
                </section>
                <section className="holder31-right">
                    <div className="holder31-block5">{childs[4] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 31 Component */
/* Start of Holder 32 Component */
export class Holder32 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder32">
                <section className="holder32-left">
                    <section className="holder32-left-top">
                        <div className="holder32-block1">{childs[0] || <div />}</div>
                        <div className="holder32-block2">{childs[1] || <div />}</div>
                    </section>
                    <section className="holder32-left-bottom">
                        <div className="holder32-block3">{childs[2] || <div />}</div>
                        <div className="holder32-block4">{childs[3] || <div />}</div>
                        <div className="holder32-block5">{childs[4] || <div />}</div>
                    </section>
                </section>
                <section className="holder32-right">
                    <div className="holder32-block6">{childs[5] || <div />}</div>
                </section>
            </section>
        )
    }
}
/* End of Holder 32 Component */
/* Start of Holder 33 Component */
export class Holder33 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder33">
            </section>
        )
    }
}
/* End of Holder 33 Component */
/* Start of Holder 34 Component */
export class Holder34 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder34">
            </section>
        )
    }
}
/* End of Holder 34 Component */
/* Start of Holder 35 Component */
export  class Holder35 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder35">
            </section>
        )
    }
}
/* End of Holder 35 Component */
/* Start of Holder 36 Component */
export class Holder36 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder36">
            </section>
        )
    }
}
/* End of Holder 36 Component */
/* Start of Holder 37 Component */
export class Holder37 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder37">
            </section>
        )
    }
}
/* End of Holder 37 Component */
/* Start of Holder 38 Component */
export class Holder38 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder38">
            </section>
        )
    }
}
/* End of Holder 38 Component */
/* Start of Holder 39 Component */
export  class Holder39 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder39">
            </section>
        )
    }
}
/* End of Holder 39 Component */
/* Start of Holder 40 Component */
export  class Holder40 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder40">
            </section>
        )
    }
}
/* End of Holder 40 Component */
/* Start of Holder 41 Component */
export class Holder41 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder41">
            </section>
        )
    }
}
/* End of Holder 41 Component */
/* Start of Holder 42 Component */
export class Holder42 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder42">
            </section>
        )
    }
}
/* End of Holder 42 Component */
/* Start of Holder 43 Component */
export class Holder43 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder43">
            </section>
        )
    }
}
/* End of Holder 43 Component */
/* Start of Holder 44 Component */
export class Holder44 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder44">
            </section>
        )
    }
}
/* End of Holder 44 Component */
/* Start of Holder 45 Component */
export class Holder45 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder45">
            </section>
        )
    }
}
/* End of Holder 45 Component */
/* Start of Holder 46 Component */
export class Holder46 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder46">
            </section>
        )
    }
}
/* End of Holder 46 Component */
/* Start of Holder 47 Component */
export class Holder47 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder47">
            </section>
        )
    }
}
/* End of Holder 47 Component */
/* Start of Holder 48 Component */
export class Holder48 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder48">
            </section>
        )
    }
}
/* End of Holder 48 Component */
/* Start of Holder 49 Component */
export class Holder49 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder49">
            </section>
        )
    }
}
/* End of Holder 49 Component */
/* Start of Holder 50 Component */
export class Holder50 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children);
        return (
            <section className="holder50">
            </section>
        )
    }
}
/* End of Holder 50 Component */