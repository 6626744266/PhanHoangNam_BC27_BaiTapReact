import React from 'react'

const Modal = ({ selectedProduct, isOpen, onClose }) => {
  return (
    <>
      <div style={{ display: isOpen ? 'block' : "none" }}
        className='modal fade show'
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Thông tin sản phẩm</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                <span aria-hidden="true" >×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column">
                <img src={selectedProduct.image} className='w-100' />
                <table className="table">
                  <tbody>
                    <tr>
                      <td style={{ fontSize: "20px", width: '50%' }} >Tên</td>
                      <td>{selectedProduct.name}</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "20px", width: '50%' }}>Giá</td>
                      <td>{selectedProduct.price}</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "20px", width: '50%' }}>Mô tả</td>
                      <td>{selectedProduct.description}</td>
                    </tr>
                    <tr>
                      <td style={{ color: "red", fontSize: "20px", width: '50%' }}>Còn lại</td>
                      <td>{selectedProduct.quantity}</td>
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>



      </div>
      {isOpen && <div className="modal-backdrop fade show"></div>}
    </>
  )
}

export default Modal