                               import React from 'react';
import Audii from "../images/AUDI.jpg";
import Bwm from "../images/bmw32.jpg";
import Passat from "../images/passatcc.jpg";
import Cmary from "../images/toyotacamry.jpg";
import mbenz from "../images/benzmecedez.jpg";
import golf from "../images/golfcar.jpg";
import  {AiOutlineClose} from 'react-icons/ai';




const Homepage = ({
    selectedCar,
    selectedPickupLocation,
    selectedDropoffLocation,
    onClose,
}: {
    selectedCar: string;
    selectedPickupLocation: string;
    selectedDropoffLocation: string;
    onClose: () => void;
}) => {
    const carImages: { [key: string]: string } = {
        "option2": Audii,
        "option3": golf,
        "option4": Cmary,
        "option5": Bwm,
        "option6": mbenz,
        "option7": Passat,
    };
   
    return (
        <div className='contain-1'>
        <div className='contain2'>
            <div className='d-flex justify-content-between contain-2 '>
                <h2>COMPLETE RESERVATION</h2>
                <AiOutlineClose onClick={onClose} className='text-white '/>
            </div >
            <div className='contain-3'>
            <h4>Upon completing this reservation enquiry, you will receive:</h4>
            <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
            </div>

            <div className='d-flex contain-5'>
                <div>
                    <div>
                        <p>Pick-Up Location:</p>
                        <p>{selectedPickupLocation}</p>
                    
                    
                        <p>Drop-Off Location:</p>
                        <p>{selectedDropoffLocation}</p>
                    </div>
                </div>
                <div className=''>
                    <img src={carImages[selectedCar]} alt=""/>
                </div>
            </div>
            <div className="contain-7"></div>
            <div className="contain-6">
  <h4>Personal Information</h4>
  <div className="form-group">
    <h4>Fullname<span>*</span></h4>
    <input type="text" placeholder="Fullname" className="input-field" />
  </div>
  <div className="form-group">
    <h4>Email<span>*</span></h4>
    <input type="text" placeholder="Email" className="input-field" />
  </div>
  <div className="d-flex">
    <input type="checkbox" id="newsletter" className="checkbox" />
    <label htmlFor="newsletter">Please send me latest news and updates</label>
  </div>
  <button className="submit-button">Submit</button>
</div>

        </div>
        </div>
    );
};

export default Homepage;
