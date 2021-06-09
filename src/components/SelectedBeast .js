import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

class SelectedBeast  extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         show:false
    //     }
    // }
    // handleShow=()=>{
    //     this.setState({
    //         show:true
            
    //     })
       
    // }
    // handleClose=()=>{
    //     this.setState({
    //         show:false
    //     })
    // }
    render() {
       return(
        <div>
        {/* <Button variant="primary" onClick={this.handleShow}>
                 Launch demo modal
        </Button>
            */}
         <Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
            <Modal.Header  closeButton>
                 <Modal.Title>{this.props.beastTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <div className='modaldiv'>
                    <p>`{this.props.show} +10`</p>
                   <img src={this.props.beastUrl}/>
                   <p>{this.props.beastTitle}</p>
                   <p>{this.props.beastDescription}</p>
               </div>
            </Modal.Body>
            <Modal.Footer>
                 <Button variant="secondary" onClick={this.props.handleClose}>
                      Close
                </Button>
         
            </Modal.Footer>
         </Modal>
        </div>
       );
    }
}
export default SelectedBeast;
