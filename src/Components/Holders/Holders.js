import React, {Component} from 'react';

export default class Holder1 extends Component{

    render(){
        return(
            <section>
                <div>
                    {this.props.children[0] || <div></div>}
                    </div>
                    <div>
                    {this.props.children[1] || <div></div>}
                    </div>
                </section>
        )
    }
}