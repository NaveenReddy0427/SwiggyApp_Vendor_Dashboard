
const AddProduct = () => {
  return (
    <div className="firmSection">
        <form className="tableForm">
            <h3>Add Product</h3>
            <label>Product Name</label>
            <input type="text" placeholder="Enter your firm name"/><br/>
            <label>Price</label>
            <input type="text" placeholder="Enter your area"/><br/>
            <label>Category</label>
            <input type="text" placeholder="Enter your category"/><br/>
            <label>Best Seller</label>
            <input type="text" placeholder="Enter your category"/><br/>
            <label>Description</label>
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

export default AddProduct