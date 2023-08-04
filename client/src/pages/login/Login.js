import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { Outlet, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const navigate = useNavigate();

  //useEffect is not working need to figure this out
  useEffect(() => {
    if (!isLoginSuccess) {
      navigate('/login');
    }
  }, [isLoginSuccess, navigate]);

  async function login(e) {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:7001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        setIsLoginSuccess(true);
        navigate('/main'); // dashboard
      } else {
        setMessage(data.message);
      }

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-4">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-12">
                  <div className="card-body py-md-4 mx-md-4">
                    <div className="text-center">
                      <img
                        src="your_logo_url_here"
                        alt="Logo"
                        style={{ width: '185px' }}
                      />
                    </div>
                    <Form onSubmit={login}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>
                      <div className="loginMessage mb-3">{message}</div>

                      <Button className='gradient-btn' type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging In...' : 'Login'}
                      </Button>
                      
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default Login;
