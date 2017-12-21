import React, { Component } from 'react';
import '../../Styles/styles.css';

export default class Block1 extends Component {

    render() {
        return (
            <section>
                <div>
                    {this.props.children || <div></div>}
                </div>
            </section>
        )
    }
}