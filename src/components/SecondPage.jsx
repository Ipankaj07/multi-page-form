import React, { useContext, useEffect } from "react";
import { UserDetailsContext } from "../context/UserDetailsContext";
import { useNavigate } from "react-router-dom";

function SecondPage() {
  const {
    name,
    age,
    dateOfBirth,
    stateOfResidence,
    address,
    pinCode,
    dispatch,
  } = useContext(UserDetailsContext);
  const navigate = useNavigate();

  let data = {
    name,
    age,
    dateOfBirth,
    stateOfResidence,
    address,
    pinCode,
  };

  useEffect(() => {
    if (name === "" || age === "" || dateOfBirth === "") {
      alert("Please fill all the details");
      navigate("/firstpage");
    }
  });

  const postData = async () => {
    await fetch("https://mock-json-server-db.herokuapp.com/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const handleSubmit = () => {
    postData(data);
    setTimeout(() => {
      navigate("/user");
      dispatch({ type: "CLEAR_STATE" });
    }, 500);
  };

  return (
    <div className="secondPage_div">
      <h5>- 02 -</h5>
      <div className="form_div">
        <div>
          <label>State of residence:</label>
          <input
            type="text"
            value={stateOfResidence}
            onChange={(e) =>
              dispatch({ type: "UPDATE_STATE", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) =>
              dispatch({ type: "UPDATE_ADDRESS", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Pin Code:</label>
          <input
            type="number"
            value={pinCode}
            onChange={(e) =>
              dispatch({ type: "UPDATE_PIN", payload: e.target.value })
            }
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={() => {
              navigate("/firstpage");
            }}
          >
            Prev
          </button>

          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
