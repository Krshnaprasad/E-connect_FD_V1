import {React,useState} from 'react'
import Card from 'react-bootstrap/Card';
import { Modal, Button } from 'react-bootstrap';

const Profile = () =>{
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);

  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);

  const sub = () =>{
    alert("Submitted Successfully")
  }

  const [User, setUserData]= useState({
   
    id:'',
    name:'',
    email: '',
    designation:'',
    phoneno:'',
    password:'',

    })
    
    const handleChange = (event) => {
        const{name, value} = event.target;
        setUserData({...User, [name]:value})
        console.log(name,value);
       
    
    }

    const handleSubmit = (event) => {
        event.preventDefault()
       
        const UserData={
            
            id:User.id,
            name:User.name,
            email:User.email,
            designation:User.designation,
            phoneno:User.phoneno,
            password:User.password,

        }
        fetch(`http://localhost:8080/user/update/${User.id}`,{
            method:"post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(UserData),
            
        })
        .then((res) =>{
                console.log(res);
        })
        .then((data)=>{
            
        })
    console.log(UserData);
    }
return(
    <>
    <div className="container-fluid mincard pt-5">
        <div className="container">
            <div className="row justify-content-around">
                <div className='text-center fs-1 fw-bold pb-2 text-white-50'><p>MY PROFILE</p></div>
                <div className="col-md-3 pb-5 col-sm-5 col-12">
                <Card>
                        <Card.Img variant="top" src="https://cdn.dribbble.com/users/1138853/screenshots/4841628/28_34_gif.gif" />
                        <Card.Body>
                          <Card.Title className='text-center fw-bold'>Basic Details</Card.Title>
                          <Card.Text className='small algn'>
                          Ensure that the platform you use is secure and legitimate to protect your sensitive information from unauthorized access or potential misuse.
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-center'>
                        <button className='bg-primary border-0 pe-5 ps-5 p-1 text-white' onClick={handleShow} variant="primary">Edit</button>
                                      <Modal show={show} onHide={handleShow} size='sm'>
                                  <Modal.Header>
                                  <Modal.Title className='fw-bold'>Basic Details</Modal.Title>
                                  </Modal.Header>
                                  <div className='d-grid justify-content-center'>
                                  <Modal.Body className='d-grid justify-center' style={{width:'18em'}}>
                                        <label>Id:</label>
                                          <input type="text" name="id"  value={User.id} onChange={handleChange}></input>

                                          <label>Name:</label>
                                          <input type="text" name="name"  value={User.name} onChange={handleChange}></input>
                                          <label>Email:</label>
                                          <input type="text" name="email"  value={User.email} onChange={handleChange}></input>
                                          <label>Mobile No:</label>
                                          <input type="text" name="phoneno"  value={User.phoneno} onChange={handleChange}></input>
                                          <label>Designation:</label>
                                          <input type="text" name="designation"  value={User.designation} onChange={handleChange}></input>
                                          <label>Reset Password:</label>
                                          <input type="text" name="password"  value={User.password} onChange={handleChange}></input>
                                  </Modal.Body></div>
                                  <Modal.Footer>
                                  <Button className='bg-primary p-2 rounded-2 border-0 text-white' onClick={handleSubmit}>
                                      Submit
                                  </Button>
                                  <Button className='bg-primary p-2 rounded-2 border-0 text-white' onClick={handleClose}>
                                      Close
                                  </Button>
                                  </Modal.Footer>
                              </Modal>
                        </Card.Footer>
                      </Card>
                </div>
                <div className="col-md-3 pb-5 col-sm-6 col-12">
                <Card>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/19/97/f3/1997f3da28e8d29289097871f45b04fd.gif" />
                        <Card.Body>
                          <Card.Title className='text-center fw-bold'>Personal Details</Card.Title>
                          <Card.Text className='small algn'>
                          Ensure that the platform you use is secure and legitimate to protect your sensitive information from unauthorized access or potential misuse.
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-center'>
                        <button className='bg-primary border-0 pe-5 ps-5 p-1 text-white' onClick={handleShow1} variant="primary">Edit</button>
                                      <Modal show={show1} onHide={handleShow1} size='sm'>
                                  <Modal.Header>
                                  <Modal.Title className='fw-bold'>Personal Details</Modal.Title>
                                  </Modal.Header>
                                  <div className='d-grid justify-content-center'>
                                  <Modal.Body className='d-grid justify-center' style={{width:'18em'}}>
                                          <label>Address:</label>
                                          <input type="text"></input>
                                          <label>Location:</label>
                                          <input type="text"></input>
                                          <label>City:</label>
                                          <input type="text"></input>
                                          <label>State:</label>
                                          <input type="text"></input>
                                          <label>Pincode:</label>
                                          <input type="text"></input>
                                  </Modal.Body></div>
                                  <Modal.Footer>
                                  <Button className='bg-primary p-2 rounded-2 border-0 text-white' onClick={sub}>
                                      Submit
                                  </Button>
                                  <Button className='bg-primary p-2 rounded-2 border-0 text-white' onClick={handleClose1}>
                                      Close
                                  </Button>
                                  </Modal.Footer>
                              </Modal>                        
                        </Card.Footer>
                      </Card>
                </div>
                <div className="col-md-3 pb-5 col-sm-6 col-12">
                <Card>
                        <Card.Img variant="top" src="https://cdn.dribbble.com/users/20368/screenshots/3953268/api_anim.gif" />
                        <Card.Body>
                          <Card.Title className='text-center fw-bold'>Bank Details</Card.Title>
                          <Card.Text className='small algn'>
                          Ensure that the platform you use is secure and legitimate to protect your sensitive information from unauthorized access or potential misuse.
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-center'>
                        <button className='bg-primary border-0 pe-5 ps-5 p-1 text-white' onClick={handleShow2} variant="primary">Edit</button>
                                      <Modal show={show2} onHide={handleShow2} size='sm'>
                                  <Modal.Header>
                                  <Modal.Title className='fw-bold'>Bank Details</Modal.Title>
                                  </Modal.Header>
                                  <div className='d-grid justify-content-center'>
                                  <Modal.Body className='d-grid justify-center' style={{width:'18em'}}>
                                          <label>Bank:</label>
                                          <input type="text"></input>
                                          <label>Account No:</label>
                                          <input type="text"></input>
                                          <label>IFSC Code:</label>
                                          <input type="text"></input>
                                          <label>Branch:</label>
                                          <input type="text"></input>
                                          <label>PF:</label>
                                          <input type="text"></input>
                                          <label>ESI:</label>
                                          <input type="text"></input>
                                  </Modal.Body></div>
                                  <Modal.Footer>
                                  <Button className='bg-primary p-2 rounded-2 border-0 text-white' onClick={sub}>
                                      Submit
                                  </Button>
                                  <Button className='bg-primary p-2 rounded-2 border-0 text-white' onClick={handleClose2}>
                                      Close
                                  </Button>
                                  </Modal.Footer>
                              </Modal>                        </Card.Footer>
                      </Card>
                </div>
            </div>
        </div>
    </div>

    </>
)    
}
export default Profile;