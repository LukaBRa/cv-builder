
export default function PersonalDetails() {
    return (
        <div className="form-div">
            <h2>Personal Details</h2>
            <div className="form-input">
                <label>Full Name</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter full name"
                />
            </div>
            <div className="form-input">
                <label>Email</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter email"
                />
            </div>
            <div className="form-input">
                <label>Phone number</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter phone number" 
                />
            </div>
            <div className="form-input">
                <label>Address</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter address" 
                />
            </div>           
        </div>
    )
}