import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Punchlist = () =>{

return(
    <>
    <div class="container-fluid project pt-5 pb-5">
    <div class="container">
        <div class="row text-center">
            <span className="fs-1 fw-bold pb-3">Punchlist</span>
            <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>Day</th>
          <th>Name</th>
          <th>CheckIn</th>
          <th>CheckOut</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
        </div>
    </div>
    </div>  
    </>
)    
}
export default Punchlist;