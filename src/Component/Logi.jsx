import './log.css'
import Foot from '../Pages/foot';

function Login() {
  const allStyles = {
    maxWidth: '400px',
    margin: 'auto',

  };

  return (
    <>
    <div className='body'>
      <section className='container'>
        <div style={allStyles} >
        <div className="container">

          <div className='text-center text-light' >
            <h2>Login</h2>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="d-grid gap-2 col-12 mt-4 mx-auto">
            <button className="btn btn-warning text-light" type="button"  style={{ fontWeight:'900' }}>Login</button>
          </div>
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

export default Login;
