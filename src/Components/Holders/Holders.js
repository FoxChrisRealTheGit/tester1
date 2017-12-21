import React, {Component} from 'react';
import '../../Styles/styles.css';

export default class Holder1 extends Component{

    render(){
        const children = React.Children.toArray(this.props.children)
        return(
            <section className ='holder1'>
                <div className = 'holder1-block1'>
                    {children[0] || <div></div>}
                    </div>
                    <div className = 'holder1-block2'>
                    {children[1] || <div></div>}
                    </div>
                </section>
        )
    }
}