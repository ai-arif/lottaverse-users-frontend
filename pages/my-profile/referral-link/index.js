import Head from "next/head";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const index = () => {
  const { user } = useSelector((state) => state.user);

  const handleCopyText = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Copied to clipboard");
      })
      .catch((error) => {
        toast.error("Failed to copy to clipboard");
        // Handle error here
      });
  };
  return (
    <div>
      <Head>
        <title>Referral Link</title>
      </Head>
      <div className="container-fluid bg-transparent p-4">
        {/* create two input fields read only, Your Referral Id, Your Referral Link */}
        <div className="row p-4">
          {/* <div className="col-md-6">
    <div className="form-group">
      <label htmlFor="exampleInputEmail1" className="text-white">Your Referral Id</label>
      <div className="input-group">
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user?.referralId} readOnly/>
        <div className="input-group-append">
          <button onClick={()=>{
            handleCopyText(user?.referralId)
          }} style={{background:"#4328f9","color":"white","border":"none"}} className="btn btn-outline-secondary copy-btn" type="button">Copy</button>
        </div>
      </div>
    </div>
  </div> */}
          <div className="col-md-10">
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="text-white">
                Your Referral Link
              </label>
              <div className="input-group">
                <input type="text" className="form-control" id="exampleInputPassword1" value={user?.referralLink} readOnly />
                <div className="input-group-append">
                  <button
                    onClick={() => {
                      handleCopyText(user?.referralLink);
                    }}
                    style={{ background: "#4328f9", color: "white", border: "none" }}
                    className="btn btn-outline-secondary p-2 copy-btn"
                    type="button"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
