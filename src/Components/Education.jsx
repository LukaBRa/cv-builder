
export default function Education() {
    return (
        <div className="form-div">
            <h2><i class="fa-solid fa-graduation-cap"></i> Education</h2>
            <div>
            <div className="form-input">
                <label>School</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter school name"
                />
            </div>
            <div className="form-input">
                <label>Degree</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter degree"
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
            <div className="center-items"><button className="add-form-btn"><i class="fa-solid fa-plus"></i> Add Education</button></div>
        </div>
    )
}