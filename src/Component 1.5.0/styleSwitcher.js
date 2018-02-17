export default function (num) {
    switch (num) {
        case 2:
            return (
                [
                    {
                        holderstyles: {
                            width: '100%',
                            display: 'this.state.display',
                            flexDirection: 'this.state.direction',
                            flexWrap: 'wrap',
                            background: 'this.state.text',
                            justifyContent: 'this.state.alignBlocks',
                            overflow: 'hidden',
                            borderLeft: 'this.state.borderLeft',
                            borderRight: 'this.state.borderRight',
                            borderTop: 'this.state.borderTop',
                            borderBottom: 'this.state.borderBottom',
                            border: 'this.state.border',
                        },
                        '@media (max-width: 440px)': {
                            holderstyles: {
                                display: 'this.state.smdis',
                                flexDirection: 'this.state.smflexDir'
                            }
                        },
                        '@media screen and (min-width: 441px) and (max-width: 760px)': {
                            holderstyles: {
                                display: 'this.state.mddis',
                                flexDirection: 'this.state.mdflexDir'
                            }
                        }
                    },
                    {
                        block1styles: {
                            display: 'flex',
                            flex: 'this.state.blocks.block1',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            alignItems: 'this.state.alignBlock1',
                            borderLeft: 'this.state.block1BorderLeft',
                            borderRight: 'this.state.block1BorderRight',
                            borderTop: 'this.state.block1BorderTop',
                            borderBottom: 'this.state.block1BorderBottom',
                            border: 'this.state.b1Border',
                            margin: 'this.state.margin',
                            justifyContent: 'this.state.justifyBlock1',
                            fontSize: 'this.state.blocks.fontSize1'
                        },
                        '@media screen and (maxWidth: 440px)': {
                            block1styles: {
                                display: 'this.state.block1smdis',
                            }
                        },
                        '@media screen and (minWidth: 441px) and (maxWidth: 760px)': {
                            block1styles: {
                                display: 'this.state.block1mddis',
                            }
                        }
                    },
                    {
                        block2styles: {
                            display: 'flex',
                            flex: 'this.state.block2',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            alignItems: 'this.state.alignBlock2',
                            borderLeft: 'this.state.block2BorderLeft',
                            borderRight: 'this.state.block2BorderRight',
                            borderTop: 'this.state.block2BorderTop',
                            borderBottom: 'this.state.block2BorderBottom',
                            border: 'this.state.b2Border',
                            margin: 'this.state.margin',
                            justifyContent: 'this.state.justifyBlock2',
                            fontSize: '30px'
                        },
                        '@media screen and (maxWidth: 440px)': {
                            block1styles: {
                                display: 'this.state.block1smdis',
                            }
                        },
                        '@media screen and (minWidth: 441px) and (maxWidth: 760px)': {
                            block1styles: {
                                display: 'this.state.block1mddis',
                            }
                        }
                    }
                ]
            )

        default:
            return {
                holderstyles: {
                    width: '100%',
                    display: 'this.state.display',
                    flexDirection: 'this.state.direction',
                    flexWrap: 'wrap',
                    background: 'this.state.text',
                    justifyContent: 'this.state.alignBlocks',
                    overflow: 'hidden',
                    borderLeft: 'this.state.borderLeft',
                    borderRight: 'this.state.borderRight',
                    borderTop: 'this.state.borderTop',
                    borderBottom: 'this.state.borderBottom',
                    border: 'this.state.border',
                },
                '@media (max-width: 440px)': {
                    holderstyles: {
                        display: 'this.state.smdis',
                        flexDirection: 'this.state.smflexDir'
                    }
                },
                '@media screen and (min-width: 441px) and (max-width: 760px)': {
                    holderstyles: {
                        display: 'this.state.mddis',
                        flexDirection: 'this.state.mdflexDir'
                    }
                }
            }
    }
}