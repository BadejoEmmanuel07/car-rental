import React from 'react'

const Contact: React.FC = () => {
  return (
    <div>
    <div className="container text-dark contact1">
    <div className="row gap">
      <div className="col-md-6 contact3">
        <h1>Need additional information?</h1>
        <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
        <p>(123) 456-7869</p>
        <p>carrental@carmail.com</p>
        <p>Belgrade, Serbia</p>
      </div>
      <div className="col-md-6 contact2">
        <form>
          <div className="">
            <h4>Fullname <span>*</span></h4>
            <input type="text" className="form-control1" />
          </div>
          <div className="">
            <h4>Email <span>*</span></h4>
            <input type="email" className="form-control1" />
          </div>
          <div className="">
            <h4>Tell us about yourself <span>*</span></h4>
            <textarea className="form-control" rows={3} />
          </div>
        </form>
      </div>
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
  )
}

export default Contact
