import React from 'react';

class HornedBeasts extends React.Component {
    render(){
        return (
            <div class='hornesdiv'>
                
                <h2>{this.props.beastTitle}</h2>
                <img src={this.props.beastUrl} alt=""/>
                <p>{this.props.beastDescription }</p>
                
            </div>
        )

        
    }
    
}

export default HornedBeasts;