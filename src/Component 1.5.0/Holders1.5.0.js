import React, { Component } from 'react';
import '../Components 1.0.0/reset.css';

import StyleSheet from 'nestingstyles';
import StyleSwi from './styleSwitcher';
/* Start of Holder 1 Component */
export default class Holder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir,
            mdflexDir: props.mdflexDir,
            childs: []
        }
    }
    componentDidMount() {
        const props = this.props;
        let blocks, styles, holderstyles, block1styles, block2styles, block3styles = '';
        let styledHolder, styledChilds1, styledChilds2, styledChilds3 = ''
        const CHILDS = React.Children.toArray(this.props.children)
        const num = CHILDS.length;
        if (num === 1) {
            blocks = {
                block1Direction: props.block1direction || 'row',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex',
            }
            holderstyles = StyleSheet.create({
                holderstyles: {
                    width: '100%',
                    display: this.state.display,
                    flexDirection: this.state.direction,
                    flexWrap: 'wrap',
                    background: this.state.text,
                    justifyContent: this.state.alignBlocks,
                    overflow: 'hidden',
                    borderLeft: this.state.borderLeft,
                    borderRight: this.state.borderRight,
                    borderTop: this.state.borderTop,
                    borderBottom: this.state.borderBottom,
                    border: this.state.border,
                },
                '@media (max-width: 440px)': {
                    holderstyles: {
                        display: this.state.smdis,
                        flexDirection: this.state.smflexDir
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    holderstyles: {
                        display: this.state.mddis,
                        flexDirection: this.state.mdflexDir
                    }
                }
            }),
                block1styles = StyleSheet.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || this.state.block1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1,
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis,
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis,
                        }
                    },
                });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if (num === 2) {
            blocks = {
                block1Direction: props.block1direction || 'row',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex',
                block2: props.block2 || '1',
                block2BorderLeft: props.b2BLeft,
                block2BorderRight: props.b2BRight,
                block2BorderTop: props.b2BTop,
                block2BorderBottom: props.b2BBottom,
                block2Border: props.b2Border,
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block2smdis: props.block2smdis || 'flex',
                block2mddis: props.block2mddis || 'flex',
            }
            holderstyles = StyleSheet.create({
                holderstyles: {
                    width: '100%',
                    display: this.state.display,
                    flexDirection: this.state.direction,
                    flexWrap: 'wrap',
                    background: this.state.text,
                    justifyContent: this.state.alignBlocks,
                    overflow: 'hidden',
                    borderLeft: this.state.borderLeft,
                    borderRight: this.state.borderRight,
                    borderTop: this.state.borderTop,
                    borderBottom: this.state.borderBottom,
                    border: this.state.border,
                },
                '@media (max-width: 440px)': {
                    holderstyles: {
                        display: this.state.smdis,
                        flexDirection: this.state.smflexDir
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    holderstyles: {
                        display: this.state.mddis,
                        flexDirection: this.state.mdflexDir
                    }
                }
            }),
                block1styles = StyleSheet.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || this.state.block1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1,
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis,
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis,
                        }
                    },
                });
            block2styles = StyleSheet.create({
                block2styles: {
                    display: 'flex',
                    flex: blocks.block2,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock2,
                    borderLeft: blocks.block2BorderLeft,
                    borderRight: blocks.block2BorderRight,
                    borderTop: blocks.block2BorderTop,
                    borderBottom: blocks.block2BorderBottom,
                    border: blocks.b2Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock2,
                },
                '@media screen and (max-width: 440px)': {
                    block2styles: {
                        display: blocks.block2smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block2styles: {
                        display: blocks.block2mddis,
                    }
                },

            });

            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if (num === 3) {
            blocks = {
                block1Direction: props.block1direction || 'row',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex',
                block2: props.block2 || '1',
                block2BorderLeft: props.b2BLeft,
                block2BorderRight: props.b2BRight,
                block2BorderTop: props.b2BTop,
                block2BorderBottom: props.b2BBottom,
                block2Border: props.b2Border,
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block2smdis: props.block2smdis || 'flex',
                block2mddis: props.block2mddis || 'flex',
                block3: props.block3 || '1',
                block3BorderLeft: props.b3BLeft,
                block3BorderRight: props.b3BRight,
                block3BorderTop: props.b3BTop,
                block3BorderBottom: props.b3BBottom,
                block3Border: props.b3Border,
                alignBlock3: props.alignBlock3 || 'center',
                justifyBlock3: props.justifyBlock3 || 'center',
                block3smdis: props.block3smdis || 'flex',
                block3mddis: props.block3mddis || 'flex',
            }
            holderstyles = StyleSheet.create({
                holderstyles: {
                    width: '100%',
                    display: this.state.display,
                    flexDirection: this.state.direction,
                    flexWrap: 'wrap',
                    background: this.state.text,
                    justifyContent: this.state.alignBlocks,
                    overflow: 'hidden',
                    borderLeft: this.state.borderLeft,
                    borderRight: this.state.borderRight,
                    borderTop: this.state.borderTop,
                    borderBottom: this.state.borderBottom,
                    border: this.state.border,
                },
                '@media (max-width: 440px)': {
                    holderstyles: {
                        display: this.state.smdis,
                        flexDirection: this.state.smflexDir
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    holderstyles: {
                        display: this.state.mddis,
                        flexDirection: this.state.mdflexDir
                    }
                }
            }),
                block1styles = StyleSheet.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || this.state.block1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1,
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis,
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis,
                        }
                    },
                });
            block2styles = StyleSheet.create({
                block2styles: {
                    display: 'flex',
                    flex: blocks.block2,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock2,
                    borderLeft: blocks.block2BorderLeft,
                    borderRight: blocks.block2BorderRight,
                    borderTop: blocks.block2BorderTop,
                    borderBottom: blocks.block2BorderBottom,
                    border: blocks.b2Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock2,
                },
                '@media screen and (max-width: 440px)': {
                    block2styles: {
                        display: blocks.block2smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block2styles: {
                        display: blocks.block2mddis,
                    }
                },

            });
            block3styles = StyleSheet.create({
                block3styles: {
                    display: 'flex',
                    flex: blocks.block3,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock3,
                    borderLeft: blocks.block3BorderLeft,
                    borderRight: blocks.block3BorderRight,
                    borderTop: blocks.block3BorderTop,
                    borderBottom: blocks.block3BorderBottom,
                    border: blocks.b3Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock3,
                },
                '@media screen and (max-width: 440px)': {
                    block3styles: {
                        display: blocks.block3smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block3styles: {
                        display: blocks.block3mddis,
                    }
                },

            });

            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[1]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}</section>
            ]
        }
        return this.setState({ childs: styledHolder, blocks })

    }
    componentWillReceiveProps(newProps) {
        const props = this.props;
        let blocks, styles, holderstyles, block1styles, block2styles = '';
        let styledHolder, styledChilds1, styledChilds2 = ''
        const CHILDS = React.Children.toArray(this.props.children)
        const num = CHILDS.length;
        if (num === 1) {
            blocks = {
                block1Direction: props.block1direction || 'row',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex',
            }
            holderstyles = StyleSheet.create({
                holderstyles: {
                    width: '100%',
                    display: this.state.display,
                    flexDirection: this.state.direction,
                    flexWrap: 'wrap',
                    background: this.state.text,
                    justifyContent: this.state.alignBlocks,
                    overflow: 'hidden',
                    borderLeft: this.state.borderLeft,
                    borderRight: this.state.borderRight,
                    borderTop: this.state.borderTop,
                    borderBottom: this.state.borderBottom,
                    border: this.state.border,
                },
                '@media (max-width: 440px)': {
                    holderstyles: {
                        display: this.state.smdis,
                        flexDirection: this.state.smflexDir
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    holderstyles: {
                        display: this.state.mddis,
                        flexDirection: this.state.mdflexDir
                    }
                }
            }),
                block1styles = StyleSheet.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || this.state.block1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1,
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis,
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis,
                        }
                    },
                });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if (num === 2) {
            blocks = {
                block1Direction: props.block1direction || 'row',
                block1: props.block1 || '1',
                block1BorderLeft: props.b1BLeft,
                block1BorderRight: props.b1BRight,
                block1BorderTop: props.b1BTop,
                block1BorderBottom: props.b1BBottom,
                block1Border: props.b1Border,
                alignBlock1: props.alignBlock1 || 'center',
                justifyBlock1: props.justifyBlock1 || 'center',
                block1smdis: props.block1smdis || 'flex',
                block1mddis: props.block1mddis || 'flex',
                block2: props.block2 || '1',
                block2BorderLeft: props.b2BLeft,
                block2BorderRight: props.b2BRight,
                block2BorderTop: props.b2BTop,
                block2BorderBottom: props.b2BBottom,
                block2Border: props.b2Border,
                alignBlock2: props.alignBlock2 || 'center',
                justifyBlock2: props.justifyBlock2 || 'center',
                block2smdis: props.block2smdis || 'flex',
                block2mddis: props.block2mddis || 'flex',
            }
            // this.setState({ blocks })
            holderstyles = StyleSheet.create({
                holderstyles: {
                    width: '100%',
                    display: this.state.display,
                    flexDirection: this.state.direction,
                    flexWrap: 'wrap',
                    background: this.state.text,
                    justifyContent: this.state.alignBlocks,
                    overflow: 'hidden',
                    borderLeft: this.state.borderLeft,
                    borderRight: this.state.borderRight,
                    borderTop: this.state.borderTop,
                    borderBottom: this.state.borderBottom,
                    border: this.state.border,
                },
                '@media (max-width: 440px)': {
                    holderstyles: {
                        display: this.state.smdis,
                        flexDirection: this.state.smflexDir
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    holderstyles: {
                        display: this.state.mddis,
                        flexDirection: this.state.mdflexDir
                    }
                }
            }),
                block1styles = StyleSheet.create({
                    block1styles: {
                        display: 'flex',
                        flex: blocks.block1 || this.state.block1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: blocks.alignBlock1,
                        borderLeft: blocks.block1BorderLeft,
                        borderRight: blocks.block1BorderRight,
                        borderTop: blocks.block1BorderTop,
                        borderBottom: blocks.block1BorderBottom,
                        border: blocks.b1Border,
                        margin: blocks.margin,
                        justifyContent: blocks.justifyBlock1,
                    },
                    '@media screen and (max-width: 440px)': {
                        block1styles: {
                            display: blocks.block1smdis,
                        }
                    },
                    '@media screen and (min-width: 441px) and (max-width: 760px)': {
                        block1styles: {
                            display: blocks.block1mddis,
                        }
                    },
                });
            block2styles = StyleSheet.create({
                block2styles: {
                    display: 'flex',
                    flex: blocks.block2,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock2,
                    borderLeft: blocks.block2BorderLeft,
                    borderRight: blocks.block2BorderRight,
                    borderTop: blocks.block2BorderTop,
                    borderBottom: blocks.block2BorderBottom,
                    border: blocks.b2Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock2,
                },
                '@media screen and (max-width: 440px)': {
                    block2styles: {
                        display: blocks.block2smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block2styles: {
                        display: blocks.block2mddis,
                    }
                },

            });

            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        }

        return this.setState({ childs: styledHolder, blocks })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.childs}
            </React.Fragment>
        )
    }
}
/* End of Holder 1 Component */