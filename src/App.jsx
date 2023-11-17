import "./index.css";
import PersonalDetails from "./Components/PersonalDetails";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import SectionItem from "./Components/SectionItem";
import { useState } from "react";

function App() {

  const [resume, setResume] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  /* Handlers for personal details */
  const handleFullnameChange = (fullName) => {
    setResume({...resume, fullName: fullName});
  }
  const handleEmailChange = (email) => {
    setResume({...resume, email: email});
  }
  const handlePhoneChange = (phoneNumber) => {
    setResume({...resume, phoneNumber: phoneNumber});
  }
  const handleAddressChange = (address) => {
    setResume({...resume, address: address});
  }

  /* Handlers for educations */
  const handleNewEducation = (newEducation) => { 
    setEducation((currentEducations) => [...currentEducations, {id: Date.now(), schoolName: newEducation.schoolName, degree: newEducation.degree, startDate: newEducation.startDate, endDate: newEducation.endDate, location: newEducation.location}]);
  }

  /* Handlers for experience */
  const handleNewExperience = (newExperience) => { 
    setExperience((currentExperience) => [...currentExperience, {id: Date.now(), companyName: newExperience.companyName, role: newExperience.role, startDate: newExperience.startDate, endDate: newExperience.endDate, location: newExperience.location}]);
  }

  /* Handle event for clearing resume */
  const handleClearResume = () => {
    setResume({
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
    });
    setEducation([]);
    setExperience([]);
  }

  return (
    <div className="container">

      {/* Forms container */}
      <div className="forms">

        {/* Clear Resume Button */}
        <div className="form-div center-items">
          <button onClick={handleClearResume} className="clear-btn"><i className="fa-solid fa-trash-can"></i> Clear Resume</button>
        </div>
      
        {/* Personal Details Form */}
        <PersonalDetails 
          handleFullnameChange={handleFullnameChange}
          handleEmailChange={handleEmailChange}
          handlePhoneChange={handlePhoneChange}
          handleAddressChange={handleAddressChange}
        />

        {/* Education Form */}
        <Education handleNewEducation={handleNewEducation}/>

        {/* Experience From */}
        <Experience handleNewExperience={handleNewExperience}/>
      </div>

      {/* Resume container */}

      <div className="resume">

        {/* Resume Header */}
        <div className="resume-header">
          <h2 className="resume-fullname">{resume.fullName}</h2>
          <div className="personal-details">
            <p className="personal-detail"><i className="fa-solid fa-envelope"></i> {resume.email}</p>
            <p className="personal-detail"><i className="fa-solid fa-phone"></i> {resume.phoneNumber}</p>
            <p className="personal-detail"><i className="fa-solid fa-location-dot"></i> {resume.address}</p>
          </div>
        </div>

        {/* Resume Education Section */}
        <div className="body-section">
          <h2 className="section-title">Education</h2>
          {/* List of education items */}
          <div className="items-container">
          { education.map((edu) => {
            return <SectionItem key={edu.id} item={edu} type="education"/>
          }) }
          </div>
        </div>

        {/* Resume Experience Section */}
        <div className="body-section">
          <h2 className="section-title">Experience</h2>
          {/* List of experience items */}
          <div className="items-container">
          { experience.map((exp) => {
            return <SectionItem key={exp.id} item={exp} type="experience"/>
          }) }
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
