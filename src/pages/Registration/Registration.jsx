import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Registration = () => {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);

  const userRegistration = (event) => {
    event.preventDefault();
    setSuccess('');
    setError('');
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    if (password.length < 6) {
      setError('Password must be or at least 6 characters long');
      return;
    }
    if (email && password) {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          form.reset();
          setSuccess('User has been created successfully');
        })
        .catch((error) => {
          const errorMessage = error.message;
          // setError(errorMessage);
        });
    } else {
      setError('Cannot register without providing email and password');
      return;
    }
  };

  return (
    <div className="w-3/4 mx-auto py-3 md:py-10">
      <h2 className="my-4 text-center text-[#398378] text-2xl">
        Please Sign Up
      </h2>
      <div className="text-center">
        <h4 className="font-medium text-lg text-green-600">{success}</h4>
        <h4 className="font-medium text-lg text-red-600">{error}</h4>
      </div>
      <form onSubmit={userRegistration} className="w-full md:w-1/2 mx-auto">
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Name
        </label>
        <input
          required
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Email
        </label>
        <input
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Password
        </label>
        <input
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <label htmlFor="email" className="block text-[#8ABE53] mt-4">
          Photo URL
        </label>
        <input
          required
          className="text-[#398378] w-full p-1 focus:outline-none border-b border-blue-800 focus:border-blue-500"
          type="text"
          name="photo"
          placeholder="Share your photo url"
        />
        <div className="my-4">
          <button
            type="submit"
            className="border p-1 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]"
          >
            Sign Up
          </button>
        </div>
        <h6 className="text-[#398378]  my-4 text-base">
          Already have an account?{' '}
          <Link className="text-[#8ABE53]" to="/sign-in">
            Sign In
          </Link>
        </h6>
      </form>
    </div>
  );
};

export default Registration;
