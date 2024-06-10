import { fetchPackages } from "@/features/homepage/homepageSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Leaderboard from "./Leaderboard";
import OtherCommissions from "./OtherCommissions";
import PackagesComponent from "./PackagesComponent";
import ResultsComponent from "./ResultsComponent";

const Homepage = () => {
  const dispatch = useDispatch();
  const { packages } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(fetchPackages());
  }, []);
  return (
    <div>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">
          {packages.map((item, index) => (
            <div className="col-xxl-6 col-md-6">
              <PackagesComponent data={item} />
            </div>
          ))}
          {/* <div className="col-xxl-4 col-md-4">
            <PackagesComponent />
          </div>
          <div className="col-xxl-4 col-md-4">
            <PackagesComponent />
          </div> */}
        </div>
      </section>
      <div className="pagetitle">
        <h1>Results</h1>
      </div>
      <section className="section results">
        <div className="row">
          {packages.map((item, index) => (
            <div className="col-xxl-6 col-md-6">
              <ResultsComponent data={item} />
            </div>
          ))}
          {/* <div className="col-xxl-6 col-md-6">
            <ResultsComponent />
          </div> */}
          {/* <div className="col-xxl-6 col-md-6">
            <ResultsComponent />
          </div> */}
        </div>
      </section>
      <div className="row">
        <div className="col-md-6">
          <section className="section">
            <OtherCommissions />
          </section>
        </div>
        <div className="col-md-6 my-3">
          <section className="section my-4 leaderboard">
            <Leaderboard />
          </section>
        </div>
      </div>
      {/* <div className="pagetitle">
        <h1>Leaderboard</h1>
        
      </div> */}
    </div>
  );
};

export default Homepage;
