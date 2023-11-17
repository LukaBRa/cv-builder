import { useState } from "react"

export default function Experience({ handleNewExperience }) {

    const [companyName, setCompanyname] = useState("");
    const [role, setRole] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewExperience({companyName, role, startDate, endDate, location});
        setCompanyname("");
        setRole("");
        setStartDate("");
        setEndDate("");
        setLocation("");
    }

    return (
        <div className="form-div">
            <h2><i className="fa-solid fa-briefcase"></i> Experience</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-input">
                <label>Company</label>
                <input
                    value={companyName} 
                    className="form-field"
                    type="text"
                    placeholder="Enter company name"
                    onChange={(e) => setCompanyname(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label>Position</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter position"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </div>
            <div className="flex-inputs">
                <div className="form-input">
                    <label>Start Date</label>
                    <input 
                        className="form-field"
                        type="text"
                        placeholder="Enter start date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div className="form-input">
                    <label>End Date</label>
                    <input 
                        className="form-field"
                        type="text"
                        placeholder="Enter end date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-input">
                <label>Location</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter school location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className="center-items"><button className="add-form-btn"><i className="fa-solid fa-plus"></i> Add Experience</button></div>
        </form>
        </div>
    )
}