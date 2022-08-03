



import React, { Component } from 'react'
import axios from 'axios'







export default class UserForm extends Component {



  constructor(props) {
    super(props)

    this.state = {
      values: {
        taiKhoan: '',
        hoTen: '',
        matKhau: '',
        soDT: '',
        email: '',
        loaiND: 'khachHang',

      }
    }
  }




  handleSubmit = async (evt) => {
    evt.preventDefault();


    const { id, ...payload } = this.state.values


    try {
      if (id) {
        await axios.put(`https://62bb0738573ca8f832912e50.mockapi.io/reactbuoi7/${id}`, payload);
        this.setState({
          values: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            soDT: '',
            email: '',
            loaiND: 'khachHang',
          }
        })

        document.querySelector('.btn.btn-success').disabled = false
      }
      else {
        await axios.post("https://62bb0738573ca8f832912e50.mockapi.io/reactbuoi7", payload)



        this.setState({
          values: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            soDT: '',
            email: '',
            loaiND: 'khachHang',
          }
        })
      }
      this.props.onSuccess();



    }
    catch (err) {
      console.log(err)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.user && this.props.user !== prevProps.user) {
      this.setState({ values: { ...this.props.user } })
    }
  }



  
  handleChange = (evt) => {
    const { value, name } = evt.target
    console.log(name, value)
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }

    )
    )

  }

  render() {
    const { values } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='container'>
            <div className="row">
              <div className="mb-3 col-lg-6">
                <label htmlFor="taiKhoan" className="form-label">
                  Tài khoản
                </label>
                <input
                  id="taiKhoan"
                  className="form-control"
                  value={values.taiKhoan}
                  name="taiKhoan"
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="hoTen" className="form-label">
                  Họ tên
                </label>
                <input
                  id="hoTen"
                  className="form-control"
                  value={values.hoTen}
                  name="hoTen"
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="matKhau" className="form-label">
                  Mật khẩu
                </label>
                <input
                  id="matKhau"
                  className="form-control"
                  value={values.matKhau}
                  name="matKhau"
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="soDT" className="form-label">
                  Số điện thoại
                </label>
                <input
                  id="soDT"
                  className="form-control"
                  value={values.soDT}
                  name="soDT"
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  className="form-control"
                  value={values.email}
                  name="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-3 col-lg-6">
                <label htmlFor="loaiND" className="form-label">
                  Mã loại người dùng
                </label>
                <select
                  id="loaiND"
                  className="form-control"
                  value={values.loaiND}
                  name="loaiND"
                  onChange={this.handleChange}>
                  <option value="khachHang">Khách hàng</option>
                  <option value="nhanVien"> Nhân viên</option>
                  <option value="quanLy">Quản lý</option>


                </select>
              </div>
            </div>
          </div>

          <div className="d-flex gap-1 mt-4">
            <button className="btn btn-success">Đăng ký</button>
            <button className="btn btn-primary">Cập nhật</button>
          </div>
        </form >
      </div >
    )
  }
}
