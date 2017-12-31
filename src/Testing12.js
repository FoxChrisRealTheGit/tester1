import React, { Component } from 'react';

import TestingContainer1, { TestingHolder1, TestingBlock1 } from './Components 0.5.0/Testing12';

import { Holder2, Holder4 } from './Components 1.0.0/Holders';

export default class Testing12 extends Component {

    render() {
        return (
            <section>
                <TestingContainer1>
                    <TestingHolder1
                        block1="2">
                        <TestingBlock1 />
                        <TestingHolder1
                            alignBlock1="flex-start"
                            alignBlock2="flex-end">
                            <TestingBlock1 />
                            <TestingBlock1 />
                        </TestingHolder1>
                    </TestingHolder1>
                </TestingContainer1>
                <TestingContainer1>
                    <TestingHolder1 >
                        <TestingBlock1 />
                        <TestingBlock1 />
                    </TestingHolder1>
                </TestingContainer1>

                <TestingContainer1>
                    <Holder2
                        alignBlock1="flex-start"
                        alignBlock2="flex-end"
                        alignBlock3="flex-start">
                        <TestingBlock1 />
                        <TestingBlock1 />
                        <TestingBlock1 />
                    </Holder2>
                </TestingContainer1>
                <TestingContainer1>
                    <Holder2
                        block1="3">
                        <TestingBlock1 />
                        <TestingBlock1 />
                        <Holder4>
                            <TestingBlock1 />
                            <TestingBlock1 />
                        </Holder4>
                    </Holder2>
                </TestingContainer1>
            </section>
        )
    }
}