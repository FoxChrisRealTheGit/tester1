import React, { Component } from 'react';
import './reset.css';
import './SuperStyleSheet.css';

/* Social Media Containers */
/* 
Use and Description
*/

/* Start of Twitter containers */
/* Start of Twitter 1 */
export default class TwitterFeed1 extends Component {
    componentDidMount(){
        //<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    }
    
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <div>
            
                <a className="twitter-timeline"
                    data-width="220"
                    data-tweet-limit="2"
                    href={`https://twitter.com/${childs[0]}?ref_src=twsrc%5Etfw`}>
                    Tweets by {childs[0]}
                </a>
                
            </div>
        )
    }
}
/* End of Twitter 1 */
/* Start of Twitter 2 */
export class TwitterFeed2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <div>
                <a className="twitter-timeline"
                    data-width="220"
                    data-tweet-limit="2"
                    href={`https://twitter.com/${childs[0]}?ref_src=twsrc%5Etfw`}>
                    Tweets by {childs[0]}
                </a>
            </div>
        )
    }
}
/* End of Twitter 2 */
/* Start of Twitter 3 */
export class TwitterFeed3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <div>
                <a className="twitter-timeline"
                    data-width="220"
                    data-tweet-limit="2"
                    href={`https://twitter.com/${childs[0]}?ref_src=twsrc%5Etfw`}>
                    Tweets by {childs[0]}
                </a>
            </div>
        )
    }
}
/* End of Twitter 3 */
/* End of Twitter Containers */
/* Start of Instagram Containers */


/* End of Instagram Containers */
/* Start of Facebook Containers */
/* Start of Facebook 1 */
export class FacebookFeed1 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <div className="fb-page"
                data-href={`https://facebook.com/${childs[0]}`}
                data-width="380"
                data-hide-cover="false"
                data-show-facepile="false"></div>
        )
    }
}
/* End of Facebook 1 */
/* Start of Facebook 2 */
export class FacebookFeed2 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <div className="fb-page"
                data-tabs="timeline,events,messages"
                data-href={`https://facebook.com/${childs[0]}`}
                data-width="380"
                data-hide-cover="false"></div>
        )
    }
}
/* End of Facebook 2 */
/* Start of Facebook 3 */
export class FacebookFeed3 extends Component {
    render() {
        const childs = React.Children.toArray(this.props.children)
        return (
            <div className="fb-page"
                data-href={`https://facebook.com/${childs[0]}`}
                data-tabs="timeline"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true">
                <blockquote cite={`https://facebook.com/${childs[0]}`}
                    className="fb-xfbml-parse-ignore">
                    <a href={`https://facebook.com/${childs[0]}`}>
                        {childs[0]}
                    </a>
                </blockquote>
            </div>
        )
    }
}
/* End of Facebook 3 */

/* End of Facebook Containers */

