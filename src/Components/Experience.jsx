export default function Experience() {
    return (
        <div className="form-div">
            <h2><i class="fa-solid fa-briefcase"></i> Experience</h2>
            <div>
            <div className="form-input">
                <label>Company</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter company name"
                />
            </div>
            <div className="form-input">
                <label>Position</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter position"
                />
            </div>
            <div className="flex-inputs">
                <div className="form-input">
                    <label>Start Date</label>
                    <input 
                        className="form-field"
                        type="text"
                        placeholder="Enter start date"
                    />
                </div>
                <div className="form-input">
                    <label>End Date</label>
                    <input 
                        className="form-field"
                        type="text"
                        placeholder="Enter end date"
                    />
                </div>
            </div>
            <div className="form-input">
                <label>Location</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter school location"
                />
            </div>
        </div>
            <div className="center-items"><button className="add-form-btn"><i class="fa-solid fa-plus"></i> Add Experience</button></div>
        </div>
    )
}