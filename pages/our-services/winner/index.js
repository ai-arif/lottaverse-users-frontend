import priceConverter from "@/utils/priceConverter";
import Head from "next/head";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";
const index = () => {
  const { packages } = useSelector((state) => state.homepage);
  const [winners, setWinners] = useState([]);
  const [copyWinners, setCopyWinners] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [lotteries, setLotteries] = useState([]);
  const [rounds, setRounds] = useState(0);
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected(e.target.value);
    // find if found then get the package and get the round and set it to the state
    const found = packages.find((item) => item._id === e.target.value);
    if (found) {
      setRounds(found.rounds);
      getLotteries(found.lotteryType);
    }
  };
  const getLotteries = async (type) => {
    // /lottery-type/:lotteryType
    try {
      const res = await axiosInstance.get(`/api/lottery-type/${type}`);

      setLotteries(res.data.data);
      if (res.data.data.length > 0) {
        loadWinners(res.data.data[0]._id);
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  const loadWinners = async (id) => {
    try {
      const res = await axiosInstance.get(`/api/lottery-winner/${id}`);
      console.log(res.data);
      setWinners(res.data.data);
      setCopyWinners(res.data.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
        setWinners([]);
      } else {
        setErrorMessage("An error occurred");
      }
    }
  };
  // winners.map((item, index) => (
  // <tr>
  // <th scope="row">{index + 1}</th>
  // <td>{item?.address}</td>
  // <td>{item?.amount}</td>
  // <td>{item?.ticketId}</td>

  const searchByTicketId = (e) => {
    // search multiple winners by ticket id withing the winners array
    // do not find exact match
    // find the ticket id that contains the search term
    const search = e.target.value;
    const found = copyWinners.filter((item) => item.ticketId.includes(search));
    if (found.length > 0) {
      setWinners(found);
    }
  };

  const formatAddress = (address) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };
  return (
    <div>
      <Head>
        <title>Lottaverse - Winner</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pagetitle">
        <h1>Winner</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Our Services</li>
            <li className="breadcrumb-item active">Winner</li>
          </ol>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="form-group col-3">
            <label className="text-white" htmlFor="exampleFormControlSelect1">
              Package
            </label>
            <select onChange={handleChange} className="form-select" id="exampleFormControlSelect1">
              <option value="">Select</option>
              {packages?.map((item, index) => (
                <option value={item?._id}>{item?.lotteryType}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-3 mx-1">
            <label className="text-white" htmlFor="exampleFormControlSelect1">
              Round
            </label>
            <select
              onChange={(e) => {
                loadWinners(e.target.value);
              }}
              className="form-select"
              id="exampleFormControlSelect1"
            >
              {/* rounds form array of length rounds */}
              {lotteries.map((item, index) => (
                <option value={item?._id}>Round {item?.round}</option>
              ))}
            </select>
          </div>

          <div className="form-group col-3 ">
            <label className="text-white" htmlFor="exampleInputEmail1">
              Ticket
            </label>
            <input onChange={searchByTicketId} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ticket number" />
          </div>
        </div>
      </div>
      <div className="my-3 mb-3">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
      <div className="container-fluid my-4">
        <table className="table table-dark p-2">
          <thead>
            <tr>
              <th scope="col">Sl</th>
              <th scope="col">Position</th>
              <th scope="col">Address</th>
              <th scope="col">Win Amount</th>
              <th scope="col">Ticket No.</th>
            </tr>
          </thead>
          <tbody>
            {winners?.map((item, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
                  {item?.position?.includes("Random")
                    ? "4th"
                    : item?.position?.includes("Second")
                    ? "2nd"
                    : item?.position?.includes("Third")
                    ? "3rd"
                    : item?.position?.includes("First")
                    ? "1st"
                    : item?.position}
                </td>
                <td>{formatAddress(item?.address)}</td>
                <td>${priceConverter(item?.amount)}</td>
                <td>
                  {item?.ticketString?.split(" ").map((number, index) => (
                    <span key={index} className="ticket-number">
                      {number}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
