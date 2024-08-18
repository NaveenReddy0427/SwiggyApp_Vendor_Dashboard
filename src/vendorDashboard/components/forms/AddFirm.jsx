
const AddFirm = () => {
  return (
    <div className="firmSection">
        <form className="tableForm">
            <h3>Add Firm</h3>
            <label>Firm Name</label>
            <input type="text" placeholder="Enter your firm name"/><br/>
            <label>Area</label>
            <input type="text" placeholder="Enter your area"/><br/>
            <label>Category</label>
            <input type="text" placeholder="Enter your category"/><br/>
            <label>Region</label>
            <input type="text" placeholder="Enter your category"/><br/>
            <label>offer</label>
            <input type="text" placeholder="Enter your category"/><br/>
            <label>Firm Image</label>
            <input type="file" placeholder="Enter your category"/><br/>
            <div className="btnSubmit">
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddFirm