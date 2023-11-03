import './sheet.css'

export default function Sheetrep() {
  return (
    <>
        <div className="sheetrep">
            <div className='innerviewsheet'>
                <div className="sheetheader">
                    <h1 className="sheethone">Name Place Holder</h1>
                    <div className="innerheadersheet">
                        <p className="sheetone"><img src="../../../public/message.jpg" alt="" width={'20px'} height={'20px'} className='headphotosheet'/>Email placeholder</p>
                        <p className="sheettwo"><img src="../../../public/phone.webp" alt="" width={'20px'} height={'20px'} className='headphotosheet'/>Phone placeholder</p>
                        <p className="sheetthree"><img src="../../../public/ping.png" alt="" width={'20px'} height={'20px'} className='headphotosheet'/>Address placeholder</p>
                    </div>
                </div>
                <div className="sheetbody">
                    <div className="bodydivs">
                        <h2 className="Education">Education</h2>
                        <div className='sheetsinnards'>
                            <p>School Name</p>
                            <p>School Address</p>
                            <p>Time Attended</p>
                            <p className="edubody">Subjects Studied</p>
                        </div>
                        <div className='sheetsinnards'>
                            <p>School Name</p>
                            <p>School Address</p>
                            <p>Time Attended</p>
                            <p className="edubody">Subjects Studied</p>
                        </div>
                        <div className='sheetsinnards'>
                            <p>School Name</p>
                            <p>School Address</p>
                            <p>Time Attended</p>
                            <p className="edubody">Subjects Studied</p>
                        </div>
                    </div>
                    <div className="bodydivs">
                        <h2 className="Experience">Experience</h2>
                        <div className='jobdivs'>
                            <p className='sheettitleexperience'>Job Name</p>
                            <p className="edubody jobdesc">Job Position Held at end</p>
                            <p className="edubody jobdesc">Job Reason fopr leaving</p>
                            <p className="edubody jobdesc">Job Responsibilities Description</p>
                        </div>
                        <div className='jobdivs'>
                            <p className='sheettitleexperience'>Job Name</p>
                            <p className="edubody jobdesc">Job Position Held at end</p>
                            <p className="edubody jobdesc">Job Reason fopr leaving</p>
                            <p className="edubody jobdesc">Job Responsibilities Description</p>
                        </div>
                        <div className='jobdivs'>
                            <p className='sheettitleexperience'>Job Name</p>
                            <p className="edubody jobdesc">Job Position Held at end</p>
                            <p className="edubody jobdesc">Job Reason fopr leaving</p>
                            <p className="edubody jobdesc">Job Responsibilities Description</p>
                        </div>
                    </div>
                    <div className="bodydivs">
                        <h2 className="Skills">Skills</h2>
                        <div className="skillsheets">
                            <p>Skill</p>
                            <p>Description</p>
                        </div>
                        <div className="skillsheets">
                            <p>Skill</p>
                            <p>Description</p>
                        </div>
                        <div className="skillsheets">
                            <p>Skill</p>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
