import React, { useContext } from "react";
import { UserDetailsContext } from "../context/UserDetailsContext";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const { name, age, dateOfBirth, dispatch } = useContext(UserDetailsContext);

  const navigate = useNavigate();

  return (
    <div className='firstPage_div' >
        <h5>- 01 -</h5>
      <div className="form_div">
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) =>
              dispatch({ type: "UPDATE_NAME", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) =>
              dispatch({ type: "UPDATE_AGE", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) =>
              dispatch({ type: "UPDATE_DOB", payload: e.target.value })
            }
          />
        </div>
        <button
          onClick={() => {
            navigate("/secondpage");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
