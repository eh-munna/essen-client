import React from 'react';

const Feedback = () => {
  return (
    <div>
      <h2 className="my-8 md:my-20 text-center text-4xl text-[#398378] capitalize">
        Give Us Your feedback
      </h2>

      <form className="space-y-5 mx-auto md:w-1/2 flex flex-col justify-center ">
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="focus:outline-none border border-[#8abe53] input  w-full"
          />
        </div>
        <div>
          <input
            type="type"
            placeholder="Your email"
            className="focus:outline-none border border-[#8abe53] input  w-full"
          />
        </div>
        <div>
          <textarea
            className="textarea-lg focus:outline-none textarea border-[#8abe53] w-full"
            placeholder="Your feedback"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="border px-2 py-1 border-[#8abe53] rounded-md text-[#fff] text-lg font-medium bg-[#8abe53]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
