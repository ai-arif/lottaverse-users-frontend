import React from 'react'

const index = () => {
  return (
    <div>
      <div className="container-fluid p-4 bg-dark">
        {/* create two input fields read only, Your Referral Id, Your Referral Link */}
        <div className="row p-4">
  <div className="col-md-6">
    <div className="form-group">
      <label for="exampleInputEmail1" className="text-white">Your Referral Id</label>
      <div className="input-group">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="111 222 36 41 54 9654" readOnly/>
        <div className="input-group-append">
          <button style={{background:"#4328f9","color":"white","border":"none"}} className="btn btn-outline-secondary copy-btn" type="button">Copy</button>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-6">
    <div className="form-group">
      <label for="exampleInputPassword1" className="text-white">Your Referral Link</label>
      <div className="input-group">
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="http://referral-link.link" readOnly/>
        <div className="input-group-append">
          <button style={{background:"#4328f9","color":"white","border":"none"}} className="btn btn-outline-secondary p-2 copy-btn" type="button">Copy</button>
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