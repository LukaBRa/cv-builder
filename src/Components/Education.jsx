import { useState } from "react"

export default function Education({ handleNewEducation }) {

    const [schoolName, setSchoolName] = useState("");
    const [degree, setDegree] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewEducation({schoolName, degree, startDate, endDate, location});
        setSchoolName("");
        setDegree("");
        setStartDate("");
        setEndDate("");
        setLocation("");
    }

    return (
        <div className="form-div">
            <h2><i className="fa-solid fa-graduation-cap"></i> Education</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-input">
                <label>School</label>
                <input
                    value={schoolName}
                    className="form-field"
                    type="text"
                    placeholder="Enter school name"
                    onChange={(e) => setSchoolName(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label>Degree</label>
                <input
                    value={degree}
                    className="form-field"
                    type="text"
                    placeholder="Enter degree"
                    onChange={(e) => setDegree(e.target.value)}
                />
            </div>
            <div className="flex-inputs">
                <div className="form-input">
                    <label>Start Date</label>
                    <input
                        value={startDate}
                        className="form-field"
                        type="text"
                        placeholder="Enter start date"
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="form-input">
                    <label>End Date</label>
                    <input
                        value={endDate}
                        className="form-field"
                        type="text"
                        placeholder="Enter end date"
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-input">
                <label>Location</label>
                <input 
                    value={location}
                    className="form-field"
                    type="text"
                    placeholder="Enter school location"
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className="center-items"><button className="add-form-btn"><i className="fa-solid fa-plus"></i> Add Education</button></div>
        </form>
        </div>
    )
}