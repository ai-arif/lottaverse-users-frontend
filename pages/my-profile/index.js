import React from "react";

const index = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">Profile Overview</div>
            <div class="card-body py-4 d-flex flex-column gap-3 ">
              <div className="mb-0 d-flex justify-content-between align-items-center">
                <div className="d-flex  gap-1 align-items-end">
                  <div className="d-flex gap-2">
                    <p className="mb-0">0000XXXXXXXXXXXX0000</p>
                    <img
                      src="img/verified-icon.png"
                      alt="verified-icon"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
                <i class="ki-duotone ki-verify fs-1 text-primary"></i>
                <p className="px-3 py-2 badge badge text-bg-success mb-0">
                  Status: Active
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p>
                  <b>User Type:</b>User/Premium
                </p>
                <p>
                  <b>Expiry Date:</b>00/00/0000
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-center gap-3">
                <div class="card profile-info-card p-0">
                  <div class="card-body py-3 px-4">
                    <h5 class="card-title text-warning p-0 mb-3">$0.000</h5>
                    <h6 class="card-subtitle mb-2 text-light">
                      Available Balance
                    </h6>
                  </div>
                </div>
                <div class="card profile-info-card p-0">
                  <div class="card-body py-3 px-4">
                    <h5 class="card-title text-warning p-0 mb-3">$0.0000</h5>
                    <h6 class="card-subtitle mb-2 text-light">
                      Total Earnings
                    </h6>
                  </div>
                </div>
                <div class="card profile-info-card p-0">
                  <div class="card-body py-3 px-4">
                    <h5 class="card-title text-warning p-0 mb-3">$0.0000</h5>
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
