import React from 'react';

const Blogs = () => {
  return (
    <div className="">
      <h2 className="my-6 md:my-20 text-center text-2xl md:text-4xl text-[#398378] capitalize">
        Some questions we have answered
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-lime-50 p-4 text-sky-800 rounded-md shadow-xl">
          <h4 className="font-semibold text-lg my-4">
            What are the differences between uncontrolled and controlled
            components?
          </h4>
          <p className="font-medium my-2">
            There are some differences between controlled and uncontrolled
            components :{' '}
          </p>
          <ul className="font-medium space-y-2 list-inside">
            <li className="list-disc">
              In a controlled component react, state handles all the form data,
              whereas, in an uncontrolled component, the HTML form element data
              is managed by only the DOM
            </li>
            <li className="list-disc">
              Controlled component allows validation control
            </li>
            <li className="list-disc">
              Uncontrolled component allows validation control
            </li>
            <li className="list-disc">
              Controlled component does not maintain its internal state
            </li>
            <li className="list-disc">
              While uncontrolled component maintains its internal state
            </li>
          </ul>
        </div>
        <div className="bg-lime-50 p-4 text-sky-800 rounded-md shadow-xl">
          <h4 className="font-semibold text-lg my-4">
            How to validate React props using PropTypes?
          </h4>
          <p className="font-medium my-2">
            PropTypes are simply a mechanism that ensures that the passed value
            is of the correct datatype. For example, if we set name should be
            string, but if we pass something else like number then it will give
            us warning in console. There are some validators are available as
            following list :
          </p>
          <ul className="font-medium  space-y-2 list-inside">
            <li className="list-disc">
              propTypes.any : The props can be of any data type
            </li>
            <li className="list-disc">
              propTypes.array : The props should be an array
            </li>
            <li className="list-disc">
              propTypes.bool : The props should be a boolean
            </li>
            <li className="list-disc">
              propTypes.func : The props should be a function
            </li>
          </ul>
        </div>
        <div className="bg-lime-50 p-4 text-sky-800 rounded-md shadow-xl flex flex-col">
          <h4 className="font-semibold text-lg my-4">
            Tell us the differences between nodejs and express js
          </h4>
          <p className="font-medium my-2">
            The differences between Node.js and Express.js are :
          </p>
          <ul className="font-medium  space-y-2 list-inside">
            <li className="list-disc">
              Node.js primarily falls under the Frameworks category
            </li>
            <li className="list-disc">
              Express.js is classified under Microframeworks category
            </li>
            <li className="list-disc">
              Node.js is built on Google’s V8 engine
            </li>
            <li className="list-disc">Express.js is built on Node.js</li>
            <li className="list-disc">
              Node.js can be used independently from Express.js
            </li>
            <li className="list-disc">Express.js requires Node.js</li>
          </ul>
        </div>
        <div className="bg-lime-50 p-4 text-sky-800 rounded-md shadow-xl flex flex-col">
          <h4 className="font-semibold text-lg my-4">
            What is a custom hook, and why will you create a custom hook?
          </h4>
          <p className="font-medium my-2">
            Custom hooks are reusable functions that we can use to add special
            and unique functionality to the React applications. Custom hooks can
            help us to save our time. They will be reliable. It will give us
            reusability, and help us maintain our code clean
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
