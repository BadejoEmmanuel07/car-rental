import React from 'react';
import { tman, fman, fwoman, twoman, sman, swoman } from '../images/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const Team = () => {
  const teamMembers = [
    { name: 'Thomas David', image: tman, description: 'CEO' },
    { name: 'Davies Diana', image: fwoman, description: 'COO' },
    { name: 'Gomez Grace', image: swoman, description: 'CFO' },
    { name: 'Brown Thomas', image: twoman, description: 'CTO' },
    { name: 'Michael Diaz', image: tman, description: 'Marketing manager' },
    { name: 'Luke Miller', image: fman, description: 'Software developer' },
  ];

  return (
    <div className="">
    <div className="container team">
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow border-0">
              <img src={member.image} alt={member.name} className="card-img-top img-fluid" />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
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
};

export default Team;
