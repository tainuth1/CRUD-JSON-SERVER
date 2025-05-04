import React, { useState } from "react";

const Row = ({ pro, products, setProduct }) => {
  const [updateProduct, setUpdatePrduct] = useState(pro);
  const handleChange = (e) => {
    setUpdatePrduct({ ...updateProduct, [e.target.name]: e.target.value });
  };
  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/product/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete Product");
      }
      const produtsAfterDelete = products.filter((pro) => pro.id != id);
      setProduct(produtsAfterDelete);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (
        updateProduct.name != "" &&
        updateProduct.image != "" &&
        updateProduct.price != 0
      ) {
        const res = await fetch(`http://localhost:3000/product/${pro.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateProduct),
        });
        if (!res.ok) {
          throw new Error("Failed to update Product");
        }
      } else {
        alert("Some field is Empty");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <tr>
      <th scope="row" style={{ color: "#000", verticalAlign: "middle" }}>
        #{pro.id}
      </th>
      <td style={{ verticalAlign: "middle" }}>{pro.name}</td>
      <td style={{ verticalAlign: "middle" }}>${pro.price}</td>
      <td style={{ verticalAlign: "middle" }}>
        <img
          className="border p-1"
          src={pro.image}
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
        <button
          className="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target={`#updateModle-${pro.id}`}
        >
          Update
        </button>
        <div
          class="modal fade"
          id={`updateModle-${pro.id}`}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form onSubmit={handleUpdate}>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={updateProduct.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Name"
                  />
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={updateProduct.price}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Price"
                  />
                  <label htmlFor="">Image</label>
                  <input
                    type="url"
                    name="image"
                    value={updateProduct.image}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Image url: http://image.jpg"
                  />
                  <div className="d-flex gap-2 justify-content-end">
                    <button
                      type="button"
                      class="btn btn-secondary mt-3"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      className="btn btn-primary mt-3"
                      data-bs-dismiss="modal"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-danger ms-3"
          onClick={() => deleteProduct(pro.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Row;
