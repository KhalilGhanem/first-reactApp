import React from 'react';
import HornedBeasts from './HornedBeasts';
import Hdata from './data.json';
import {Form, Button} from 'react-bootstrap/';


class main extends React.Component {
    constructor(props){
        super(props)
        this.state={
          numberofHornes:`0`,
        }
    }

  //  submitForm= (event)=>{
  //   event.preventDefault();

  //  }
   updateHornes = (event) => {
    this.setState({
      numberofHornes: event.target.value
    })
  }

    loga= ()=>{
      return console.log(this.state.numberofHornes);
    }

   
  render(){
      
    return (
      <main>
      
        <section>
        <Form > 
        <Form.Group controlId="exampleForm.SelectCustomHtmlSize">
                        <Form.Label>How many Horns </Form.Label>
                        <Form.Control as="select" custom name='hornsnumber' onChange={this.updateHornes}>
                            <option value='0'>All</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                            <option value='100'>Wow</option>
                        </Form.Control>
                    </Form.Group>
         </Form>
         <p>{this.state.numberofHornes}any</p>
         </section>
        
          {Hdata.map((item)=>{
            if(this.state.numberofHornes==0){
              return(
                  
                  <div className="topdiv" >

                      <HornedBeasts
                         beastTitle={item.title}
                         beastUrl={item.image_url}
                         beastDescription={item.description}
                        //  handleShow={this.handleShow}
                      />
                  </div>
                 
              )
            }else if(item.horns==this.state.numberofHornes && this.state.numberofHornes ==1){
              return(
                <HornedBeasts
                         beastTitle={item.title}
                         beastUrl={item.image_url}
                         beastDescription={item.description}
                      />
              )
            }else if(item.horns==this.state.numberofHornes && this.state.numberofHornes ==2){
              return(
                <HornedBeasts
                         beastTitle={item.title}
                         beastUrl={item.image_url}
                         beastDescription={item.description}
                      />
              )
            }else if(item.horns==this.state.numberofHornes && this.state.numberofHornes ==3){
              return(
                <HornedBeasts
                         beastTitle={item.title}
                         beastUrl={item.image_url}
                         beastDescription={item.description}
                      />
              )
            }else if(item.horns==this.state.numberofHornes && this.state.numberofHornes ==100){
              return(
                <HornedBeasts
                         beastTitle={item.title}
                         beastUrl={item.image_url}
                         beastDescription={item.description}
                      />
              )
            }


          })
          
          
          }

      </main>
    );

        
  }
    
}

export default main;
