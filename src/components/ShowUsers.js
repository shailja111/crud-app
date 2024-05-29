import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import CustomModal from "./CustomModal";
import { deleteUser } from "../features/gitUserSlice";

function ShowUsers() {
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app);
  console.log(data);
  if (data.loading) {
    return <h2>Loading...</h2>;
  }

  if (data.error != null) {
    return <h3>{data.error}</h3>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2>Showusers</h2>

      {data.users.map((ele) => (
        <div key={ele.id} className="card w-50 mx-auto my-2">
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
            <p className="card-text">{ele.gender}</p>
            <button
              className="card-link"
              onClick={() => [setId(ele.id), setShowPopup(true)]}
            >
              View
            </button>
            <Link className="card-link" to={`/edit/${ele.id}`}>
              Edit
            </Link>
            <Link
              className="card-link"
              onClick={() => {
                dispatch(deleteUser(ele.id));
              }}
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowUsers;
