import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          numbofPets :0
      }
     }
    incrementNumOfPets= () =>{
        this.setState({
            numbofPets: this.state.numbofPets+1
        })
    } 
  render(){
    return (
      <div className='hornesdiv'>
                
        {/* <h2>{this.props.beastTitle}</h2>
        <img src={this.props.beastUrl} alt=""/>
        <p>{this.props.beastDescription }</p> */}
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" onClick={this.incrementNumOfPets} src={this.props.beastUrl} alt={this.props.alt}  />
        < Card.Body>
            <Card.Title>{this.props.beastTitle}</Card.Title>
            <Card.Text>
                <p>❤= {this.state.numbofPets}</p>
                
                <p>{this.props.beastDescription }</p>
                
            </Card.Text>
               
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
                
      </div>
    );

        
  }
    
}

export default HornedBeasts;
