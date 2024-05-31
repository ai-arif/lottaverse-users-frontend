import React from 'react'

const ConnectWalletModal = ({ connectWallet, closeButtonRef }) => {
  return (
    <div>

      <div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div  class="modal-dialog modal-dialog-centered ">
          <div class="modal-content bg-dark">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Choose Wallet</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <table className='table login_table table-dark'>
              <tr>
                  <td>
                    <div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={connectWallet}>
                      <img src="https://miro.medium.com/v2/resize:fit:555/1*FjSkfan-Kh3vrgtlW8UP_g.png" alt="metamask" style={{ width: '60px', height: '60px' }} />
                      <p className="text-white mx-2 fw-bold text-center">Metamask</p>
                    </div>
                  </td>
                </tr>
                <hr />
                <tr>
                  <td>
                    <div className='d-flex align-items-center' style={{ cursor: 'pointer' }} onClick={connectWallet}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpg5eK8-nasS-jPZ4b1mzfg8VoUdJNwln5ycuaG4w5Q&s" alt="metamask" style={{ width: '60px', height: '60px' }} />
                      <p className="text-white mx-2 fw-bold text-center">Trust Wallet</p>
                    </div>
                  </td>
                </tr>
                <hr />
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
            <div class="modal-footer">
              <button ref={closeButtonRef} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>    </div>
  )
}

export default ConnectWalletModal
