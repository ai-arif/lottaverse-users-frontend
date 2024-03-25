import React from 'react'

const index = () => {
  return (
    <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            Profile Overview
          </div>
          <div class="card-body">
            <div className="row my-2">
            <pre className='col-md-6 fw-bold h5'>Wallet number: 0000XXXXXXXXXXXX0000</pre>
            <p className='col-md-2 p-2 h6 badge badge text-bg-success'>Status: Active</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="activeInactiveSwitch" checked/>
                <label class="form-check-label" for="activeInactiveSwitch">Inactive</label>
              </div>
            </div>
            <p>Note: If no one buys the lottery within 30 days, his ID will be deactivated.</p>
            <p>Referral Balance of inactive ID will go to company account.</p>
            <div class="row">
              <div class="col-md-6">
                <p>User Type:</p>
              </div>
              <div class="col-md-6 text-end">
                <p>Expire Date: (fixed on ticket purchase within 30 days)</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <p>Available Balance:</p>
              </div>
              <div class="col-md-6 text-end">
                <p>Total Earning  Pay Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default index
