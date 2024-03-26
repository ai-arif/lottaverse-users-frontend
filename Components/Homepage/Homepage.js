import React from 'react'
import PackagesComponent from './PackagesComponent'

const Homepage = () => {
  return (
    <div>
      

        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-xxl-4 col-md-4">
              <PackagesComponent/>
            </div>
            <div className="col-xxl-4 col-md-4">
              <PackagesComponent/>
            </div>
            <div className="col-xxl-4 col-md-4">
              <PackagesComponent/>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Homepage
