import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const HR = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    

return(
    <div>
<div class="container-fluid project pt-5 pb-5">
    <div class="container">
        <div class="d-flex justify-content-center ppb-5"><span class="fs-1 fw-bold">MY HR</span></div>
        <div class="row pt-5 pb-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-around">
        <div class="card col m-4 pt-4">
            <div class="row justify-content-center pb-3"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg></div>
                        <Button class="bg-none border-0" onClick={handleShow}>Salary</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title class="fs-5 fw-bold">Salary Slip Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div class="text-center"><p class="fs-6 fw-bold">Month of January</p></div>
                            <p class="fw-semibold">No.of.Working Days:</p>
                            <p class="fw-semibold">No.of.LOP's:</p>
                            <hr></hr>
                            <div class="text-end fw-semibold"><p>Rs:</p></div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                         </Modal>
            </div>
            <div class="card col m-4 pt-4">
            <div class="row justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg></div>
                        <Button class="bg-none border-0"  onClick={handleShow}>Salary</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title class="fs-5 fw-bold">Salary Slip Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div class="text-center"><p class="fs-6 fw-bold">Month of January</p></div>
                            <p class="fw-semibold">No.of.Working Days:</p>
                            <p class="fw-semibold">No.of.LOP's:</p>
                            <hr></hr>
                            <div class="text-end fw-semibold"><p>Rs:</p></div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                         </Modal>
            </div>
            <div class="card col m-4 pt-4">
            <div class="row justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg></div>
                        <Button class="bg-none border-0"  onClick={handleShow}>Salary</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title class="fs-5 fw-bold">Salary Slip Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div class="text-center"><p class="fs-6 fw-bold">Month of January</p></div>
                            <p class="fw-semibold">No.of.Working Days:</p>
                            <p class="fw-semibold">No.of.LOP's:</p>
                            <hr></hr>
                            <div class="text-end fw-semibold"><p>Rs:</p></div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                         </Modal>
            </div>
            <div class="card col m-4 pt-4">
            <div class="row justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg></div>
                        <Button class="bg-none border-0"  onClick={handleShow}>Salary</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title class="fs-5 fw-bold">Salary Slip Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div class="text-center"><p class="fs-6 fw-bold">Month of January</p></div>
                            <p class="fw-semibold">No.of.Working Days:</p>
                            <p class="fw-semibold">No.of.LOP's:</p>
                            <hr></hr>
                            <div class="text-end fw-semibold"><p>Rs:</p></div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                         </Modal>
            </div>
            <div class="card col m-4 pt-4">
            <div class="row justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg></div>
                        <Button class="bg-none border-0"  onClick={handleShow}>Salary</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title class="fs-5 fw-bold">Salary Slip Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div class="text-center"><p class="fs-6 fw-bold">Month of January</p></div>
                            <p class="fw-semibold">No.of.Working Days:</p>
                            <p class="fw-semibold">No.of.LOP's:</p>
                            <hr></hr>
                            <div class="text-end fw-semibold"><p>Rs:</p></div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                         </Modal>
            </div>
            <div class="card col m-4 pt-4">
            <div class="row justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                </svg></div>
                        <Button class="bg-none border-0"  onClick={handleShow}>Salary</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title class="fs-5 fw-bold">Salary Slip Details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div class="text-center"><p class="fs-6 fw-bold">Month of January</p></div>
                            <p class="fw-semibold">No.of.Working Days:</p>
                            <p class="fw-semibold">No.of.LOP's:</p>
                            <hr></hr>
                            <div class="text-end fw-semibold"><p>Rs:</p></div>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                         </Modal>
            </div>
        </div>
        </div>
        </div>
        </div>
  
)    
}
export default HR;