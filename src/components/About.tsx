import React from 'react'
import { Aboutmain } from '../images/index'
import { caryellow } from '../images/index'
import { bookbanner } from '../images/index'
import { house, unknowcar, cArpic,customercare, Drive} from '../images/index'


const About = () => {
  return (
    <div>
    <div className="container about1">
      <div className='about row'>
        <div className='col-md-6'>
          <img src={Aboutmain} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 about2 text-center text-md-left">
          <h2>About Company</h2>
          <h1>You start the engine and your adventure begins</h1>
          <p className='text-muted'>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
          <div className="row about3 justify-content-center justify-content-md-center md-pt-5">
            <div className="col-md-4">
              <img src={caryellow} alt="" className="img-fluid img-small" />
              <p className="mt-2 h6"> <span>20</span> Car Types</p>
            </div>
            <div className="col-md-4">
              <img src={house} alt="" className="img-fluid img-small" />
              <p className="mt-2 h6"> <span>85</span> Rental Outlets</p>
            </div>
            <div className="col-md-4">
              <img src={unknowcar} alt="" className="img-fluid img-small" />
              <p className="mt-2 h6"> <span>75</span> Repair Shop</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='plan'>
    <div className='text-center plan-1'>
      <h3>Plan your trip now</h3>
      <h1>Quick & easy car rental</h1>
    </div>
    <div className="container plan-3 text-center">
  <div className="row">
    <div className="col-md-4 w-40  text-center">
      <img src={cArpic} alt="" className="mx-auto text-center" />
      <h3>Select Car</h3> 
      <div  className='w-30'>
      <p >We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
      </div>
    </div>
    <div className="col-md-4 w-40 ">
      <img src={Drive} alt="" className="mx-auto text-center" />
      <h3>Contact Operator</h3>
      <div  className='w-30'>
      <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns.</p>
    </div>
    </div>
    <div className="col-md-4 w-40 ">
      <img src={customercare} alt="" className="mx-auto text-center" />
      <h3>Let's Drive</h3>
      <div  className='w-30'>
      <p>Whether you're hitting the open road, we've got you  covered with our wide range of cars.</p>
    </div>
    </div>
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

export default About


