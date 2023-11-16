import './log.css';
import Foot from '../Pages/foot';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Reg() {
  const allStyles = {
    maxWidth: '400px',
    margin: 'auto'
  };
  const navigate = useNavigate();

  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const showErrorAlert = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
    });
  };

  const submitData = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (user.Name.trim() === '') {
      newErrors.NameErr = 'Your Name is Required';
    }
    if (user.Email.trim() === '') {
      newErrors.EmailErr = 'Your Email is Required';
    }
    if (user.Password.trim() === '') {
      newErrors.PasswordErr = 'Your Password is Required';
    } else if (user.Password.trim().length < 8) {
      newErrors.PasswordErr = 'Your Password shouldn\'t be less than 8 characters';
    }
    if (user.ConfirmPassword.trim() === '') {
      newErrors.ConfirmPasswordErr = 'Your Password is Required';
    } else if (user.Password.trim() !== user.ConfirmPassword.trim()) {
      newErrors.ConfirmPasswordErr = 'Your Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      // Check if the email is already registered
      const isEmailRegistered = existingUsers.some(u => u.Email === user.Email);

      if (isEmailRegistered) {
        showErrorAlert('This email is already registered. Please use a different email address.');
        return;
      }

      const newUser = {
        Name: user.Name,
        Email: user.Email,
        Password: user.Password
      };

      // Add the new user to the array of users
      const updatedUsers = [...existingUsers, newUser];

      // Update localStorage with the updated array of users
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Clear the form and show a success message
      setUser({
        Name: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
      });
      setErrors({});
      Swal.fire({
        icon: 'success',
        title: 'Thank you for registering',
        text: `${user.Name}`,
      }).then(() => {
        navigate('/Login');
      });
    }
  }

  return (
    <div>
      <div className='body'>
        <section className='container'>
          <div style={allStyles}>
            <div className="container">
              <div className='text-center text-light'>
                <h2>Register</h2>
              </div>
              <form action="" onSubmit={submitData}>
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    value={user.Name}
                    onChange={(e) => {
                      setUser({ ...user, Name: e.target.value })
                    }}
                  />
                  <label htmlFor="Name">Name</label>
                  {errors.NameErr && <span style={{ color: 'red', fontSize: '10px' }}>{errors.NameErr}</span>}
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Email"
                    value={user.Email}
                    onChange={(e) => {
                      setUser({ ...user, Email: e.target.value })
                    }}
                  />
                  <label htmlFor="floatingInput">Email</label>
                  {errors.EmailErr && <span style={{ color: 'red', fontSize: '10px' }}>{errors.EmailErr}</span>}
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={user.Password}
                    onChange={(e) => {
                      setUser({ ...user, Password: e.target.value })
                    }}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                  {errors.PasswordErr && <span style={{ color: 'red', fontSize: '10px' }}>{errors.PasswordErr}</span>}
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="ConfirmPassword"
                    value={user.ConfirmPassword}
                    onChange={(e) => {
                      setUser({ ...user, ConfirmPassword: e.target.value })
                    }}
                  />
                  <label htmlFor="floatingPassword">ConfirmPassword</label>
                  {errors.ConfirmPasswordErr && <span style={{ color: 'red', fontSize: '10px' }}>{errors.ConfirmPasswordErr}</span>}
                </div>
                <div className="d-grid gap-2 col-12 mt-3 mb-4 mx-auto">
                  <button className="btn btn-warning text-light" type="submit" style={{ fontWeight: '900' }}>Register</button>
                </div>
              </form>
            </div>
            <div className="particles" style={{ display: 'flex' }}>
              {[...Array(28)].map((_, index) => (
                <span key={index} style={{ '--i': index + 11 }}></span>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Foot />
    </div>
  )
}

export default Reg;
