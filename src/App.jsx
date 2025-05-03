import React, { useState } from "react";

const App = () => {
  const [productData, setProductData] = useState({
    id: Date.now(),
    name: "",
    price: 0,
    image: "",
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!res.ok) {
        throw new Error("Faild to add data");
      }
      setProductData({
        id: Date.now(),
        name: "",
        price: 0,
        image: "",
      });
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="p-4">
      <div className="text-center bg-primary py-3 rounded-2">
        <h1 className="text-white">CRUD JSON SERVER</h1>
      </div>
      <div className="py-4 d-flex justify-content-end">
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add New Product
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Product
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    value={productData.name}
                    onChange={handleChange}
                    name="name"
                    className="form-control"
                    placeholder="Name"
                  />
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Price"
                  />
                  <label htmlFor="">Image</label>
                  <input
                    type="url"
                    name="image"
                    value={productData.image}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Image url: http://image.jpg"
                  />
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary mt-3">Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                style={{ color: "#000", verticalAlign: "middle" }}
              >
                111111
              </th>
              <td style={{ verticalAlign: "middle" }}>Coca Cola</td>
              <td style={{ verticalAlign: "middle" }}>$99.99</td>
              <td style={{ verticalAlign: "middle" }}>
                <img
                  src="https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14/lifestyle/-1024w2/gsmarena_019.jpg"
                  alt="Product"
                  style={{
                    width: "60px",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </td>
              <td style={{ verticalAlign: "middle" }}>
                <button className="btn btn-outline-primary">Update</button>
                <button className="btn btn-danger ms-3">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
