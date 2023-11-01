import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
function Account() {
    const [userDetails, setUserDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedUserDetails = JSON.parse(localStorage.getItem('users'));
        setUserDetails(storedUserDetails);
    }, []);
    const openModal = () => {
      setShowModal(true);
  };

  const closeModal = () => {
      setShowModal(false);
  };
  const [address, setAddress] = useState({
    Address:''
  });
  const [error, setError] = useState({})
  
  
  const submitData = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (address.Address.trim() === '') {
        newErrors.AddressErr = 'Your Address is Required';
    } else {
        // Save the address to local storage
        const UsersAddress = JSON.parse(localStorage.getItem('addr')) || [];
        // UsersAddress.push(address.Address);
        localStorage.setItem('addr', JSON.stringify(UsersAddress));

        setAddress({ Address: '' }); // Clear the address input field
        closeModal(); // Close the modal
    }

    setError(newErrors);
};

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><i className="fas fa-user me-2"></i> My Multi Account</li>
                            <li className="list-group-item"><i className="fas fa-box me-2"></i> Orders</li>
                            <li className="list-group-item"><i className="fas fa-envelope me-2"></i> Inbox</li>
                            <li className="list-group-item"><i className="fas fa-heart me-2"></i> Saved Items</li>
                            <li className="list-group-item"><i className="fas fa-clock me-2"></i> Recently Viewed</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9 col-sm-12">
                    <div className="container mt-3">
                        <h2>Account Overview</h2>
                        <hr />

                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h4 className="card-title">Account Details</h4>
                                        <hr />
                                        {userDetails && (
                                            <div>
                                                <p>Name: {userDetails[0].Name}</p>
                                                <p>Email: {userDetails[0].Email}</p>
                                                {/* Add more user details here */}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card mb-3">
                                    <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                            <h4 className="card-title">Address Book</h4>
                                            <i
                                                className="fas fa-pen text-warning"
                                                id="pen"
                                                onClick={openModal}
                                                style={{ cursor: 'pointer' }}
                                            ></i>
                                        </div>
                                        <hr />
                                        {/* Add address book content here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
            <form action="" onSubmit={submitData}>
                <Modal show={showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Address Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Leave a comment here"
                                id="floatingTextarea"
                                value={address.Address}
                                onChange={(e) => {
                                    setAddress({  Address: e.target.value });
                                }}
                            ></textarea>
                            <label htmlFor="floatingTextarea">Home Address</label>
                            {error.AddressErr && <span className='my-4' style={{ color: 'red', fontSize: '10px' }}>{error.AddressErr}</span>}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={closeModal}>
                            Close
                        </Button>
                        <Button variant="warning" type="submit">Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            </form>

        </div>
    );
}


export default Account;