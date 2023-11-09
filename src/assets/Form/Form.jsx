import { useState } from 'react';
import './form.css';
import Sheetrep from '../sheet/Sheetrep.jsx'

export default function Form() {
    const[named, setNamed] = useState('Mason Yates');
    const[email, setEmail] = useState('Mcy03131993@gmail.com');
    const[phone, setPhone] = useState('430-610-8844');

    return (
    <>
        <Sheetrep named={named} email={email} phone={phone}/>
        <div className="formwindow">
            <div>
                <h2 className='formhtwo'>Form Ruleset</h2>
                <ul className='formul'>
                    <li>Need to enter name email,phone, and address for the personal zone.</li>
                    <li>Can only enter 3 schools and 3 jobs and 5 skills.</li>
                </ul>
            </div>

            <form action="submit" className="personalform">
                <h3>Personal Details</h3>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id='fullname' placeholder='First and Last' value={named} onChange={(e) => {setNamed(e.target.value)}}/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email'placeholder='Enter Email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <label htmlFor="telephone">Phone Number <span>(Recommended)</span></label>
                <input type="tel" id='telephone' placeholder='Enter Phone Number' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                <label htmlFor="address">Address</label>
                <input type="text" id='address' placeholder='City, Country'/>
            </form>
            <form action="submit" className="educationform">
                <h3>Education Details <img src="" alt="" className='educationarrow'/></h3>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id='fullname' placeholder='First and Last'/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email'placeholder='Enter Email'/>
                <label htmlFor="telephone">Phone Number<span>Recommended</span></label>
                <input type="tel" id='telephone' placeholder='Enter Phone Number'/>
                <label htmlFor="address">Address</label>
                <input type="text" id='address' placeholder='City, Country'/>
            </form>
            <form action="submit" className="educationform">
                <h3>Experience<img src="" alt="" className='educationarrow'/></h3>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id='fullname' placeholder='First and Last'/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email'placeholder='Enter Email'/>
                <label htmlFor="telephone">Phone Number<span>Recommended</span></label>
                <input type="tel" id='telephone' placeholder='Enter Phone Number'/>
                <label htmlFor="address">Address</label>
                <input type="text" id='address' placeholder='City, Country'/>
            </form>
            <form action="submit" className="educationform">
                <h3>Education Details <img src="" alt="" className='educationarrow'/></h3>
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id='fullname' placeholder='First and Last'/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email'placeholder='Enter Email'/>
                <label htmlFor="telephone">Phone Number<span>Recommended</span></label>
                <input type="tel" id='telephone' placeholder='Enter Phone Number'/>
                <label htmlFor="address">Address</label>
                <input type="text" id='address' placeholder='City, Country'/>
            </form>
        </div>
    </>
    )
}
