import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { useForm } from './hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FeedBack } from './components/FeedBack';
import { useEffect } from 'react';

export const Login = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const { setUser, setLoggedIn } = useContext(UserContext);
  const { email, password, onInputChange, formState, onResetForm } = useForm({
    email: '',
    password: '',
  });


  const correctUser = {
    email_user: 'random@gmail.com',
    password_user: 'ventana123',
  };

  const navigateTo = useNavigate();

  const onInputChangeTest = (e) => {

    return e?.target.value == 'on';
    
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email_user, password_user } = correctUser;
    if (
      formState?.email !== email_user ||
      formState?.password !== password_user
    ) {
      setError(true);
      setMessage('User or password is incorrect');
      return message;
    }
    if(onInputChangeTest()){
      localStorage.setItem('user', JSON.stringify(formState))
    }
    setUser(formState);
    setLoggedIn(true);
    navigateTo('/');
  };

  return (
    <> 
      <h1 className='text-center mt-5 mb-3 font-semibold text-3xl text-indigo-900'>Login</h1>
    
      {error && <FeedBack message={message} typeAlert={'Error'}/>}

      <div className='flex min-h-full  items-center justify-center pb-16 pt-2 px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-md space-y-8'>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label className='sr-only'>Email address</label>
                <input
                  name='email'
                  id='email'
                  onChange={onInputChange}
                  value={email}
                  type='email'
                  className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Email address'
                />
              </div>
              <div>
                <label className='sr-only'>Password</label>
                <input
                  name='password'
                  id='password'
                  onChange={onInputChange}
                  value={password}
                  type='password'
                  className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Password'
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  onChange={onInputChangeTest}
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                />
                <label className='ml-2 block text-sm text-gray-900'>
                  Remember me
                </label>
              </div>

              <div className='text-sm'>
                <a
                  href='#'
                  className='font-medium text-indigo-600 hover:text-indigo-500'>
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
