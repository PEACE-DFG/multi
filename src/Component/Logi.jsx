import './log.css'
import Foot from '../Pages/foot';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();

  const allStyles = {
    maxWidth: '400px',
    margin: 'auto',

  };
  const [user,setUser]=useState({
    email:'',
    password:''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem('users')) {
      const users = JSON.parse(localStorage.getItem('users'));
      const matchedUser = users.find(
        (u) => u.Email === user.email && u.Password === user.password
      );
      if (matchedUser) {
        // Successful login
        Swal.fire({
          icon: 'success',
          title: 'You are Logged In',
        }).then(() => {
          setTimeout(() => {
            navigate('/');
          }, 1000);
        });
      } else {
       
        setError('Invalid login details');
      }
    } else {
      
      setError('You have not registered. Please register first');
    }
  }
  
    

  return (
    <>
    <div className='body'>
      <section className='container'>
        <div style={allStyles} >
        <div className="container">

          <div className='text-center text-light' >
            <h2>Login</h2>
          </div>
      <form action="" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
            <input type="email" className="form-control" name='email' id="floatingInput" value={user.email} onChange={handleChange} />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" name='password' value={user.password} onChange={handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          <div className="d-grid gap-2 col-12 mt-4 mx-auto">
            <button className="btn btn-warning text-light" type="submit"  style={{ fontWeight:'900' }}>Login</button>
          </div>
      </form>
        </div>
          <div className="particles" style={{ display:'flex' }}>
            {[...Array(28)].map((_, index) => (
              <span key={index} style={{ '--i': index + 11 }}></span>
            ))}
          </div>
        </div>
      
      </section>
    </div>
    <Foot/>
    </>
  );
}

export default Login
