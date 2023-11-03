import './form.css';

export default function Form() {
  return (
    <>
        <div className="formwindow">
            <form action="submit" className="personalform">
                <h3>Personal Details</h3>
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
