import React, {useState} from 'react';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  });

  const {name,email, password} = formData;

  const handleChange = (e)=> {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>
        Sign up
      </h1>
      <div 
      className='flex justify-center flex-wrap items-center py-12
       px-6 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:md-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3
          &ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1373&q=60"
           alt="key" 
           className='w-full rounded-2xl'
           />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form
           >
            <input
             className='w-full px-4 py-2 text-xl
             mb-6
              text-gray-700
              bg-white border-gray-300
              rounded transition ease-in-out'
              type='text'
              id='name'
              placeholder='Full Name'
              value={name}
              onChange={handleChange}
              />
            <input
             className='w-full px-4 py-2 text-xl
             mb-6
              text-gray-700
              bg-white border-gray-300
              rounded transition ease-in-out'
              type='email'
              id='email'
              placeholder='Email address'
              value={email}
              onChange={handleChange}
              />
             <div className='relative'>
                <input
                  className='w-full px-4 py-2 text-xl
                    mb-6
                    text-gray-700
                    bg-white border-gray-300
                    rounded transition ease-in-out'
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={handleChange}
                  />
                  {showPassword ?
                   <AiFillEyeInvisible
                    className=
                    'absolute right-3 top-3 text-xl cursor-pointer'
                    onClick={()=>setShowPassword(!showPassword)}
                    />
                   : <AiFillEye
                    className=
                    'absolute right-3 top-3 text-xl cursor-pointer'
                    onClick={()=>setShowPassword(!showPassword)}
                    />
                    }
              </div>
              <div 
              className='flex justify-between
               whitespace-nowrap text-sm
               lg:text-lg'>
                <p>Don't have an account?
                  <Link to='/sign-in'
                  className='text-red-600
                  hover:text-red-700
                  transition duration-200 ease-in-out ml-1'
                  >
                  Sign in
                  </Link>
                </p>
                <p className='mb-6'>
                  <Link to='/forgot-password'
                  className='text-blue-600
                  hover:text-blue-700
                  transition duration-200 ease-in-out'
                  >Forgot Password</Link>
                </p>
              </div>
          <button
            type='submit'
            className='w-full bg-blue-600
            text-white px-7
            py-3 text-sm font-medium uppercase
            rounded shadow-md hover:shadow-lg
            active:bg-blue-800'
            >
            Sign in
          </button>
          <div
          className='flex items-center my-4
          before:border-t before:flex-1
          before:border-gray-300
          after:border-gray-300 after:border-t after:flex-1
          '
          >
            <p 
            className='text-center font-semibold mx-4'>
              OR
            </p>
          </div>
          <OAuth />
        </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp;