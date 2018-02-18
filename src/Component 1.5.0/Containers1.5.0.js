import React, { Component } from 'react';
import '../Components 1.0.0/reset.css';
import StyleSheet from 'nestingstyles';

/* Start of Container Component */
export default class Container extends Component {
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
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
            childs: []
        }
    }
    componentDidMount() {
        const props = this.props;
        let blocks, holderstyles, block1styles, block2styles, block3styles, block4styles, block5styles, block6styles, block7styles, block8styles, block9styles, block10styles, block11styles, block12styles, block13styles, block14styles, block15styles, block16styles, block17styles, block18styles, block19styles, block20styles = '';
        let styledHolder, styledChilds1, styledChilds2, styledChilds3, styledChilds4, styledChilds5, styledChilds6, styledChilds7, styledChilds8, styledChilds9, styledChilds10, styledChilds11, styledChilds12, styledChilds13, styledChilds14, styledChilds15, styledChilds16, styledChilds17, styledChilds18, styledChilds19, styledChilds20 = '';
        const CHILDS = React.Children.toArray(this.props.children)
        const num = CHILDS.length;
        if (num === 1) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
            };
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
            });
            block1styles = StyleSheet.create({
                block1styles: {
                    display: 'flex',
                    flex: blocks.block1 || this.state.block1,
                    flexDirection: blocks.block1Direction,
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
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if (num === 2) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
            };
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
            });
            block1styles = StyleSheet.create({
                block1styles: {
                    display: 'flex',
                    flex: blocks.block1 || this.state.block1,
                    flexDirection: blocks.block1Direction,
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
                }
            });
            block2styles = StyleSheet.create({
                block2styles: {
                    display: 'flex',
                    flex: blocks.block2,
                    flexDirection: blocks.block2Direction,
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
                }
            });

            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if (num === 3) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
            };
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
            });
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
                }
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
                }
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
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}</section>
            ]
        } else if (num === 4) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });

            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}</section>
            ]
        } else if (num === 5) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}</section>
            ]
        } else if (num === 6) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}</section>
            ]
        } else if (num === 7) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}</section>
            ]
        } else if (num === 8) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}</section>
            ]
        } else if (num === 9) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}</section>
            ]
        } else if (num === 10) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block2direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}</section>
            ]
        } else if (num === 11) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}</section>
            ]
        } else if (num === 12) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            block12styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block12,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock12,
                    borderLeft: blocks.block12BorderLeft,
                    borderRight: blocks.block12BorderRight,
                    borderTop: blocks.block12BorderTop,
                    borderBottom: blocks.block12BorderBottom,
                    border: blocks.b12Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock12,
                },
                '@media screen and (max-width: 440px)': {
                    block12styles: {
                        display: blocks.block12smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block12styles: {
                        display: blocks.block12mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={block12styles.block12styles}>{CHILDS[11]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}</section>
            ]
        } else if (num === 13) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            block12styles = StyleSheet.create({
                block12styles: {
                    display: 'flex',
                    flex: blocks.block12,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock12,
                    borderLeft: blocks.block12BorderLeft,
                    borderRight: blocks.block12BorderRight,
                    borderTop: blocks.block12BorderTop,
                    borderBottom: blocks.block12BorderBottom,
                    border: blocks.b12Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock12,
                },
                '@media screen and (max-width: 440px)': {
                    block12styles: {
                        display: blocks.block12smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block12styles: {
                        display: blocks.block12mddis,
                    }
                }
            });
            block13styles = StyleSheet.create({
                block13styles: {
                    display: 'flex',
                    flex: blocks.block13,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock13,
                    borderLeft: blocks.block13BorderLeft,
                    borderRight: blocks.block13BorderRight,
                    borderTop: blocks.block13BorderTop,
                    borderBottom: blocks.block13BorderBottom,
                    border: blocks.b13Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock13,
                },
                '@media screen and (max-width: 440px)': {
                    block13styles: {
                        display: blocks.block13smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block13styles: {
                        display: blocks.block13mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={block13styles.block13styles}>{CHILDS[12]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}</section>
            ]
        } else if (num === 14) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
                block14Direction: props.block14direction || 'column',
                block14: props.block14 || '1',
                block14BorderLeft: props.b14BLeft,
                block14BorderRight: props.b14BRight,
                block14BorderTop: props.b14BTop,
                block14BorderBottom: props.b14BBottom,
                block14Border: props.b14Border,
                alignBlock14: props.alignBlock14 || 'center',
                justifyBlock14: props.justifyBlock14 || 'center',
                block14smdis: props.block14smdis || 'flex',
                block14mddis: props.block14mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            block12styles = StyleSheet.create({
                block12styles: {
                    display: 'flex',
                    flex: blocks.block12,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock12,
                    borderLeft: blocks.block12BorderLeft,
                    borderRight: blocks.block12BorderRight,
                    borderTop: blocks.block12BorderTop,
                    borderBottom: blocks.block12BorderBottom,
                    border: blocks.b12Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock12,
                },
                '@media screen and (max-width: 440px)': {
                    block12styles: {
                        display: blocks.block12smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block12styles: {
                        display: blocks.block12mddis,
                    }
                }
            });
            block13styles = StyleSheet.create({
                block13styles: {
                    display: 'flex',
                    flex: blocks.block13,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock13,
                    borderLeft: blocks.block13BorderLeft,
                    borderRight: blocks.block13BorderRight,
                    borderTop: blocks.block13BorderTop,
                    borderBottom: blocks.block13BorderBottom,
                    border: blocks.b13Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock13,
                },
                '@media screen and (max-width: 440px)': {
                    block13styles: {
                        display: blocks.block13smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block13styles: {
                        display: blocks.block13mddis,
                    }
                }
            });
            block14styles = StyleSheet.create({
                block14styles: {
                    display: 'flex',
                    flex: blocks.block14,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock14,
                    borderLeft: blocks.block14BorderLeft,
                    borderRight: blocks.block14BorderRight,
                    borderTop: blocks.block14BorderTop,
                    borderBottom: blocks.block14BorderBottom,
                    border: blocks.b14Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock14,
                },
                '@media screen and (max-width: 440px)': {
                    block14styles: {
                        display: blocks.block14smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block14styles: {
                        display: blocks.block14mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={block14styles.block14styles}>{CHILDS[13]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}</section>
            ]
        } else if (num === 15) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
                block14Direction: props.block14direction || 'column',
                block14: props.block14 || '1',
                block14BorderLeft: props.b14BLeft,
                block14BorderRight: props.b14BRight,
                block14BorderTop: props.b14BTop,
                block14BorderBottom: props.b14BBottom,
                block14Border: props.b14Border,
                alignBlock14: props.alignBlock14 || 'center',
                justifyBlock14: props.justifyBlock14 || 'center',
                block14smdis: props.block14smdis || 'flex',
                block14mddis: props.block14mddis || 'flex',
                block15Direction: props.block15direction || 'column',
                block15: props.block15 || '1',
                block15BorderLeft: props.b15BLeft,
                block15BorderRight: props.b15BRight,
                block15BorderTop: props.b15BTop,
                block15BorderBottom: props.b15BBottom,
                block15Border: props.b15Border,
                alignBlock15: props.alignBlock15 || 'center',
                justifyBlock15: props.justifyBlock15 || 'center',
                block15smdis: props.block15smdis || 'flex',
                block15mddis: props.block15mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            block12styles = StyleSheet.create({
                block12styles: {
                    display: 'flex',
                    flex: blocks.block12,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock12,
                    borderLeft: blocks.block12BorderLeft,
                    borderRight: blocks.block12BorderRight,
                    borderTop: blocks.block12BorderTop,
                    borderBottom: blocks.block12BorderBottom,
                    border: blocks.b12Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock12,
                },
                '@media screen and (max-width: 440px)': {
                    block12styles: {
                        display: blocks.block12smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block12styles: {
                        display: blocks.block12mddis,
                    }
                }
            });
            block13styles = StyleSheet.create({
                block13styles: {
                    display: 'flex',
                    flex: blocks.block13,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock13,
                    borderLeft: blocks.block13BorderLeft,
                    borderRight: blocks.block13BorderRight,
                    borderTop: blocks.block13BorderTop,
                    borderBottom: blocks.block13BorderBottom,
                    border: blocks.b13Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock13,
                },
                '@media screen and (max-width: 440px)': {
                    block13styles: {
                        display: blocks.block13smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block13styles: {
                        display: blocks.block13mddis,
                    }
                }
            });
            block14styles = StyleSheet.create({
                block14styles: {
                    display: 'flex',
                    flex: blocks.block14,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock14,
                    borderLeft: blocks.block14BorderLeft,
                    borderRight: blocks.block14BorderRight,
                    borderTop: blocks.block14BorderTop,
                    borderBottom: blocks.block14BorderBottom,
                    border: blocks.b14Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock14,
                },
                '@media screen and (max-width: 440px)': {
                    block14styles: {
                        display: blocks.block14smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block14styles: {
                        display: blocks.block14mddis,
                    }
                }
            });
            block15styles = StyleSheet.create({
                block15styles: {
                    display: 'flex',
                    flex: blocks.block15,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock15,
                    borderLeft: blocks.block15BorderLeft,
                    borderRight: blocks.block15BorderRight,
                    borderTop: blocks.block15BorderTop,
                    borderBottom: blocks.block15BorderBottom,
                    border: blocks.b15Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock15,
                },
                '@media screen and (max-width: 440px)': {
                    block15styles: {
                        display: blocks.block15smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block15styles: {
                        display: blocks.block15mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={block15styles.block15styles}>{CHILDS[14]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}</section>
            ]
        } else if (num === 16) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
                block14Direction: props.block14direction || 'column',
                block14: props.block14 || '1',
                block14BorderLeft: props.b14BLeft,
                block14BorderRight: props.b14BRight,
                block14BorderTop: props.b14BTop,
                block14BorderBottom: props.b14BBottom,
                block14Border: props.b14Border,
                alignBlock14: props.alignBlock14 || 'center',
                justifyBlock14: props.justifyBlock14 || 'center',
                block14smdis: props.block14smdis || 'flex',
                block14mddis: props.block14mddis || 'flex',
                block15Direction: props.block15direction || 'column',
                block15: props.block15 || '1',
                block15BorderLeft: props.b15BLeft,
                block15BorderRight: props.b15BRight,
                block15BorderTop: props.b15BTop,
                block15BorderBottom: props.b15BBottom,
                block15Border: props.b15Border,
                alignBlock15: props.alignBlock15 || 'center',
                justifyBlock15: props.justifyBlock15 || 'center',
                block15smdis: props.block15smdis || 'flex',
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            block12styles = StyleSheet.create({
                block12styles: {
                    display: 'flex',
                    flex: blocks.block12,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock12,
                    borderLeft: blocks.block12BorderLeft,
                    borderRight: blocks.block12BorderRight,
                    borderTop: blocks.block12BorderTop,
                    borderBottom: blocks.block12BorderBottom,
                    border: blocks.b12Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock12,
                },
                '@media screen and (max-width: 440px)': {
                    block12styles: {
                        display: blocks.block12smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block12styles: {
                        display: blocks.block12mddis,
                    }
                }
            });
            block13styles = StyleSheet.create({
                block13styles: {
                    display: 'flex',
                    flex: blocks.block13,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock13,
                    borderLeft: blocks.block13BorderLeft,
                    borderRight: blocks.block13BorderRight,
                    borderTop: blocks.block13BorderTop,
                    borderBottom: blocks.block13BorderBottom,
                    border: blocks.b13Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock13,
                },
                '@media screen and (max-width: 440px)': {
                    block13styles: {
                        display: blocks.block13smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block13styles: {
                        display: blocks.block13mddis,
                    }
                }
            });
            block14styles = StyleSheet.create({
                block14styles: {
                    display: 'flex',
                    flex: blocks.block14,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock14,
                    borderLeft: blocks.block14BorderLeft,
                    borderRight: blocks.block14BorderRight,
                    borderTop: blocks.block14BorderTop,
                    borderBottom: blocks.block14BorderBottom,
                    border: blocks.b14Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock14,
                },
                '@media screen and (max-width: 440px)': {
                    block14styles: {
                        display: blocks.block14smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block14styles: {
                        display: blocks.block14mddis,
                    }
                }
            });
            block15styles = StyleSheet.create({
                block15styles: {
                    display: 'flex',
                    flex: blocks.block15,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock15,
                    borderLeft: blocks.block15BorderLeft,
                    borderRight: blocks.block15BorderRight,
                    borderTop: blocks.block15BorderTop,
                    borderBottom: blocks.block15BorderBottom,
                    border: blocks.b15Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock15,
                },
                '@media screen and (max-width: 440px)': {
                    block15styles: {
                        display: blocks.block15smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block15styles: {
                        display: blocks.block15mddis,
                    }
                }
            });
            block16styles = StyleSheet.create({
                block16styles: {
                    display: 'flex',
                    flex: blocks.block16,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock16,
                    borderLeft: blocks.block16BorderLeft,
                    borderRight: blocks.block16BorderRight,
                    borderTop: blocks.block16BorderTop,
                    borderBottom: blocks.block16BorderBottom,
                    border: blocks.b16Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock16,
                },
                '@media screen and (max-width: 440px)': {
                    block16styles: {
                        display: blocks.block16smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block16styles: {
                        display: blocks.block16mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={block16styles.block16styles}>{CHILDS[15]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}</section>
            ]
        } else if (num === 17) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
                block14Direction: props.block14direction || 'column',
                block14: props.block14 || '1',
                block14BorderLeft: props.b14BLeft,
                block14BorderRight: props.b14BRight,
                block14BorderTop: props.b14BTop,
                block14BorderBottom: props.b14BBottom,
                block14Border: props.b14Border,
                alignBlock14: props.alignBlock14 || 'center',
                justifyBlock14: props.justifyBlock14 || 'center',
                block14smdis: props.block14smdis || 'flex',
                block14mddis: props.block14mddis || 'flex',
                block15Direction: props.block15direction || 'column',
                block15: props.block15 || '1',
                block15BorderLeft: props.b15BLeft,
                block15BorderRight: props.b15BRight,
                block15BorderTop: props.b15BTop,
                block15BorderBottom: props.b15BBottom,
                block15Border: props.b15Border,
                alignBlock15: props.alignBlock15 || 'center',
                justifyBlock15: props.justifyBlock15 || 'center',
                block15smdis: props.block15smdis || 'flex',
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
                block17Direction: props.block17direction || 'column',
                block17: props.block17 || '1',
                block17BorderLeft: props.b17BLeft,
                block17BorderRight: props.b17BRight,
                block17BorderTop: props.b17BTop,
                block17BorderBottom: props.b17BBottom,
                block17Border: props.b17Border,
                alignBlock17: props.alignBlock17 || 'center',
                justifyBlock17: props.justifyBlock17 || 'center',
                block17smdis: props.block17smdis || 'flex',
                block17mddis: props.block17mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            block12styles = StyleSheet.create({
                block12styles: {
                    display: 'flex',
                    flex: blocks.block12,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock12,
                    borderLeft: blocks.block12BorderLeft,
                    borderRight: blocks.block12BorderRight,
                    borderTop: blocks.block12BorderTop,
                    borderBottom: blocks.block12BorderBottom,
                    border: blocks.b12Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock12,
                },
                '@media screen and (max-width: 440px)': {
                    block12styles: {
                        display: blocks.block12smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block12styles: {
                        display: blocks.block12mddis,
                    }
                }
            });
            block13styles = StyleSheet.create({
                block13styles: {
                    display: 'flex',
                    flex: blocks.block13,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock13,
                    borderLeft: blocks.block13BorderLeft,
                    borderRight: blocks.block13BorderRight,
                    borderTop: blocks.block13BorderTop,
                    borderBottom: blocks.block13BorderBottom,
                    border: blocks.b13Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock13,
                },
                '@media screen and (max-width: 440px)': {
                    block13styles: {
                        display: blocks.block13smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block13styles: {
                        display: blocks.block13mddis,
                    }
                }
            });
            block14styles = StyleSheet.create({
                block14styles: {
                    display: 'flex',
                    flex: blocks.block14,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock14,
                    borderLeft: blocks.block14BorderLeft,
                    borderRight: blocks.block14BorderRight,
                    borderTop: blocks.block14BorderTop,
                    borderBottom: blocks.block14BorderBottom,
                    border: blocks.b14Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock14,
                },
                '@media screen and (max-width: 440px)': {
                    block14styles: {
                        display: blocks.block14smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block14styles: {
                        display: blocks.block14mddis,
                    }
                }
            });
            block15styles = StyleSheet.create({
                block15styles: {
                    display: 'flex',
                    flex: blocks.block15,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock15,
                    borderLeft: blocks.block15BorderLeft,
                    borderRight: blocks.block15BorderRight,
                    borderTop: blocks.block15BorderTop,
                    borderBottom: blocks.block15BorderBottom,
                    border: blocks.b15Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock15,
                },
                '@media screen and (max-width: 440px)': {
                    block15styles: {
                        display: blocks.block15smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block15styles: {
                        display: blocks.block15mddis,
                    }
                }
            });
            block16styles = StyleSheet.create({
                block16styles: {
                    display: 'flex',
                    flex: blocks.block16,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock16,
                    borderLeft: blocks.block16BorderLeft,
                    borderRight: blocks.block16BorderRight,
                    borderTop: blocks.block16BorderTop,
                    borderBottom: blocks.block16BorderBottom,
                    border: blocks.b16Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock16,
                },
                '@media screen and (max-width: 440px)': {
                    block16styles: {
                        display: blocks.block16smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block16styles: {
                        display: blocks.block16mddis,
                    }
                }
            });
            block17styles = StyleSheet.create({
                block17styles: {
                    display: 'flex',
                    flex: blocks.block17,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock17,
                    borderLeft: blocks.block17BorderLeft,
                    borderRight: blocks.block17BorderRight,
                    borderTop: blocks.block17BorderTop,
                    borderBottom: blocks.block17BorderBottom,
                    border: blocks.b17Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock17,
                },
                '@media screen and (max-width: 440px)': {
                    block17styles: {
                        display: blocks.block17smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block17styles: {
                        display: blocks.block17mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={block17styles.block17styles}>{CHILDS[16]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}</section>
            ]
        } else if (num === 18) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
                block14Direction: props.block14direction || 'column',
                block14: props.block14 || '1',
                block14BorderLeft: props.b14BLeft,
                block14BorderRight: props.b14BRight,
                block14BorderTop: props.b14BTop,
                block14BorderBottom: props.b14BBottom,
                block14Border: props.b14Border,
                alignBlock14: props.alignBlock14 || 'center',
                justifyBlock14: props.justifyBlock14 || 'center',
                block14smdis: props.block14smdis || 'flex',
                block14mddis: props.block14mddis || 'flex',
                block15Direction: props.block15direction || 'column',
                block15: props.block15 || '1',
                block15BorderLeft: props.b15BLeft,
                block15BorderRight: props.b15BRight,
                block15BorderTop: props.b15BTop,
                block15BorderBottom: props.b15BBottom,
                block15Border: props.b15Border,
                alignBlock15: props.alignBlock15 || 'center',
                justifyBlock15: props.justifyBlock15 || 'center',
                block15smdis: props.block15smdis || 'flex',
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
                block17Direction: props.block17direction || 'column',
                block17: props.block17 || '1',
                block17BorderLeft: props.b17BLeft,
                block17BorderRight: props.b17BRight,
                block17BorderTop: props.b17BTop,
                block17BorderBottom: props.b17BBottom,
                block17Border: props.b17Border,
                alignBlock17: props.alignBlock17 || 'center',
                justifyBlock17: props.justifyBlock17 || 'center',
                block17smdis: props.block17smdis || 'flex',
                block17mddis: props.block17mddis || 'flex',
                block18Direction: props.block18direction || 'column',
                block18: props.block18 || '1',
                block18BorderLeft: props.b18BLeft,
                block18BorderRight: props.b18BRight,
                block18BorderTop: props.b18BTop,
                block18BorderBottom: props.b18BBottom,
                block18Border: props.b18Border,
                alignBlock18: props.alignBlock18 || 'center',
                justifyBlock18: props.justifyBlock18 || 'center',
                block18smdis: props.block18smdis || 'flex',
                block18mddis: props.block18mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            block12styles = StyleSheet.create({
                block12styles: {
                    display: 'flex',
                    flex: blocks.block12,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock12,
                    borderLeft: blocks.block12BorderLeft,
                    borderRight: blocks.block12BorderRight,
                    borderTop: blocks.block12BorderTop,
                    borderBottom: blocks.block12BorderBottom,
                    border: blocks.b12Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock12,
                },
                '@media screen and (max-width: 440px)': {
                    block12styles: {
                        display: blocks.block12smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block12styles: {
                        display: blocks.block12mddis,
                    }
                }
            });
            block13styles = StyleSheet.create({
                block13styles: {
                    display: 'flex',
                    flex: blocks.block13,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock13,
                    borderLeft: blocks.block13BorderLeft,
                    borderRight: blocks.block13BorderRight,
                    borderTop: blocks.block13BorderTop,
                    borderBottom: blocks.block13BorderBottom,
                    border: blocks.b13Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock13,
                },
                '@media screen and (max-width: 440px)': {
                    block13styles: {
                        display: blocks.block13smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block13styles: {
                        display: blocks.block13mddis,
                    }
                }
            });
            block14styles = StyleSheet.create({
                block14styles: {
                    display: 'flex',
                    flex: blocks.block14,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock14,
                    borderLeft: blocks.block14BorderLeft,
                    borderRight: blocks.block14BorderRight,
                    borderTop: blocks.block14BorderTop,
                    borderBottom: blocks.block14BorderBottom,
                    border: blocks.b14Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock14,
                },
                '@media screen and (max-width: 440px)': {
                    block14styles: {
                        display: blocks.block14smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block14styles: {
                        display: blocks.block14mddis,
                    }
                }
            });
            block15styles = StyleSheet.create({
                block15styles: {
                    display: 'flex',
                    flex: blocks.block15,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock15,
                    borderLeft: blocks.block15BorderLeft,
                    borderRight: blocks.block15BorderRight,
                    borderTop: blocks.block15BorderTop,
                    borderBottom: blocks.block15BorderBottom,
                    border: blocks.b15Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock15,
                },
                '@media screen and (max-width: 440px)': {
                    block15styles: {
                        display: blocks.block15smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block15styles: {
                        display: blocks.block15mddis,
                    }
                }
            });
            block16styles = StyleSheet.create({
                block16styles: {
                    display: 'flex',
                    flex: blocks.block16,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock16,
                    borderLeft: blocks.block16BorderLeft,
                    borderRight: blocks.block16BorderRight,
                    borderTop: blocks.block16BorderTop,
                    borderBottom: blocks.block16BorderBottom,
                    border: blocks.b16Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock16,
                },
                '@media screen and (max-width: 440px)': {
                    block16styles: {
                        display: blocks.block16smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block16styles: {
                        display: blocks.block16mddis,
                    }
                }
            });
            block17styles = StyleSheet.create({
                block17styles: {
                    display: 'flex',
                    flex: blocks.block17,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock17,
                    borderLeft: blocks.block17BorderLeft,
                    borderRight: blocks.block17BorderRight,
                    borderTop: blocks.block17BorderTop,
                    borderBottom: blocks.block17BorderBottom,
                    border: blocks.b17Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock17,
                },
                '@media screen and (max-width: 440px)': {
                    block17styles: {
                        display: blocks.block17smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block17styles: {
                        display: blocks.block17mddis,
                    }
                }
            });
            block18styles = StyleSheet.create({
                block18styles: {
                    display: 'flex',
                    flex: blocks.block18,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock18,
                    borderLeft: blocks.block18BorderLeft,
                    borderRight: blocks.block18BorderRight,
                    borderTop: blocks.block18BorderTop,
                    borderBottom: blocks.block18BorderBottom,
                    border: blocks.b18Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock18,
                },
                '@media screen and (max-width: 440px)': {
                    block18styles: {
                        display: blocks.block18smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block18styles: {
                        display: blocks.block18mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={block18styles.block18styles}>{CHILDS[17]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}</section>
            ]
        } else if (num === 19) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
                block14Direction: props.block14direction || 'column',
                block14: props.block14 || '1',
                block14BorderLeft: props.b14BLeft,
                block14BorderRight: props.b14BRight,
                block14BorderTop: props.b14BTop,
                block14BorderBottom: props.b14BBottom,
                block14Border: props.b14Border,
                alignBlock14: props.alignBlock14 || 'center',
                justifyBlock14: props.justifyBlock14 || 'center',
                block14smdis: props.block14smdis || 'flex',
                block14mddis: props.block14mddis || 'flex',
                block15Direction: props.block15direction || 'column',
                block15: props.block15 || '1',
                block15BorderLeft: props.b15BLeft,
                block15BorderRight: props.b15BRight,
                block15BorderTop: props.b15BTop,
                block15BorderBottom: props.b15BBottom,
                block15Border: props.b15Border,
                alignBlock15: props.alignBlock15 || 'center',
                justifyBlock15: props.justifyBlock15 || 'center',
                block15smdis: props.block15smdis || 'flex',
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
                block17Direction: props.block17direction || 'column',
                block17: props.block17 || '1',
                block17BorderLeft: props.b17BLeft,
                block17BorderRight: props.b17BRight,
                block17BorderTop: props.b17BTop,
                block17BorderBottom: props.b17BBottom,
                block17Border: props.b17Border,
                alignBlock17: props.alignBlock17 || 'center',
                justifyBlock17: props.justifyBlock17 || 'center',
                block17smdis: props.block17smdis || 'flex',
                block17mddis: props.block17mddis || 'flex',
                block18Direction: props.block18direction || 'column',
                block18: props.block18 || '1',
                block18BorderLeft: props.b18BLeft,
                block18BorderRight: props.b18BRight,
                block18BorderTop: props.b18BTop,
                block18BorderBottom: props.b18BBottom,
                block18Border: props.b18Border,
                alignBlock18: props.alignBlock18 || 'center',
                justifyBlock18: props.justifyBlock18 || 'center',
                block18smdis: props.block18smdis || 'flex',
                block18mddis: props.block18mddis || 'flex',
                block19Direction: props.block19direction || 'column',
                block19: props.block19 || '1',
                block19BorderLeft: props.b19BLeft,
                block19BorderRight: props.b19BRight,
                block19BorderTop: props.b19BTop,
                block19BorderBottom: props.b19BBottom,
                block19Border: props.b19Border,
                alignBlock19: props.alignBlock19 || 'center',
                justifyBlock19: props.justifyBlock19 || 'center',
                block19smdis: props.block19smdis || 'flex',
                block19mddis: props.block19mddis || 'flex',
            };
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
            });
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
                }
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
                }
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }
            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }
            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            block12styles = StyleSheet.create({
                block12styles: {
                    display: 'flex',
                    flex: blocks.block12,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock12,
                    borderLeft: blocks.block12BorderLeft,
                    borderRight: blocks.block12BorderRight,
                    borderTop: blocks.block12BorderTop,
                    borderBottom: blocks.block12BorderBottom,
                    border: blocks.b12Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock12,
                },
                '@media screen and (max-width: 440px)': {
                    block12styles: {
                        display: blocks.block12smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block12styles: {
                        display: blocks.block12mddis,
                    }
                }
            });
            block13styles = StyleSheet.create({
                block13styles: {
                    display: 'flex',
                    flex: blocks.block13,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock13,
                    borderLeft: blocks.block13BorderLeft,
                    borderRight: blocks.block13BorderRight,
                    borderTop: blocks.block13BorderTop,
                    borderBottom: blocks.block13BorderBottom,
                    border: blocks.b13Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock13,
                },
                '@media screen and (max-width: 440px)': {
                    block13styles: {
                        display: blocks.block13smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block13styles: {
                        display: blocks.block13mddis,
                    }
                }
            });
            block14styles = StyleSheet.create({
                block14styles: {
                    display: 'flex',
                    flex: blocks.block14,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock14,
                    borderLeft: blocks.block14BorderLeft,
                    borderRight: blocks.block14BorderRight,
                    borderTop: blocks.block14BorderTop,
                    borderBottom: blocks.block14BorderBottom,
                    border: blocks.b14Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock14,
                },
                '@media screen and (max-width: 440px)': {
                    block14styles: {
                        display: blocks.block14smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block14styles: {
                        display: blocks.block14mddis,
                    }
                }
            });
            block15styles = StyleSheet.create({
                block15styles: {
                    display: 'flex',
                    flex: blocks.block15,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock15,
                    borderLeft: blocks.block15BorderLeft,
                    borderRight: blocks.block15BorderRight,
                    borderTop: blocks.block15BorderTop,
                    borderBottom: blocks.block15BorderBottom,
                    border: blocks.b15Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock15,
                },
                '@media screen and (max-width: 440px)': {
                    block15styles: {
                        display: blocks.block15smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block15styles: {
                        display: blocks.block15mddis,
                    }
                }
            });
            block16styles = StyleSheet.create({
                block16styles: {
                    display: 'flex',
                    flex: blocks.block16,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock16,
                    borderLeft: blocks.block16BorderLeft,
                    borderRight: blocks.block16BorderRight,
                    borderTop: blocks.block16BorderTop,
                    borderBottom: blocks.block16BorderBottom,
                    border: blocks.b16Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock16,
                },
                '@media screen and (max-width: 440px)': {
                    block16styles: {
                        display: blocks.block16smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block16styles: {
                        display: blocks.block16mddis,
                    }
                }
            });
            block17styles = StyleSheet.create({
                block17styles: {
                    display: 'flex',
                    flex: blocks.block17,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock17,
                    borderLeft: blocks.block17BorderLeft,
                    borderRight: blocks.block17BorderRight,
                    borderTop: blocks.block17BorderTop,
                    borderBottom: blocks.block17BorderBottom,
                    border: blocks.b17Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock17,
                },
                '@media screen and (max-width: 440px)': {
                    block17styles: {
                        display: blocks.block17smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block17styles: {
                        display: blocks.block17mddis,
                    }
                }
            });
            block18styles = StyleSheet.create({
                block18styles: {
                    display: 'flex',
                    flex: blocks.block18,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock18,
                    borderLeft: blocks.block18BorderLeft,
                    borderRight: blocks.block18BorderRight,
                    borderTop: blocks.block18BorderTop,
                    borderBottom: blocks.block18BorderBottom,
                    border: blocks.b18Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock18,
                },
                '@media screen and (max-width: 440px)': {
                    block18styles: {
                        display: blocks.block18smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block18styles: {
                        display: blocks.block18mddis,
                    }
                }
            });
            block19styles = StyleSheet.create({
                block19styles: {
                    display: 'flex',
                    flex: blocks.block19,
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock19,
                    borderLeft: blocks.block19BorderLeft,
                    borderRight: blocks.block19BorderRight,
                    borderTop: blocks.block19BorderTop,
                    borderBottom: blocks.block19BorderBottom,
                    border: blocks.b19Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock19,
                },
                '@media screen and (max-width: 440px)': {
                    block19styles: {
                        display: blocks.block19smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block19styles: {
                        display: blocks.block19mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={block19styles.block19styles}>{CHILDS[18]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}</section>
            ]
        } else if (num === 20) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
                block2Direction: props.block2direction || 'column',
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
                block3Direction: props.block3direction || 'column',
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
                block4Direction: props.block4direction || 'column',
                block4: props.block4 || '1',
                block4BorderLeft: props.b4BLeft,
                block4BorderRight: props.b4BRight,
                block4BorderTop: props.b4BTop,
                block4BorderBottom: props.b4BBottom,
                block4Border: props.b4Border,
                alignBlock4: props.alignBlock4 || 'center',
                justifyBlock4: props.justifyBlock4 || 'center',
                block4smdis: props.block4smdis || 'flex',
                block4mddis: props.block4mddis || 'flex',
                block5Direction: props.block5direction || 'column',
                block5: props.block5 || '1',
                block5BorderLeft: props.b5BLeft,
                block5BorderRight: props.b5BRight,
                block5BorderTop: props.b5BTop,
                block5BorderBottom: props.b5BBottom,
                block5Border: props.b5Border,
                alignBlock5: props.alignBlock5 || 'center',
                justifyBlock5: props.justifyBlock5 || 'center',
                block5smdis: props.block5smdis || 'flex',
                block5mddis: props.block5mddis || 'flex',
                block6Direction: props.block6direction || 'column',
                block6: props.block6 || '1',
                block6BorderLeft: props.b6BLeft,
                block6BorderRight: props.b6BRight,
                block6BorderTop: props.b6BTop,
                block6BorderBottom: props.b6BBottom,
                block6Border: props.b6Border,
                alignBlock6: props.alignBloc6 || 'center',
                justifyBlock6: props.justifyBlock6 || 'center',
                block6smdis: props.block6smdis || 'flex',
                block6mddis: props.block6mddis || 'flex',
                block7Direction: props.block7direction || 'column',
                block7: props.block7 || '1',
                block7BorderLeft: props.b7BLeft,
                block7BorderRight: props.b7BRight,
                block7BorderTop: props.b7BTop,
                block7BorderBottom: props.b7BBottom,
                block7Border: props.b7Border,
                alignBlock7: props.alignBlock7 || 'center',
                justifyBlock7: props.justifyBlock7 || 'center',
                block7smdis: props.block7smdis || 'flex',
                block7mddis: props.block7mddis || 'flex',
                block8Direction: props.block8direction || 'column',
                block8: props.block8 || '1',
                block8BorderLeft: props.b8BLeft,
                block8BorderRight: props.b8BRight,
                block8BorderTop: props.b8BTop,
                block8BorderBottom: props.b8BBottom,
                block8Border: props.b8Border,
                alignBlock8: props.alignBlock8 || 'center',
                justifyBlock8: props.justifyBlock8 || 'center',
                block8smdis: props.block8smdis || 'flex',
                block8mddis: props.block8mddis || 'flex',
                block9Direction: props.block9direction || 'column',
                block9: props.block9 || '1',
                block9BorderLeft: props.b9BLeft,
                block9BorderRight: props.b9BRight,
                block9BorderTop: props.b9BTop,
                block9BorderBottom: props.b9BBottom,
                block9Border: props.b9Border,
                alignBlock9: props.alignBlock9 || 'center',
                justifyBlock9: props.justifyBlock9 || 'center',
                block9smdis: props.block9smdis || 'flex',
                block9mddis: props.block9mddis || 'flex',
                block10Direction: props.block10direction || 'column',
                block10: props.block10 || '1',
                block10BorderLeft: props.b10BLeft,
                block10BorderRight: props.b10BRight,
                block10BorderTop: props.b10BTop,
                block10BorderBottom: props.b10BBottom,
                block10Border: props.b10Border,
                alignBlock10: props.alignBlock10 || 'center',
                justifyBlock10: props.justifyBlock10 || 'center',
                block10smdis: props.block10smdis || 'flex',
                block10mddis: props.block10mddis || 'flex',
                block11Direction: props.block11direction || 'column',
                block11: props.block11 || '1',
                block11BorderLeft: props.b11BLeft,
                block11BorderRight: props.b11BRight,
                block11BorderTop: props.b11BTop,
                block11BorderBottom: props.b11BBottom,
                block11Border: props.b11Border,
                alignBlock11: props.alignBlock11 || 'center',
                justifyBlock11: props.justifyBlock11 || 'center',
                block11smdis: props.block11smdis || 'flex',
                block11mddis: props.block11mddis || 'flex',
                block12Direction: props.block12direction || 'column',
                block12: props.block12 || '1',
                block12BorderLeft: props.b12BLeft,
                block12BorderRight: props.b12BRight,
                block12BorderTop: props.b12BTop,
                block12BorderBottom: props.b12BBottom,
                block12Border: props.b12Border,
                alignBlock12: props.alignBlock12 || 'center',
                justifyBlock12: props.justifyBlock12 || 'center',
                block12smdis: props.block12smdis || 'flex',
                block12mddis: props.block12mddis || 'flex',
                block13Direction: props.block13direction || 'column',
                block13: props.block13 || '1',
                block13BorderLeft: props.b13BLeft,
                block13BorderRight: props.b13BRight,
                block13BorderTop: props.b13BTop,
                block13BorderBottom: props.b13BBottom,
                block13Border: props.b13Border,
                alignBlock13: props.alignBlock13 || 'center',
                justifyBlock13: props.justifyBlock13 || 'center',
                block13smdis: props.block13smdis || 'flex',
                block13mddis: props.block13mddis || 'flex',
                block14Direction: props.block14direction || 'column',
                block14: props.block14 || '1',
                block14BorderLeft: props.b14BLeft,
                block14BorderRight: props.b14BRight,
                block14BorderTop: props.b14BTop,
                block14BorderBottom: props.b14BBottom,
                block14Border: props.b14Border,
                alignBlock14: props.alignBlock14 || 'center',
                justifyBlock14: props.justifyBlock14 || 'center',
                block14smdis: props.block14smdis || 'flex',
                block14mddis: props.block14mddis || 'flex',
                block15Direction: props.block15direction || 'column',
                block15: props.block15 || '1',
                block15BorderLeft: props.b15BLeft,
                block15BorderRight: props.b15BRight,
                block15BorderTop: props.b15BTop,
                block15BorderBottom: props.b15BBottom,
                block15Border: props.b15Border,
                alignBlock15: props.alignBlock15 || 'center',
                justifyBlock15: props.justifyBlock15 || 'center',
                block15smdis: props.block15smdis || 'flex',
                block15mddis: props.block15mddis || 'flex',
                block16Direction: props.block16direction || 'column',
                block16: props.block16 || '1',
                block16BorderLeft: props.b16BLeft,
                block16BorderRight: props.b16BRight,
                block16BorderTop: props.b16BTop,
                block16BorderBottom: props.b16BBottom,
                block16Border: props.b16Border,
                alignBlock16: props.alignBlock16 || 'center',
                justifyBlock16: props.justifyBlock16 || 'center',
                block16smdis: props.block16smdis || 'flex',
                block16mddis: props.block16mddis || 'flex',
                block17Direction: props.block17direction || 'column',
                block17: props.block17 || '1',
                block17BorderLeft: props.b17BLeft,
                block17BorderRight: props.b17BRight,
                block17BorderTop: props.b17BTop,
                block17BorderBottom: props.b17BBottom,
                block17Border: props.b17Border,
                alignBlock17: props.alignBlock17 || 'center',
                justifyBlock17: props.justifyBlock17 || 'center',
                block17smdis: props.block17smdis || 'flex',
                block17mddis: props.block17mddis || 'flex',
                block18Direction: props.block18direction || 'column',
                block18: props.block18 || '1',
                block18BorderLeft: props.b18BLeft,
                block18BorderRight: props.b18BRight,
                block18BorderTop: props.b18BTop,
                block18BorderBottom: props.b18BBottom,
                block18Border: props.b18Border,
                alignBlock18: props.alignBlock18 || 'center',
                justifyBlock18: props.justifyBlock18 || 'center',
                block18smdis: props.block18smdis || 'flex',
                block18mddis: props.block18mddis || 'flex',
                block19Direction: props.block19direction || 'column',
                block19: props.block19 || '1',
                block19BorderLeft: props.b19BLeft,
                block19BorderRight: props.b19BRight,
                block19BorderTop: props.b19BTop,
                block19BorderBottom: props.b19BBottom,
                block19Border: props.b19Border,
                alignBlock19: props.alignBlock19 || 'center',
                justifyBlock19: props.justifyBlock19 || 'center',
                block19smdis: props.block19smdis || 'flex',
                block19mddis: props.block19mddis || 'flex',
                block20Direction: props.block20direction || 'column',
                block20: props.block20 || '1',
                block20BorderLeft: props.b20BLeft,
                block20BorderRight: props.b20BRight,
                block20BorderTop: props.b20BTop,
                block20BorderBottom: props.b20BBottom,
                block20Border: props.b20Border,
                alignBlock20: props.alignBlock20 || 'center',
                justifyBlock20: props.justifyBlock20 || 'center',
                block20smdis: props.block20smdis || 'flex',
                block20mddis: props.block20mddis || 'flex',
            };
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
            });
            block1styles = StyleSheet.create({
                block1styles: {
                    display: 'flex',
                    flex: blocks.block1 || this.state.block1,
                    flexDirection: blocks.block1Direction,
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
                }
            });
            block2styles = StyleSheet.create({
                block2styles: {
                    display: 'flex',
                    flex: blocks.block2,
                    flexDirection: blocks.block2Direction,
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
                }
            });
            block3styles = StyleSheet.create({
                block3styles: {
                    display: 'flex',
                    flex: blocks.block3,
                    flexDirection: blocks.block3Direction,
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
                }
            });
            block4styles = StyleSheet.create({
                block4styles: {
                    display: 'flex',
                    flex: blocks.block4,
                    flexDirection: blocks.block4Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock4,
                    borderLeft: blocks.block4BorderLeft,
                    borderRight: blocks.block4BorderRight,
                    borderTop: blocks.block4BorderTop,
                    borderBottom: blocks.block4BorderBottom,
                    border: blocks.b4Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock4,
                },
                '@media screen and (max-width: 440px)': {
                    block4styles: {
                        display: blocks.block4smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block4styles: {
                        display: blocks.block4mddis,
                    }
                }
            });
            block5styles = StyleSheet.create({
                block5styles: {
                    display: 'flex',
                    flex: blocks.block5,
                    flexDirection: blocks.block5Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock5,
                    borderLeft: blocks.block5BorderLeft,
                    borderRight: blocks.block5BorderRight,
                    borderTop: blocks.block5BorderTop,
                    borderBottom: blocks.block5BorderBottom,
                    border: blocks.b5Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock5,
                },
                '@media screen and (max-width: 440px)': {
                    block5styles: {
                        display: blocks.block5smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block5styles: {
                        display: blocks.block5mddis,
                    }
                }

            });
            block6styles = StyleSheet.create({
                block6styles: {
                    display: 'flex',
                    flex: blocks.block6,
                    flexDirection: blocks.block6Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock6,
                    borderLeft: blocks.block6BorderLeft,
                    borderRight: blocks.block6BorderRight,
                    borderTop: blocks.block6BorderTop,
                    borderBottom: blocks.block6BorderBottom,
                    border: blocks.b6Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock6,
                },
                '@media screen and (max-width: 440px)': {
                    block6styles: {
                        display: blocks.block6smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block6styles: {
                        display: blocks.block6mddis,
                    }
                }

            });
            block7styles = StyleSheet.create({
                block7styles: {
                    display: 'flex',
                    flex: blocks.block7,
                    flexDirection: blocks.block7Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock7,
                    borderLeft: blocks.block7BorderLeft,
                    borderRight: blocks.block7BorderRight,
                    borderTop: blocks.block7BorderTop,
                    borderBottom: blocks.block7BorderBottom,
                    border: blocks.b7Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock7,
                },
                '@media screen and (max-width: 440px)': {
                    block7styles: {
                        display: blocks.block7smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block7styles: {
                        display: blocks.block7mddis,
                    }
                }
            });
            block8styles = StyleSheet.create({
                block8styles: {
                    display: 'flex',
                    flex: blocks.block8,
                    flexDirection: blocks.block8Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock8,
                    borderLeft: blocks.block8BorderLeft,
                    borderRight: blocks.block8BorderRight,
                    borderTop: blocks.block8BorderTop,
                    borderBottom: blocks.block8BorderBottom,
                    border: blocks.b8Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock8,
                },
                '@media screen and (max-width: 440px)': {
                    block8styles: {
                        display: blocks.block8smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block8styles: {
                        display: blocks.block8mddis,
                    }
                }
            });
            block9styles = StyleSheet.create({
                block9styles: {
                    display: 'flex',
                    flex: blocks.block9,
                    flexDirection: blocks.block9Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock9,
                    borderLeft: blocks.block9BorderLeft,
                    borderRight: blocks.block9BorderRight,
                    borderTop: blocks.block9BorderTop,
                    borderBottom: blocks.block9BorderBottom,
                    border: blocks.b9Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock9,
                },
                '@media screen and (max-width: 440px)': {
                    block9styles: {
                        display: blocks.block9smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block9styles: {
                        display: blocks.block9mddis,
                    }
                }
            });
            block10styles = StyleSheet.create({
                block10styles: {
                    display: 'flex',
                    flex: blocks.block10,
                    flexDirection: blocks.block10Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock10,
                    borderLeft: blocks.block10BorderLeft,
                    borderRight: blocks.block10BorderRight,
                    borderTop: blocks.block10BorderTop,
                    borderBottom: blocks.block10BorderBottom,
                    border: blocks.b10Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock10,
                },
                '@media screen and (max-width: 440px)': {
                    block10styles: {
                        display: blocks.block10smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block10styles: {
                        display: blocks.block10mddis,
                    }
                }
            });
            block11styles = StyleSheet.create({
                block11styles: {
                    display: 'flex',
                    flex: blocks.block11,
                    flexDirection: blocks.block11Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock11,
                    borderLeft: blocks.block11BorderLeft,
                    borderRight: blocks.block11BorderRight,
                    borderTop: blocks.block11BorderTop,
                    borderBottom: blocks.block11BorderBottom,
                    border: blocks.b11Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock11,
                },
                '@media screen and (max-width: 440px)': {
                    block11styles: {
                        display: blocks.block11smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block11styles: {
                        display: blocks.block11mddis,
                    }
                }
            });
            block12styles = StyleSheet.create({
                block12styles: {
                    display: 'flex',
                    flex: blocks.block12,
                    flexDirection: blocks.block12Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock12,
                    borderLeft: blocks.block12BorderLeft,
                    borderRight: blocks.block12BorderRight,
                    borderTop: blocks.block12BorderTop,
                    borderBottom: blocks.block12BorderBottom,
                    border: blocks.b12Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock12,
                },
                '@media screen and (max-width: 440px)': {
                    block12styles: {
                        display: blocks.block12smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block12styles: {
                        display: blocks.block12mddis,
                    }
                }
            });
            block13styles = StyleSheet.create({
                block13styles: {
                    display: 'flex',
                    flex: blocks.block13,
                    flexDirection: blocks.block13Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock13,
                    borderLeft: blocks.block13BorderLeft,
                    borderRight: blocks.block13BorderRight,
                    borderTop: blocks.block13BorderTop,
                    borderBottom: blocks.block13BorderBottom,
                    border: blocks.b13Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock13,
                },
                '@media screen and (max-width: 440px)': {
                    block13styles: {
                        display: blocks.block13smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block13styles: {
                        display: blocks.block13mddis,
                    }
                }
            });
            block14styles = StyleSheet.create({
                block14styles: {
                    display: 'flex',
                    flex: blocks.block14,
                    flexDirection: blocks.block14Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock14,
                    borderLeft: blocks.block14BorderLeft,
                    borderRight: blocks.block14BorderRight,
                    borderTop: blocks.block14BorderTop,
                    borderBottom: blocks.block14BorderBottom,
                    border: blocks.b14Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock14,
                },
                '@media screen and (max-width: 440px)': {
                    block14styles: {
                        display: blocks.block14smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block14styles: {
                        display: blocks.block14mddis,
                    }
                }
            });
            block15styles = StyleSheet.create({
                block15styles: {
                    display: 'flex',
                    flex: blocks.block15,
                    flexDirection: blocks.block15Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock15,
                    borderLeft: blocks.block15BorderLeft,
                    borderRight: blocks.block15BorderRight,
                    borderTop: blocks.block15BorderTop,
                    borderBottom: blocks.block15BorderBottom,
                    border: blocks.b15Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock15,
                },
                '@media screen and (max-width: 440px)': {
                    block15styles: {
                        display: blocks.block15smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block15styles: {
                        display: blocks.block15mddis,
                    }
                }
            });
            block16styles = StyleSheet.create({
                block16styles: {
                    display: 'flex',
                    flex: blocks.block16,
                    flexDirection: blocks.block16Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock16,
                    borderLeft: blocks.block16BorderLeft,
                    borderRight: blocks.block16BorderRight,
                    borderTop: blocks.block16BorderTop,
                    borderBottom: blocks.block16BorderBottom,
                    border: blocks.b16Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock16,
                },
                '@media screen and (max-width: 440px)': {
                    block16styles: {
                        display: blocks.block16smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block16styles: {
                        display: blocks.block16mddis,
                    }
                }
            });
            block17styles = StyleSheet.create({
                block17styles: {
                    display: 'flex',
                    flex: blocks.block17,
                    flexDirection: blocks.block17Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock17,
                    borderLeft: blocks.block17BorderLeft,
                    borderRight: blocks.block17BorderRight,
                    borderTop: blocks.block17BorderTop,
                    borderBottom: blocks.block17BorderBottom,
                    border: blocks.b17Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock17,
                },
                '@media screen and (max-width: 440px)': {
                    block17styles: {
                        display: blocks.block17smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block17styles: {
                        display: blocks.block17mddis,
                    }
                }
            });
            block18styles = StyleSheet.create({
                block18styles: {
                    display: 'flex',
                    flex: blocks.block18,
                    flexDirection: blocks.block18Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock18,
                    borderLeft: blocks.block18BorderLeft,
                    borderRight: blocks.block18BorderRight,
                    borderTop: blocks.block18BorderTop,
                    borderBottom: blocks.block18BorderBottom,
                    border: blocks.b18Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock18,
                },
                '@media screen and (max-width: 440px)': {
                    block18styles: {
                        display: blocks.block18smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block18styles: {
                        display: blocks.block18mddis,
                    }
                }
            });
            block19styles = StyleSheet.create({
                block19styles: {
                    display: 'flex',
                    flex: blocks.block19,
                    flexDirection: blocks.block19Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock19,
                    borderLeft: blocks.block19BorderLeft,
                    borderRight: blocks.block19BorderRight,
                    borderTop: blocks.block19BorderTop,
                    borderBottom: blocks.block19BorderBottom,
                    border: blocks.b19Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock19,
                },
                '@media screen and (max-width: 440px)': {
                    block19styles: {
                        display: blocks.block19smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block19styles: {
                        display: blocks.block19mddis,
                    }
                }
            });
            block20styles = StyleSheet.create({
                block20styles: {
                    display: 'flex',
                    flex: blocks.block20,
                    flexDirection: blocks.block20Direction,
                    flexWrap: 'wrap',
                    alignItems: blocks.alignBlock20,
                    borderLeft: blocks.block20BorderLeft,
                    borderRight: blocks.block20BorderRight,
                    borderTop: blocks.block20BorderTop,
                    borderBottom: blocks.block20BorderBottom,
                    border: blocks.b20Border,
                    margin: blocks.margin,
                    justifyContent: blocks.justifyBlock20,
                },
                '@media screen and (max-width: 440px)': {
                    block20styles: {
                        display: blocks.block20smdis,
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    block20styles: {
                        display: blocks.block20mddis,
                    }
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={block20styles.block20styles}>{CHILDS[19]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}</section>
            ]
        } else{
            styledHolder ='';
        }
        return this.setState({ childs: styledHolder, blocks })

    }
    //below is not done and will most likely not render correctly
    componentWillReceiveProps(newProps) {
        const props = this.props;
        let blocks, holderstyles, block1styles, block2styles = '';
        let styledHolder, styledChilds1, styledChilds2 = ''
        const CHILDS = React.Children.toArray(this.props.children)
        const num = CHILDS.length;
        if (num === 1) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
            });
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
                }
            });
            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if (num === 2) {
            blocks = {
                block1Direction: props.block1direction || 'column',
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
            };
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
            });
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
                }
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
                }

            });

            styledChilds1 = <div key={Math.random()} style={block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <section key={Math.random()} style={holderstyles.holderstyles}>{styledChilds1}{styledChilds2}</section>
            ]
        }else{
            styledHolder='';
        }

        return this.setState({ childs: styledHolder, blocks })
    }
    render() {
        return (
            <section>
                {this.state.childs}
            </section>
        )
    }
}
/* End of Container Component */