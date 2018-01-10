import React, { Component } from 'react';
import './reset.css';

/* these are stupid broken right now */
/* Start of ecommerce blocks */
export default class StoreHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart:[],
            addid:props.addid,
        }
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    addToCart(product) {
        this.setState({
            shoppingCart: [...this.state.shoppingCart, product] 
        })
    }
    removeFromCart() {
        let newShoppingCart = this.state.shoppingCart
        newShoppingCart= newShoppingCart.splice(newShoppingCart.length-1, 1)
        this.setState({
            shoppingCart: newShoppingCart
        })
    }
    render() {
        const STOREHOLDER={
            display: 'none'
        }
        return (
            <section >
                <AddToCart product={this.state.addid} add={this.addToCart} />
                <RemoveFromCart remove={this.removeFromCart} />
                <Cart1 cart={this.state.shoppingCart} />
            </section>
        )
    }
}
export class AddToCart extends Component{
    constructor(props){
        super(props);
        this.state={
            product:props.product,
        }
    }
   
    render(props){
        return(
            <button onClick={()=> props.add(this.state.product)}>Add</button>
        )
    }
}
export class RemoveFromCart extends Component{
    constructor(props){
        super(props);
        this.state={
            id:props.id,
        }
    }
    render(){
        return(
            <button onClick={()=>this.props.remove()}>Remove</button>
        )
    }
}
/* Start of Cart Blocks */
/* Start of Cart 1 */
export class Cart1 extends Component {
    constructor(props){
        super(props);
        this.state={
            cart:props.cart
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            cart: nextProps.cart
        })
    }
    render() {
        //keneddy denim
        return (
            <div>
                    {this.state.cart}
            </div>
        )
    }
}
/* End of Cart 1 */
/* Start of Cart 2 */
export class Cart2 extends Component {
    render() {
        //wear kenedy/nordstrom
        return (
            <div>
            </div>
        )
    }
}
/* End of Cart 2 */
/* Start of Cart 3 */
export class Cart3 extends Component {
    render() {
        //khols
        return (
            <div>
            </div>
        )
    }
}
/* End of Cart 3 */
/* Start of Cart 4 */
export class Cart4 extends Component {
    render() {
        //mens warehouse
        return (
            <div>
            </div>
        )
    }
}
/* End of Cart 4 */
/* End of cart blocks */
/* Start of feature blocks */
export class FeatureProduct1 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}


/* End of feature blocks */
/* Start of display blocks */
/* Start of product display 1 */
//1 is mens warehouse
export class ProductDisplay1 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}
/* End of product display 1 */
/* Start of product display 2 */
//2 is khols
export class ProductDisplay2 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

/* End of product display 2 */
/* Start of product display 3 */
//3 is kennedy denim
export class ProductDisplay3 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

/* End of product display 3 */
/* Start of product display 4 */
//nordstrom and wear kennedy
export class ProductDisplay4 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

/* End of product display 4 */
/* End of thumbnail blocks */
/* start of thumbnail blocks */
/* Start of product thumbnail block 1 */
//kenedy denim & mens warehouse * nordstrom
export class ProductThumbnail1 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}
/* end of product thumbnail block1 */
/* start of product thumbnail block2 */
//wearkennedy
export class ProductThumbnail2 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}
/* End fo product thumbnail block2 */
/* Start of product thumbnail block 3*/
//khols
export class ProductThumbnail3 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

/* end of product thumbnail block 3 */
/* End of thumbnail blocks */
/* Start of product sliders */
export class ProductSlider1 extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}
/* End of product sliders */
/* End of ecommerce blocks */