import React from 'react';

const Charges = ({charge}) => {
    const {name, price, subTitle, services} = charge;
    return (
      <div>
        <div className="bg-white rounded-lg p-5 shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="mt-0 mb-0">
              <small className="text-gray-500 text-lg">{subTitle}</small>
            </p>
          </div>
          <div className="py-5 text-center border-t-2 border-b-2 my-3">
            <p className="text-5xl font-bold">
              ${price}
              <sub className="text-gray-400 text-sm">/hour</sub>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Charges;