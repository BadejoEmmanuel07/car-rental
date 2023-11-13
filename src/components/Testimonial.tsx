import React from 'react'
import { Client1, Client2 } from '../images'

const Testimonial = () => {
  return (
    <div>
      <div className="ron23">
    <div className="ron-2">
        <div className=" text-center ">
          <h3 >Reviewed by People</h3>
          <h1 >Client's Testimonials</h1>
          <p >Discover the positive impact we've made on our clients by reading through their testimonials. <br/>Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
        </div>
        <div className="d-flex justify-content-center ron-1">
          <div className="ron1">
            <div className="text-center">
            <h1> "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</h1> <br/>
            <div className="d-flex ron3" >
              <img src={Client1} alt="" className="rounded-circle" />
              <div className="ron-3">
               <h2>Ron Rizzly</h2>   
              <h4>Belgrade</h4>
            </div>
            </div>
            </div>
          </div>
          <div className="ron1">
            <div className="text-center">
              <h1>"The car was in great condition and made our trip even better. Highly recommend this car rental website!"</h1>
               <br/>
              <div className="d-flex ron3" >
          <img src={Client2} alt="" className="rounded-circle"/>
              <div className="ron-3">
              <h2>Parry Hotter</h2>
              <h4>Novi Sad</h4>
            </div>
            </div>
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

export default Testimonial
