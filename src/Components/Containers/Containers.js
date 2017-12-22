import React, { Component } from 'react';
import '../../Styles/styles.css';

//export Container1 basic one block container
export default class Container1 extends Component {
    render() {
        return (
            <section className='container1'>
                <div className='container1-block'>
                    {this.props.children || <div></div>}
                </div>
            </section>
        )
    }
}

//export Container2 which is a test case for a header navbar
export class Container2 extends Component {
    render() {
        const children = React.Children.toArray(this.props.children)
        const navBar = children.map((x, i)=> {
            return <li key={i}>{x}</li>
        })
        return (
            <header className="container2">
                <ul className="container2-navbar">
                    {navBar}
                </ul>
            </header>
        )
    }
}


//export Container3 for footer case
export class Container3 extends Component {
    render() {
        
        return (
            <footer classNAme="container3">
                <section className="container3-menu">
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </section>
                <div className="container3-copyright-line">
                    
                </div>
            </footer>
        )
    }
}

//export Container4
export function Container4() {

}

//export Container5
export function Container5() {

}