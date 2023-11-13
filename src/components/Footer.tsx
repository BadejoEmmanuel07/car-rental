import React from 'react';

const Footer = () => {
  return (
    <div className="Foot">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 foot-1">
            <h2>Car Rental</h2>
            <p>We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
            <p>Phone: (123) -456-789</p>
            <p>Email: carrental@gmail.com</p>
          </div>
          <div className="col-6 col-md-3 foot-5">
            <h2>COMPANY</h2>
            <ul className="list-unstyled">
              <li><a href="#">New York</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Mobile</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">How we work</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3 foot-5">
            <h2>WORKING HOURS</h2>
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: Closed</p>
          </div>
          <div className="col-12 col-md-3">
            <h2>SUBSCRIPTION</h2>
            <p>Subscribe your Email address for latest news & updates.</p>
            <div className="input-group">
              <br/>
              <input type="email" className="form-control" placeholder="Enter Email Address"/>
            </div>
            <div className="sum mt-2">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
