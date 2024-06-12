import React from 'react'

const ConnectWalletModal = ({ connectWallet, closeButtonRef }) => {
  return (
    <div>

      <div  className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div  className="modal-dialog modal-dialog-centered ">
          <div className="modal-content" style={{ background: "#0B0629", color: "white" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Choose Wallet</h1>
              <button ref={closeButtonRef} type="button" className="custom-close-button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className='table login_table table-dark'>
              <tr>
                  <td>
                    <div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={connectWallet}>
                      <img src="https://miro.medium.com/v2/resize:fit:555/1*FjSkfan-Kh3vrgtlW8UP_g.png" alt="metamask" style={{ width: '60px', height: '60px' }} />
                      <p className="text-white mx-2 fw-bold text-center">Metamask</p>
                    </div>
                  </td>
                </tr>
                {/* <hr /> */}
                <tr>
                  <td>
                    <div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={connectWallet}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpg5eK8-nasS-jPZ4b1mzfg8VoUdJNwln5ycuaG4w5Q&s" alt="metamask" style={{ width: '60px', height: '60px' }} />
                      <p className="text-white mx-2 fw-bold text-center">Trust Wallet</p>
                    </div>
                  </td>
                </tr>
                {/* <hr /> */}
                <tr>
                  <td>
                  <div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={connectWallet}>
                  <img src="https://avatars.githubusercontent.com/u/45615063?s=280&v=4" alt="metamask" style={{ width: '60px', height: '60px' }} />
                  <p className="text-white mx-2 fw-bold text-center">BNB Smart Chain</p>
                </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              {/* show a text Don't have wallet ? Download now */}
              
              <p className="text-white text-center">Don't have wallet ?  {"  "}
                <a className='text-primary' href="https://ethereum.org/en/wallets/find-wallet/#main-content" target="_blank" rel="noopener noreferrer">Download now</a>

              </p>
              
              {/* <button ref={closeButtonRef} type="button" className="btn d-none btn-secondary" data-bs-dismiss="modal">Close</button> */}
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>    </div>
  )
}

export default ConnectWalletModal
