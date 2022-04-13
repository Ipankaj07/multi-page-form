import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function UserDetailsPage() {
  const [data, setData] = useState([
    {
      name: "",
      age: "",
      dateOfBirth: "",
      stateOfResidence: "",
      address: "",
      pinCode: "",
    },
  ]);

  const getData = async () => {
    const response = await fetch(
      "https://mock-json-server-db.herokuapp.com/userData"
    );
    const data = await response.json();
    // console.log("data :", data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      {/* <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>State of Residence</th>
            <th>Address</th>
            <th>Pin Code</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={uuidv4()}>
              <td style={{ borderLeft: "1px solid #ccc" }}>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.stateOfResidence}</td>
              <td>{item.address}</td>
              <td>{item.pinCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          navigate("/firstpage");
        }}

        style={{
          marginLeft: "4.5rem"
        }}
      >
        Home
      </button>
    </div>
  );
}

export default UserDetailsPage;
