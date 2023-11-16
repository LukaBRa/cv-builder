import "./index.css";
import PersonalDetails from "./Components/PersonalDetails";
import Education from "./Components/Education";
import Experience from "./Components/Experience";

function App() {

  return (
    <div className="container">
      <div className="forms">

        {/* Clear Resume Button */}
        <div className="form-div center-items">
          <button className="clear-btn"><i class="fa-solid fa-trash-can"></i> Clear Resume</button>
        </div>
      
        {/* Personal Details Form */}
        <PersonalDetails />

        {/* Education Form */}
        <Education />

        {/* Experience From */}
        <Experience />
      </div>
    </div>
  )
}

export default App
