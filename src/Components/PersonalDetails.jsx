
export default function PersonalDetails({ 
    handleFullnameChange,
    handleEmailChange,
    handlePhoneChange,
    handleAddressChange
    }) {
    return (
        <div className="form-div">
            <h2>Personal Details</h2>
            <div className="form-input">
                <label>Full Name</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter full name"
                    onChange={(e) => handleFullnameChange(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label>Email</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter email"
                    onChange={(e) => handleEmailChange(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label>Phone number</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter phone number"
                    onChange={(e) => handlePhoneChange(e.target.value)}
                />
            </div>
            <div className="form-input">
                <label>Address</label>
                <input 
                    className="form-field"
                    type="text"
                    placeholder="Enter address"
                    onChange={(e) => handleAddressChange(e.target.value)}
                />
            </div>           
        </div>
    )
}