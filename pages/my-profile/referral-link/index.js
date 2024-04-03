import React from 'react'

const index = () => {
  return (
    <div>
      <div className="container-fluid bg-dark">
        {/* create two input fields read only, Your Referral Id, Your Referral Link */}
        <div className="row p-4">
  <div className="col-md-6">
    <div className="form-group">
      <label for="exampleInputEmail1" className="text-white">Your Referral Id</label>
      <div class="input-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="111 222 36 41 54 9654" readOnly/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary copy-btn" type="button">Copy</button>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label for="exampleInputPassword1" className="text-white">Your Referral Link</label>
      <div class="input-group">
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="http://referral-link.link" readOnly/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary copy-btn" type="button">Copy</button>
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