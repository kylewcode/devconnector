import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('SUCCESS');
    // const newUser = {
    //   name,
    //   email,
    //   password,
    // }

    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   }

    //   const body = JSON.stringify(newUser);

    //   const res = await axios.post('/api/users', body, config);
    //   console.log(res.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Login</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={e => handleSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => handleChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Sign In' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Register Here</Link>
      </p>
    </Fragment>
  );
};

export default Login;
