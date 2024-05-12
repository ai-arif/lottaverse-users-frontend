import Head from "next/head";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
  const {user}=useSelector(state=>state.user)
  return (
    <div class="container">
      <Head>
        <title>Profile Overview</title>
      </Head>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">Profile Overview</div>
            <div class="card-body py-4 d-flex flex-column gap-3 ">
              <div className="mb-0 d-flex justify-content-between align-items-center">
                <div className="d-flex  gap-1 align-items-end">
                  <div className="d-flex gap-2">
                    <p className="mb-0">{user?.address}</p>
                    <img
                      src="/img/check.png"
                      alt="verified-icon"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
                <i class="ki-duotone ki-verify fs-1 text-primary"></i>
                {/* <p className="px-3 py-2 badge badge text-bg-success mb-0">
                  Status: Active
                </p> */}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>
                  <b>Premium</b>
                </p>
                <p>
                  <b>Expiry Date: </b>{new Date(user?.expiryDate).toDateString()}
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-center gap-3">
                {/* <div class="card profile-info-card p-0">
                  <div class="card-body py-3 px-4">
                    <h5 class="card-title text-warning p-0 mb-3">$0.000</h5>
                    <h6 class="card-subtitle mb-2 text-light">
                      Available Balance
                    </h6>
                  </div>
                </div> */}
                <div class="card profile-info-card p-0">
                  <div class="card-body py-3 px-4">
                    <h5 class="card-title text-warning p-0 mb-3">${user?.earnings}</h5>
                    <h6 class="card-subtitle mb-2 text-light">
                      Total Earnings
                    </h6>
                  </div>
                </div>
                <div class="card profile-info-card p-0">
                  <div class="card-body py-3 px-4">
                    <h5 class="card-title text-warning p-0 mb-3">${user?.payout}</h5>
                    <h6 class="card-subtitle mb-2 text-light">Pay Out</h6>
                  </div>
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
