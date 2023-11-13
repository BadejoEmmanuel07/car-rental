

import React, { useState, useEffect } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { Carhome, Client1, Client2 } from "../images/index";
import { Town, Car, Down, googleapp } from "../images/index";
import { cArpic, cross, Inclusive, Charge } from '../images/index';
import { Drive, main, apple, phone } from "../images/index";
import { customercare } from '../images/index';
import Homepage from './Homepage';
import Audii from "../images/AUDI.jpg";
import Bwm from "../images/bmw32.jpg";
import Passat from "../images/passatcc.jpg";
import Camry from "../images/toyotacamry.jpg";
import Mbenz from "../images/benzmecedez.jpg";
import Golf from "../images/golfcar.jpg";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedPickupLocation, setSelectedPickupLocation] = useState("");
  const [selectedPickupDate, setSelectedPickupDate] = useState("");
  const [selectedDropoffLocation, setSelectedDropoffLocation] = useState("");
  const [selectedDropoffDate, setSelectedDropoffDate] = useState("");
  const [selecteCar, setSelecteCar] = useState<string | null>("Audi A1 S-Line");
  const faqData = [
    {
      question: 'What is special about comparing rental car deals?',
      answer:
        'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.',
    },
    {
      question: 'How do I find the car rental deals?',
      answer:
        'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.',
    },
    {
      question: 'How do I find such low rental car prices?',
      answer:
        'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    setSelecteCar(selecteCar);
  }, []);

  console.log('selectedCar:', selectedCar);
  console.log('selectedPickupLocation:', selectedPickupLocation);
  console.log('selectedDropoffLocation:', selectedDropoffLocation);

  const handleSearch = () => {
    setIsPopupOpen(true);
  };

  const handleCarChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCar(event.target.value);
  };

  const handlePickupLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPickupLocation(event.target.value);
  };
  

  const handleDropoffLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDropoffLocation(event.target.value);
  };
 
 

  const handleCarSelect = (car: string) => {
    setSelecteCar(car);
  };

  const carDetails: { [key: string]: { image: string, year: string, doors: string, ac: string, transmission: string, fuel: string } } = {
    'Audi A1 S-Line': {
      image: Audii,
      year: '2012',
      doors: '4/5',
      ac: 'Yes',
      transmission: 'Manual',
      fuel: 'Petrol',
    },
    'VW Golf 6': {
      image: Golf,
      year: '2015',
      doors: '4/4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Petrol',
    },
    'Toyota Camry': {
      image: Camry,
      year: '2015',
      doors: '4/4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Petrol',
    },
    'BMW 320 ModernLine': {
      image: Bwm,
      year: '2019',
      doors: '4/4',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Petrol',
    },
    'Mercedes-Benz GLK': {
      image: Mbenz,
      year: '2020',
      doors: '5/5',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'Petrol',
    },
    'VW Passat CC': {
      image: Passat,
      year: '2023',
      doors: '5/5',
      ac: 'Yes',
      transmission: 'Automatic',
      fuel: 'petrol',
    },
  };

  
  return (
    <div className="" style={{maxWidth: "100%"}}>
    <div className="hommie">
    <div className="container">
  <div className="row">
    <div className="col-md-6 text-black">
      <div className='hommie1'>
        <h3>Plan your trip now</h3>
        <h1>Save <span className='big'>big</span> with our  car rental</h1>
        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles,<br/> flexible pick-up options and much more.</p>
        <button className="btm1 ">Book ride <AiOutlineCheckCircle/></button> 
        <button className="btm2">Learn more <AiOutlineRight/></button>

      </div>
    </div>
    <div className="col-md-6  car-home2 ">
      <div className='car-home'>
      <img src={Carhome} alt="" />
      </div>
      <img src={Town} alt="" className='town1'/>
    </div>
  </div>
</div>

    </div>
   

<div className="container san mx-auto my-5 p-4 bg-white shadow-lg" >
  
    <h3>Book a car</h3>
    <div className="label-select d-flex ted justify-content-around">
  <div className="form-group">
    <label htmlFor="carType"><h4>Select Your Car Type <span>*</span></h4></label>
    <div className="custom-select">
    <select className="form-control" id="drop" onChange={handleCarChange}>
              <option value="option1">Select Your Car Type</option>
        <option value="option2">Audi A1 S-Line</option>
        <option value="option3">VW Golf 6</option>
        <option value="option4">Toyota Camry</option>
        <option value="option5">BMW 320 ModernLine</option>
        <option value="option6">Mercedes-Benz GLK</option>
        <option value="option7">VW Passat CC</option>
      </select>
      <div className="custom-select-image">
      <img src={Down} alt="" />
    </div>
    </div>
  </div>


  <div className="form-group">
    <label htmlFor="pickupLocation"><h4>Pick-up <span>*</span></h4></label>
    <div className="custom-select">
    <select className="form-control" id="drop" onChange={handlePickupLocationChange}>
              <option value="option1">Select Pick-up location</option>
        <option value="Belgrade">Belgrade</option>
        <option value="Novi Sad">Novi Sad</option>
        <option value="Nis">Nis</option>
        <option value="Kragujevac">Kragujevac</option>
        <option value="Subotic">Subotica</option>
      </select>
      <div className="custom-select-image">
      <img src={Down} alt="" />
    </div>
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="dropoffLocation"><h4>Drop-off <span>*</span></h4></label>
    <div className="custom-select">
    <select className="form-control" id="drop" onChange={handleDropoffLocationChange}>
              <option value="option1">Select drop-off location</option>
        <option value="Belgrade">Belgrade</option>
        <option value="Novi Sad">Novi Sad</option>
        <option value="Nis">Nis</option>
        <option value="Kragujevac">Kragujevac</option>
        <option value="Subotica">Subotica</option>
      </select>
      <div className="custom-select-image">
      <img src={Down} alt="" />
    </div>
    </div>
  </div>
</div>

<div className="d-flex ted justify-content-around">
<div className="form-group">
  <h4>Pick-up <span>*</span></h4>
  <input
    type="text"
    placeholder="DD/MM/YY"
    className="custom-input"
  />
</div>
<div className="form-group">
  <h4>Drop-off <span>*</span></h4>
  <input
    type="text"
    placeholder="DD/MM/YY"
    className="custom-input"
  />
</div>



  <div className="con" >
  <div className="contain"  onClick={handleSearch} >
    <p>Search</p>
  {/* <div className="seach" onClick={handleSearch}> Search</div> */}
    {/* <button className="btn2" onClick={handleSearch}>Search</button> */}
  </div>
</div>
</div>
{isPopupOpen && (
        <Homepage
        selectedCar={selectedCar}
        selectedPickupLocation={selectedPickupLocation}
        selectedDropoffLocation={selectedDropoffLocation}
        onClose={() => setIsPopupOpen(false)}
      />
      )}
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
<div className='text-center  model'>
  <h3>Vehicle Models</h3>
<h2>Our rental fleet</h2>
<p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
</div>
<div className="container d-flex justify-content-between pt-5 model-1">
  <div className="flex-grow-1">
    <div>
      <h4 className="AUDI-6 py-3"
              onClick={() => handleCarSelect('Audi A1 S-Line')}>Audi A1 S-Line</h4>
      <h4  className="AUDI-6 py-3"
              onClick={() => handleCarSelect('VW Golf 6')}>VW Golf 6</h4>
      <h4 className="AUDI-6 py-3" onClick={() => handleCarSelect('Toyota Camry')}>Toyota Camry</h4>
<h4 className="AUDI-6 py-3" onClick={() => handleCarSelect('BMW 320 ModernLine')}>BMW 320 ModernLine</h4>
      <h4 className="AUDI-6 py-3"
              onClick={() => handleCarSelect('Mercedes-Benz GLK')}>Mercedes-Benz GLK</h4>
      <h4  className="AUDI-6 py-3"
              onClick={() => handleCarSelect('VW Passat CC')}>VW Passat CC</h4>
    </div>
  </div>
  <div className="flex-grow-1">
  {selecteCar && carDetails[selecteCar] ? (
    <img src={carDetails[selecteCar].image} alt="" />
  ) : (
    <p>Car image not available</p>
  )}
</div>
<div className="flex-grow-1">
  <div className="table-responsive">
    <div className="rent">
      <h6>$45/ rent per day</h6>
    </div>
    <table className="table table-sm custom-table">
      <tbody>
        {selecteCar && carDetails[selecteCar] ? (
          <>
            <tr>
              <td>Model</td>
              <td>{selecteCar}</td>
            </tr>
            <tr>
              <td>Make</td>
              <td>{selecteCar.split(' ')[0]}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{carDetails[selecteCar].year}</td>
            </tr>
            <tr>
              <td>Doors</td>
              <td>{carDetails[selecteCar].doors}</td>
            </tr>
            <tr>
              <td>AC</td>
              <td>{carDetails[selecteCar].ac}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>{carDetails[selecteCar].transmission}</td>
            </tr>
            <tr>
              <td>Fuel</td>
              <td>{carDetails[selecteCar].fuel}</td>
            </tr>
          </>
        ) : (
          <tr>
            <td>Model</td>
            <td>N/A</td>
          </tr>
        )}
      </tbody>
    </table>
    <br />
    <button className="btn2">RESERVE NOW</button>
  </div>
</div>


</div>
</div>

<div className="sav-1">
<div  className='save pt-5 '>
 <h2>Save big with our cheap car rental!</h2>
 <h4>Top Airports. Local Suppliers. <span>24/7</span> Support.</h4>
</div>
</div>

<div className=" save2 pt-5">
 <img src={main} alt=""/>
</div>


<div className="container d-flex gap-5 cross">
  <div className="row">
    <div className="col-md-6 best">
      <h3>Why Choose Us</h3>
      <h1>Best valued deals you will ever find</h1>
      <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
      <button className="detail">Find Details</button>
    </div>
    <div className="col-md-6 ">
      <div>
        <div className="text-center cross-11 d-flex justify-content-center">
          <img src={cross} alt=""/>
          <div className='cross-1'>
          <h4>Cross Country Drive</h4>
          <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center cross-11 d-flex justify-content-center gap-4 ">
          <img src={Inclusive} alt=""/>
          <div className='cross-1'>
          <h4>All Inclusive Pricing</h4>
          <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
        </div>
        </div>
      </div>
      <div>
        <div className="text-center cross-11 d-flex justify-content-center">
          <img src={Charge} alt=""/>
          <div className='cross-1'>

          <h4>No Hidden Charges</h4>
          <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="ron2">
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
</div>

<div className="pat ">
  <div className=" text-center pat-2">
    <h3>FAQ</h3>
  <h2> Frequently Asked Questions</h2>
  <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: <br/> Answers to Common Concerns and Inquiries.</p>
</div>

  <div className="d-flex pat-5">
<div>
<img src={Car} alt=""/>

</div>
<div className="patt-1">
<div className="pat-1">
<div>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div
            className="question d-flex justify-content-center "
            onClick={() => handleAccordionClick(index)}
          >
            <h3>{faq.question}</h3>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
</div>
</div>
</div>
</div>


<div className=" load">
<div className="container">
  <div className="row">
    <div className="col-md-6 download">
      <h2>Download our app to get the most out of it</h2>
      <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
      <img src={googleapp} alt=""/>
      <img src={apple} alt=""/>
    </div>
    <div className="col-md-6  phone">
      <img src={phone} alt="" style={{position: "absolute", right: "30px",width: "1000px"}}/>
    </div>
  </div>
</div>
</div>




    </div>
  )
}

export default Home

 



