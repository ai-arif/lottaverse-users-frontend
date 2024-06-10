import React from "react";

const ProfileStructure = ({ name }) => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <div className="rounded-circle overflow-hidden bg-primary" style={{ width: "150px", height: "150px" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" className="img-fluid rounded-circle" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
      <div className="border  border-1">
        <div className="text-center p-3">
          <h5 className="text-white">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProfileStructure;
