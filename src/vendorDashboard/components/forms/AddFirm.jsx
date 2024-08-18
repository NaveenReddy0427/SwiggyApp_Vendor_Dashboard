
const AddFirm = () => {
  return (
    <div className="firmSection">
        <form className="tableForm">
            <h3>Add Firm</h3>
            <label>Firm Name</label>
            <input type="text" /><br/>
            <label>Area</label>
            <input type="text" /><br/>

            <div className="checkInp">
                <label >Category</label>
                <div className="inputsContainer">
                    <div className="checboxContainer">
                        <label>Veg</label>
                        <input type="checkbox" value="veg" />
                    </div>
                    <div className="checboxContainer">
                        <label>Non-Veg</label>
                        <input type="checkbox" value="non-veg" />
                    </div>
                </div>
            </div>

            <label>offer</label>
            <input type="text" /><br/>

            <div className="checkInp">
                <label >Region</label>
                <div className="inputsContainer">
                    <div className="regBoxContainer">
                        <label>South Indian</label>
                        <input type="checkbox" value="south-indian"   
                        />
                    </div>
                    <div className="regBoxContainer">
                        <label>North-Indian</label>
                        <input type="checkbox" value="north-indian"  
                        />
                    </div>
                    <div className="regBoxContainer">
                        <label>Chinese</label>
                        <input type="checkbox" value="chinese" 
                        />
                    </div>
                    <div className="regBoxContainer">
                        <label>Bakery</label>
                        <input type="checkbox" value="bakery" 
                        />
                    </div>
                </div>
            </div>
            
            <label>Firm Image</label>
            <input type="file" /><br/>
            <div className="btnSubmit">
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AddFirm