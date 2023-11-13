import React from 'react';
import { audimodel, bmwmodel, benzmodel, passatmodel, golfmodel, toyotamodel } from '../images/index';

const VehicleModel = () => {
  const vehicleModels = [
    { name: 'Audi', image: audimodel, price: '$39' },
    { name: 'Mercedes Benz', image: benzmodel, price: '$39' },
    { name: 'BMW', image: bmwmodel, price: '$39' },
    { name: 'Passat', image: passatmodel, price: '$39' },
    { name: 'Toyota', image: toyotamodel, price: '$39' },
    { name: 'Golf', image: golfmodel, price: '$39' },
  ];

  const buttonStyle = {
    backgroundColor: '#FF4D30',
    color: '#fff',
    border: 'none',
  };

  return (
    <div className="">
    <div className="container model1">
      <div className="row">
        {vehicleModels.map((model, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow">
              <img src={model.image} alt={model.name} className="card-img-top img-fluid" />
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex justify-content-between w-100 mb-3">
                  <h2 className="card-title">{model.name}</h2>
                  <p className="card-text">{model.price}</p>
                </div>
                <button style={buttonStyle} className="btn w-75">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
  <div className='drivec'>
    <div className="drivec1">

   <h5> Book a car by getting in touch with us <span>(123) 456-7869</span></h5>
    </div>
  </div>
  </div>
    </div>
  );
}

export default VehicleModel;
