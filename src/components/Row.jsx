import React from "react";

const Row = ({ pro }) => {
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
        <button className="btn btn-outline-primary">Update</button>
        <button className="btn btn-danger ms-3">Delete</button>
      </td>
    </tr>
  );
};

export default Row;
