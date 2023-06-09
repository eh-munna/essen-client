import React from 'react';

const Testimonial = () => {
  return (
    <div>
      <h2 className="my-6 md:my-20 text-center text-2xl md:text-4xl text-[#398378] capitalize">
        Our clients say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 relative">
        <div className="flex flex-col justify-between shadow-xl rounded-md p-3 bg-slate-100 space-y-6">
          <h4 className="font-semibold">
            <span className="text-2xl text-green-600">"</span> I had the most
            amazing dining experience at Essen! The food was absolutely
            delicious and prepared to perfection. The atmosphere was warm and
            inviting, and the service was top-notch. I highly recommend this
            restaurant to anyone looking for an unforgettable dining experience!{' '}
            <span className="text-2xl text-green-600">"</span>
          </h4>
          <div className="flex justify-center">
            <h5 className="text-sky-700 font-bold text-lg">
              Michael,
              <span className="mx-2 text-base font-medium text-blue-500">
                Zalando Deutschland
              </span>
            </h5>
          </div>
        </div>
        <div className="flex flex-col justify-between shadow-xl rounded-md p-3 bg-slate-100 space-y-6">
          <h4 className="font-semibold">
            <span className="text-2xl text-green-600">"</span> If you're looking
            for authentic German cuisine, look no further than Essen! Every dish
            we tried was bursting with flavor and made with the freshest
            ingredients. The staff were incredibly friendly and attentive, and
            the ambiance was just right for a memorable meal. I can't wait to
            come back! experience!{' '}
            <span className="text-2xl text-green-600">"</span>
          </h4>
          <div className="flex justify-center">
            <h5 className="text-sky-700 font-bold text-lg">
              Zimmermaan,
              <span className="mx-2 text-base font-medium text-blue-500">
                Wolt GmbH
              </span>
            </h5>
          </div>
        </div>
        <div className="flex flex-col justify-between shadow-xl rounded-md p-3 bg-slate-100 space-y-6">
          <h4 className="font-semibold">
            <span className="text-2xl text-green-600">"</span> I had high
            expectations for Essen, and I'm pleased to say that they exceeded
            them all. From the moment we walked in, we were greeted with a warm
            welcome and seated at a cozy table. The menu offered a great
            selection of dishes, and our server was happy to make
            recommendations. The food was exceptional - beautifully presented
            and bursting with flavor. I highly recommend this restaurant for a
            special occasion or a memorable night out.{' '}
            <span className="text-2xl text-green-600">"</span>
          </h4>
          <div className="flex justify-center">
            <h5 className="text-sky-700 font-bold text-lg">
              Caludia,
              <span className="mx-2 text-base font-medium text-blue-500">
                Lieferando DE
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
