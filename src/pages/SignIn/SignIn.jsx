import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

// social auth providers
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const SignIn = () => {
  const { userSignIn, googlePopUp, gitHubPopUp } = useContext(AuthContext);
  console.log(googlePopUp);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // form function
  const userLogIn = (event) => {
    event.preventDefault();
    setSuccess('');
    setError('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // user creation with email and password

    userSignIn(email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        console.log(loggedUser);
        form.reset();

        // toast has added
        toast.success(`You're logged in`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/user-not-found') {
          setError('User not found');
          return;
        }
        if (errorCode === 'auth/wrong-password') {
          setError('Wrong password');
          return;
        }
      });
  };
  // google popup and login

  const googleLogin = () => {
    googlePopUp(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };

  // github popup and login
  const gitHubLogin = () => {
    gitHubPopUp(gitHubProvider)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };

  return (
    <div className="w-full md:w-3/4 mx-auto py-3 md:py-10">
      <h2 className="my-4 text-center text-[#398378] text-2xl">
        Please Sign In
      </h2>
      <div className="text-center">
        <h4 className="font-medium text-lg text-green-600">{success}</h4>
        <h4 className="font-medium text-lg text-red-600">{error}</h4>
      </div>
      <form onSubmit={userLogIn} className="w-full md:w-1/2 mx-auto">
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Email
        </label>
        <input
          required
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Password
        </label>
        <input
          required
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <div className="my-4">
          <button
            type="submit"
            className="border p-1 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="flex items-center gap-3 mx-auto w-full md:w-1/2">
        <h6 className="text-[#398378] text-base text-center">
          Or sign in with{' '}
        </h6>
        <div className="flex items-center gap-3">
          <button
            onClick={googleLogin}
            className="border px-1 border-[#8abe53] rounded-md text-[#8abe53] text-lg font-medium bg-slate-50"
          >
            Google
          </button>
          <button
            onClick={gitHubLogin}
            className="border px-1 border-[#8abe53] rounded-md text-[#8abe53] text-lg font-medium bg-slate-50"
          >
            GitHub
          </button>
        </div>
      </div>
      <div className="w-full mx-auto md:w-1/2">
        <h6 className="text-[#398378]  my-4 text-base">
          Don&apos;t have an account?{' '}
          <Link className="text-[#8ABE53]" to="/registration">
            Sign Up
          </Link>
        </h6>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
