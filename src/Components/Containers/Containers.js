import React, { Component } from 'react';
import '../../Styles/styles.css';

//export Container1
export default class Container1 extends Component {
    render(){
        return (
            <section className='container1'>
                <div className='container1-block'>
                    {this.props.children || <div></div>}
                </div>
            </section>
        )
    }
}

//export Container2
export function Container2() {

}


//export Container3
export function Container3() {

}

//export Container4
export function Container4() {

}

//export Container5
export function Container5() {

}