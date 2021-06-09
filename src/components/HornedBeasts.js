import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast ';


class HornedBeasts extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          numbofPets :0,
          show:false,
      }
    }
     
      handleShow=()=>{
        this.setState({
            show:true
        })
        
    }
    handleClose=()=>{
          this.setState({
              show:false
          })
      }
     
    incrementNumOfPets= () =>{
        this.setState({
            numbofPets: this.state.numbofPets+1
        })
      
    } 
  render(){
    return (
      <div className='hornesdiv'>
                
        
        <Card style={{ width: '18rem' }} onClick={this.handleShow}>
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
        <SelectedBeast 
                        beastTitle={this.props.beastTitle}
                        beastUrl={this.props.beastUrl}
                        beastDescription={this.props.beastDescription}
                        handleClose={this.handleClose}
                        show={this.state.show}
                      />
      </div>
    );

        
  }
    
}

export default HornedBeasts;
