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

export class Jumbotron1 extends Component{

    render(){
        const children = React.Children.toArray(this.props.children)
        return(
            <section className='jumbotron1'>
                <img className='jumbotron1-img' src={children[0]} alt={children[1]}></img>
            </section>
        )
    }
}

export class GiantRedBlock extends Component{

    render(){
        return(
            <section>
                <div className='giantRedBlock'></div>
            </section>
        )
    }
}
