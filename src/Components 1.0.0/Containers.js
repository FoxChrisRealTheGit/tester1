import React, { Component } from 'react';
import './reset.css';

import StyleSheet from 'nestingstyles';

// import ThemeProvider from './ThemeProvider';
//import Themes from './Themes';

/* Containers */
/*
Containers description and use
*/

/* Start of Container 1 Component */
export default class Container1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            alignBlock1: props.alignBlock1 || 'center',
            block1: props.block1 || '1',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
            //theme: props.theme,
        }
    }
    // componentDidMount(){
    //     //const theme = Themes(this.state.theme)
    //     //console.log(theme)
    //     this.setState({
    //         background: theme.background
    //     })
    // }
    render() {
        const containerStyle = StyleSheet.create({
            containerstyles: {
                display: this.state.display.display,
                flexDirection: this.state.direction,
                borderLeft: this.state.borderLeft,
                borderRight: this.state.borderRight,
                borderTop: this.state.borderTop,
                borderBottom: this.state.borderBottom,
                border: this.state.border,
            },
            '@media (max-width: 440px)': {
                containerstyles: {
                    display: this.state.smdis,
                    flexDirection: this.state.smflexDir
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                containerstyles: {
                    display: this.state.mddis,
                    flexDirection: this.state.mdflexDir
                }
            },
        });
        const block1style = StyleSheet.create({
            block1styles: {
                flex: this.state.block1,
                background: this.state.background,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                justifyContent: this.state.justifyBlock1,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block1styles: {
                    display: this.state.block1smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block1styles: {
                    display: this.state.block1mddis,
                }
            },

        });
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle.containerstyles}>
                <div style={block1style.block1styles}>{childs[0] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 1 Component */
/* Start of Container 2 Component */
export class Container2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block2smdis: props.block2smdis || 'flex',
            block2mddis: props.block2mddis || 'flex',
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
        }
    }
    render() {
        const containerStyle = StyleSheet.create({
            containerstyles: {
                display: this.state.display.display,
                flexDirection: this.state.direction,
                borderLeft: this.state.borderLeft,
                borderRight: this.state.borderRight,
                borderTop: this.state.borderTop,
                borderBottom: this.state.borderBottom,
                border: this.state.border,
            },
            '@media (max-width: 440px)': {
                containerstyles: {
                    display: this.state.smdis,
                    flexDirection: this.state.smflexDir
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                containerstyles: {
                    display: this.state.mddis,
                    flexDirection: this.state.mdflexDir
                }
            },
        });
        const block1style = StyleSheet.create({
            block1styles: {
                flex: this.state.block1,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                justifyContent: this.state.justifyBlock1,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block1styles: {
                    display: this.state.block1smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block1styles: {
                    display: this.state.block1mddis,
                }
            },

        });
        const block2style = StyleSheet.create({
            block2styles: {
                flex: this.state.block2,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock2,
                justifyContent: this.state.justifyBlock2,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block2styles: {
                    display: this.state.block2smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block2styles: {
                    display: this.state.block2mddis,
                }
            },

        });
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle.containerstyles}>
                <div style={block1style.block1styles}>{childs[0] || <div />}</div>
                <div style={block2style.block2styles}>{childs[1] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 2 Component */
/* Start of Container 3 Component */
export class Container3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block2smdis: props.block2smdis || 'flex',
            block2mddis: props.block2mddis || 'flex',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
            block3smdis: props.block3smdis || 'flex',
            block3mddis: props.block3mddis || 'flex',
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
        }
    }
    render() {
        const containerStyle = StyleSheet.create({
            containerstyles: {
                display: this.state.display.display,
                flexDirection: this.state.direction,
                borderLeft: this.state.borderLeft,
                borderRight: this.state.borderRight,
                borderTop: this.state.borderTop,
                borderBottom: this.state.borderBottom,
                border: this.state.border,
            },
            '@media (max-width: 440px)': {
                containerstyles: {
                    display: this.state.smdis,
                    flexDirection: this.state.smflexDir
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                containerstyles: {
                    display: this.state.mddis,
                    flexDirection: this.state.mdflexDir
                }
            },
        });
        const block1style = StyleSheet.create({
            block1styles: {
                flex: this.state.block1,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                justifyContent: this.state.justifyBlock1,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block1styles: {
                    display: this.state.block1smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block1styles: {
                    display: this.state.block1mddis,
                }
            },

        });
        const block2style = StyleSheet.create({
            block2styles: {
                flex: this.state.block2,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock2,
                justifyContent: this.state.justifyBlock2,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block2styles: {
                    display: this.state.block2smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block2styles: {
                    display: this.state.block2mddis,
                }
            },

        });
        const block3style = StyleSheet.create({
            block3styles: {
                flex: this.state.block3,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock3,
                justifyContent: this.state.justifyBlock3,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block3styles: {
                    display: this.state.block3smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block3styles: {
                    display: this.state.block3mddis,
                }
            },

        });
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle.containerstyles}>
                <div style={block1style.block1styles}>{childs[0] || <div />}</div>
                <div style={block2style.block2styles}>{childs[1] || <div />}</div>
                <div style={block3style.block3styles}>{childs[2] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 3 Component */
/* Start of Container 4 Component */
export class Container4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block2smdis: props.block2smdis || 'flex',
            block2mddis: props.block2mddis || 'flex',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
            block3smdis: props.block3smdis || 'flex',
            block3mddis: props.block3mddis || 'flex',
            block4: props.block4 || '1',
            alignBlock4: props.alignBlock4 || 'center',
            justifyBlock4: props.justifyBlock4 || 'center',
            block4smdis: props.block4smdis || 'flex',
            block4mddis: props.block4mddis || 'flex',
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
        }
    }
    render() {
        const containerStyle = StyleSheet.create({
            containerstyles: {
                display: this.state.display.display,
                flexDirection: this.state.direction,
                borderLeft: this.state.borderLeft,
                borderRight: this.state.borderRight,
                borderTop: this.state.borderTop,
                borderBottom: this.state.borderBottom,
                border: this.state.border,
            },
            '@media (max-width: 440px)': {
                containerstyles: {
                    display: this.state.smdis,
                    flexDirection: this.state.smflexDir
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                containerstyles: {
                    display: this.state.mddis,
                    flexDirection: this.state.mdflexDir
                }
            },
        });
        const block1style = StyleSheet.create({
            block1styles: {
                flex: this.state.block1,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                justifyContent: this.state.justifyBlock1,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block1styles: {
                    display: this.state.block1smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block1styles: {
                    display: this.state.block1mddis,
                }
            },

        });
        const block2style = StyleSheet.create({
            block2styles: {
                flex: this.state.block2,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock2,
                justifyContent: this.state.justifyBlock2,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block2styles: {
                    display: this.state.block2smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block2styles: {
                    display: this.state.block2mddis,
                }
            },

        });
        const block3style = StyleSheet.create({
            block3styles: {
                flex: this.state.block3,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock3,
                justifyContent: this.state.justifyBlock3,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block3styles: {
                    display: this.state.block3smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block3styles: {
                    display: this.state.block3mddis,
                }
            },

        });
        const block4style = StyleSheet.create({
            block4styles: {
                flex: this.state.block4,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock4,
                justifyContent: this.state.justifyBlock4,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block4styles: {
                    display: this.state.block4smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block4styles: {
                    display: this.state.block4mddis,
                }
            },

        });
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle.containerstyles}>
                <div style={block1style.block1styles}>{childs[0] || <div />}</div>
                <div style={block2style.block2styles}>{childs[1] || <div />}</div>
                <div style={block3style.block3styles}>{childs[2] || <div />}</div>
                <div style={block4style.block4styles}>{childs[3] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 4 Component */
/* Start of Container 5 Component */
export class Container5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block2smdis: props.block2smdis || 'flex',
            block2mddis: props.block2mddis || 'flex',
            block3: props.block3 || '1',
            alignBlock3: props.alignBlock3 || 'center',
            justifyBlock3: props.justifyBlock3 || 'center',
            block3smdis: props.block3smdis || 'flex',
            block3mddis: props.block3mddis || 'flex',
            block4: props.block4 || '1',
            alignBlock4: props.alignBlock4 || 'center',
            justifyBlock4: props.justifyBlock4 || 'center',
            block4smdis: props.block4smdis || 'flex',
            block4mddis: props.block4mddis || 'flex',
            block5: props.block5 || '1',
            alignBlock5: props.alignBlock5 || 'center',
            justifyBlock5: props.justifyBlock5 || 'center',
            block5smdis: props.block5smdis || 'flex',
            block5mddis: props.block5mddis || 'flex',
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
        }
    }
    render() {
        const containerStyle = StyleSheet.create({
            containerstyles: {
                display: this.state.display.display,
                flexDirection: this.state.direction,
                borderLeft: this.state.borderLeft,
                borderRight: this.state.borderRight,
                borderTop: this.state.borderTop,
                borderBottom: this.state.borderBottom,
                border: this.state.border,
            },
            '@media (max-width: 440px)': {
                containerstyles: {
                    display: this.state.smdis,
                    flexDirection: this.state.smflexDir
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                containerstyles: {
                    display: this.state.mddis,
                    flexDirection: this.state.mdflexDir
                }
            },
        });
        const block1style = StyleSheet.create({
            block1styles: {
                flex: this.state.block1,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                justifyContent: this.state.justifyBlock1,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block1styles: {
                    display: this.state.block1smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block1styles: {
                    display: this.state.block1mddis,
                }
            },

        });
        const block2style = StyleSheet.create({
            block2styles: {
                flex: this.state.block2,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock2,
                justifyContent: this.state.justifyBlock2,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block2styles: {
                    display: this.state.block2smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block2styles: {
                    display: this.state.block2mddis,
                }
            },

        });
        const block3style = StyleSheet.create({
            block3styles: {
                flex: this.state.block3,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock3,
                justifyContent: this.state.justifyBlock3,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block3styles: {
                    display: this.state.block3smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block3styles: {
                    display: this.state.block3mddis,
                }
            },

        });
        const block4style = StyleSheet.create({
            block4styles: {
                flex: this.state.block4,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock4,
                justifyContent: this.state.justifyBlock4,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block4styles: {
                    display: this.state.block4smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block4styles: {
                    display: this.state.block4mddis,
                }
            },

        });
        const block5style = StyleSheet.create({
            block5styles: {
                flex: this.state.block5,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock5,
                justifyContent: this.state.justifyBlock5,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block5styles: {
                    display: this.state.block5smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block5styles: {
                    display: this.state.block5mddis,
                }
            },

        });
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={containerStyle.containerstyles}>
                <div style={block1style.block1styles}>{childs[0] || <div />}</div>
                <div style={block2style.block2styles}>{childs[1] || <div />}</div>
                <div style={block3style.block3styles}>{childs[2] || <div />}</div>
                <div style={block4style.block4styles}>{childs[3] || <div />}</div>
                <div style={block5style.block5styles}>{childs[4] || <div />}</div>
            </section>
        )
    }
}
/* End of Container 5 Component */