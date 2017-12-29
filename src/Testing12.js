import React, { Component } from 'react';

import TestingContainer1, { TestingHolder1, TestingBlock1 } from './Component/Testing12';

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
            </section>
        )
    }
}