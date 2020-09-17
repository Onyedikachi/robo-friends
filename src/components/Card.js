import React, {Component} from 'react';

class Card extends Component {
    render(){
        const url = `https://robohash.org/${this.props.id}?200x200`;
        return (
            <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
                <img alt='robots' src = {url}/>
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );

    }
}

export default Card;